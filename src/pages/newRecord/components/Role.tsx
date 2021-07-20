import { Button } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { setPlayer } from 'src/redux/recordSlice';
import { dispatch, RootState } from 'src/redux/store';
import { getRoleStep, Role as RoleType } from 'src/services/RecordService';
import style from './Role.module.scss';

type Props = {
  onClick: () => void;
};

const Role = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  const [numOrder, setNumOrder] = useState<Number[]>([]);
  const [roleStep, setRoleStep] = useState<number>(0);
  const [roleData, setRoleData] = useState<RoleType[]>([]);
  const [whichIsClicked, setWhichIsClicked] = useState<Number[]>([]);

  useEffect(() => {
    setRoleData(getRoleStep(state.record.type!));
  }, [state]);

  const onRoleClick = (num: string, playerRole: string) => () => {
    if (!numOrder.includes(Number(num))) {
      if (!whichIsClicked.includes(Number(num)))
        setWhichIsClicked(whichIsClicked.concat(Number(num)));
    } else alert('玩家角色重複');
  };

  const onSubmitClick = () => {
    const numOrderConcat = numOrder.concat(whichIsClicked);
    setNumOrder(numOrderConcat);
    if (roleStep === 6) {
      let playerAndRole: Player[] = [];
      let roleDataIndex = 0;
      let count = 0;
      for (const element of numOrderConcat) {
        const id = String(element);
        const name = state.record.player![Number(element) - 1].name;
        const role = roleData[roleDataIndex].roleCode;
        const input = { id, name, role };
        playerAndRole = playerAndRole.concat(input);
        count += 1;
        if (count === roleData[roleDataIndex].howMany) {
          roleDataIndex += 1;
          count = 0;
        }
      }
      playerAndRole.sort((a: Player, b: Player) => {
        if (Number(a.id) < Number(b.id)) return -1;
        if (Number(a.id) > Number(b.id)) return 1;

        return 0;
      });
      dispatch(setPlayer(playerAndRole));
      onClick();
    } else setRoleStep(roleStep + 1);
    setWhichIsClicked([]);
  };

  const onReturnClick = () => {
    if (whichIsClicked.length === 0)
      if (roleStep !== 0) {
        setNumOrder(numOrder.slice(0, numOrder.length - roleData[roleStep - 1].howMany));
        setRoleStep(roleStep - 1);
      }
    setWhichIsClicked([]);
  };

  const numDisabledJudge = (i: number) => {
    if (whichIsClicked.includes(i)) return false;
    else if (roleData[roleStep].howMany === whichIsClicked.length) return true;
    else return false;
  };

  const submitDisabledJudge = () => {
    if (roleData[roleStep].howMany === whichIsClicked.length) return false;
    else return true;
  };

  const displayRoleJudge = (i: Number) => {
    if (numOrder.includes(i)) {
      let numIndex = numOrder.indexOf(i) + 1;
      let roleDataIndex = 0;
      while (numIndex > 0) {
        numIndex -= roleData[roleDataIndex].howMany;
        if (numIndex <= 0) return roleData[roleDataIndex].roleName;
        roleDataIndex += 1;
      }
    } else return '';
  };

  if (roleData.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div className={style.title}>身份發放</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleData[roleStep].roleName}</div>
        </div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: Player, i: number) => {
            return (
              <Button
                key={i}
                className={classNames(style.num, {
                  [style.clicked]:
                    numOrder.includes(Number(v.id)) || whichIsClicked.includes(Number(v.id)),
                })}
                type="text"
                onClick={onRoleClick(v.id, roleData[roleStep].roleCode)}
                disabled={numDisabledJudge(Number(v.id))}
              >
                {v.id} {displayRoleJudge(Number(v.id))}
                <br />
                {v.name.slice(0, 5)}
              </Button>
            );
          })}
        </div>
      </div>

      <div className={style.btnFrame}>
        <Button type="text" className={style.backbtn} onClick={onReturnClick}>
          Back
        </Button>
        <Button
          type="text"
          className={style.btn}
          disabled={submitDisabledJudge()}
          onClick={onSubmitClick}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Role;
