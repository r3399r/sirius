import { Button } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Player as PlayerType } from 'src/model/Record';
import { setRole } from 'src/redux/recordSlice';
import { RootState } from 'src/redux/store';
import style from './Role.module.scss';

type Props = {
  onClick: () => void;
};

const roleJudge = (roleName: string) => {
  if (roleName === 'witch') return '女巫';
  if (roleName === 'seer') return '預言家';
  if (roleName === 'guard') return '守衛';
  if (roleName === 'hunter') return '獵人';
  if (roleName === 'wolf-king') return '狼王';
  if (roleName === 'wolf') return '狼';
  if (roleName === 'villager') return '平民';
};

const roleJudgeNum = (roleName: string) => {
  if (roleName === 'witch') return 1;
  if (roleName === 'seer') return 2;
  if (roleName === 'guard') return 3;
  if (roleName === 'hunter') return 4;
  if (roleName === 'wolf-king') return 5;
  if (roleName === 'wolf') return 8;
  if (roleName === 'villager') return 12;
};

const Role = ({ onClick }: Props) => {
  const role = ['witch', 'seer', 'guard', 'hunter', 'wolf-king', 'wolf', 'villager'];
  const [roleStep, setRoleStep] = useState<number>(0);

  const state = useSelector((rootState: RootState) => rootState);
  const dispatch = useDispatch();

  const [presentRole, setPresentRole] = useState<string>('');

  const onRoleClick = (num: string, playerName: string, playerRole: string) => () => {
    const input: PlayerType = { id: num, name: playerName, role: playerRole };
    if (state.record.player![Number(num) - 1].role === undefined) {
      dispatch(setRole(input));
      setPresentRole(role[roleStep]);
    } else alert('玩家角色重複');
  };

  const onSubmitClick = (nameOfRole: string) => () => {
    let count = 0;
    for (let i = 0; i < 12; i++) if (state.record.player![i].role !== undefined) count++;
    if (count === roleJudgeNum(nameOfRole))
      if (roleStep === 6) onClick();
      else {
        setRoleStep(roleStep + 1);
        setPresentRole(role[roleStep]);
      }
    else if (count < roleJudgeNum(nameOfRole)!) alert('尚未選擇角色之對應玩家');
    else alert('同一角色選擇過多玩家');
  };

  const onReturnClick = () => () => {
    if (presentRole === undefined) setPresentRole('witch');
    const PresentRoleNumList = [];
    for (let i = 0; i < 12; i++)
      if (state.record.player![i].role === presentRole) PresentRoleNumList.push(i);
    for (let j = 0; j < PresentRoleNumList.length; j++) {
      const input: PlayerType = {
        id: String(PresentRoleNumList![j] + 1),
        name: state.record.player![Number(PresentRoleNumList![j])].name,
        role: undefined,
      };
      dispatch(setRole(input));
    }
    if (roleStep !== 0) {
      setPresentRole(role[roleStep - 1]);
      setRoleStep(roleStep - 1);
    } else setPresentRole('witch');
  };

  return (
    <div>
      <div className={style.title}>身份發放</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleJudge(role[roleStep])}</div>
        </div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: PlayerType, i: number) => {
            return (
              <div
                key={i}
                className={classNames(style.num, {
                  [style.clicked]: state.record.player![i].role || undefined,
                })}
                role="button"
                onClick={onRoleClick(v.id, v.name, role[roleStep])}
              >
                {v.id}
                <br />
                {v.name.slice(0, 7)}
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.btnFrame}>
        <Button type="text" className={style.btn} onClick={onReturnClick}>
          Back
        </Button>
        <Button type="text" className={style.btn} onClick={onSubmitClick(role[roleStep])}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Role;
