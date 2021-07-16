import { Button } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { setRole } from 'src/redux/recordSlice';
import { RootState } from 'src/redux/store';
import style from './Role.module.scss';

type Props = {
  onClick: () => void;
};

const roleJudge = (roleName: any) => {
  if (roleName === 'witch') return '女巫';
  if (roleName === 'seer') return '預言家';
  if (roleName === 'guard') return '守衛';
  if (roleName === 'hunter') return '獵人';
  if (roleName === 'wolf-king') return '狼王';
  if (roleName === 'wolf') return '狼';
  if (roleName === 'villager') return '平民';
  if (roleName === undefined) return '';
  throw new Error('unexpected error');
};

const roleJudgeNum = (roleName: string) => {
  if (roleName === 'witch') return 1;
  if (roleName === 'seer') return 2;
  if (roleName === 'guard') return 3;
  if (roleName === 'hunter') return 4;
  if (roleName === 'wolf-king') return 5;
  if (roleName === 'wolf') return 8;
  if (roleName === 'villager') return 12;
  throw new Error('unexpected error');
};

const Role = ({ onClick }: Props) => {
  const role = ['witch', 'seer', 'guard', 'hunter', 'wolf-king', 'wolf', 'villager'];
  const [numOrder, setNumOrder] = useState<Number[]>([]);
  const [roleStep, setRoleStep] = useState<number>(0);
  const [presentRole, setPresentRole] = useState<string>('');

  const state = useSelector((rootState: RootState) => rootState);
  const dispatch = useDispatch();

  const onRoleClick = (num: string, playerName: string, playerRole: string) => () => {
    const input: Player = { id: num, name: playerName, role: playerRole };
    if (state.record.player![Number(num) - 1].role === undefined) {
      dispatch(setRole(input));
      setPresentRole(role[roleStep]);
      setNumOrder(numOrder.concat(Number(num)));
    } else alert('玩家角色重複');
  };

  const onSubmitClick = (nameOfRole: string) => () => {
    if (roleStep === 6) onClick();
    else setRoleStep(roleStep + 1);
  };

  const onReturnClick = () => {
    if (presentRole === undefined) setPresentRole('witch');
    let deleteNumber = 0;
    if (presentRole === 'witch') deleteNumber = 1;
    else deleteNumber = numOrder.length - roleJudgeNum(role[role.indexOf(presentRole) - 1]);

    for (let i = 0; i < deleteNumber; i++) {
      const input: Player = {
        id: String(numOrder[numOrder.length - i - 1]),
        name: state.record.player![Number(numOrder[numOrder.length - i - 1]) - 1].name,
        role: undefined,
      };
      dispatch(setRole(input));
    }
    setNumOrder(numOrder.slice(0, numOrder.length - deleteNumber));

    if (roleStep !== 0) {
      setPresentRole(role[roleStep - 1]);
      setRoleStep(roleStep - 1);
    } else setPresentRole('witch');
  };

  const numDisabledJudge = (i: number) => {
    if (state.record.player![i].role === role[roleStep]) return false;
    else if (roleJudgeNum(role[roleStep]) === numOrder.length) return true;
    else return false;
  };

  const submitDisabledJudge = () => {
    if (roleJudgeNum(role[roleStep]) === numOrder.length) return false;
    else return true;
  };

  return (
    <div>
      <div className={style.title}>身份發放</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleJudge(role[roleStep])}</div>
        </div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: Player, i: number) => {
            return (
              <Button
                key={i}
                className={classNames(style.num, {
                  [style.clicked]: state.record.player![i].role,
                })}
                type="text"
                onClick={onRoleClick(v.id, v.name, role[roleStep])}
                disabled={numDisabledJudge(i)}
              >
                {v.id} {roleJudge(v.role)}
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
          onClick={onSubmitClick(role[roleStep])}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Role;
