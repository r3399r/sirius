import { Button } from 'antd';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Player as PlayerType } from 'src/model/Record';
import { setRole } from 'src/redux/recordSlice';
import { RootState } from 'src/redux/store';
import style from './Role.module.scss';

const role = ['預言家', '女巫', '守衛', '獵人', '狼王', '狼', '平民'];

type Props = {
  onClick: () => void;
  roleName: string;
};

type PlayerProps = {
  id: string;
  name: string;
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

const Role = ({ onClick, roleName }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  const dispatch = useDispatch();

  const onRoleClick = (num: string, playerName: string, playerRole: string) => () => {
    const input: PlayerType = { id: num, name: playerName, role: playerRole };
    // console.log(state.record.player![Number(num) - 1].role);
    if (state.record.player![Number(num) - 1].role === undefined) dispatch(setRole(input));
    else alert('玩家角色重複');
  };

  const onSubmitClick = (nameOfRole: string) => () => {
    let count = 0;
    for (let i = 0; i < 12; i++) if (state.record.player![i].role !== undefined) count++;
    if (count === roleJudgeNum(nameOfRole)) onClick();
    else if (count < roleJudgeNum(nameOfRole)!) alert('尚未選擇角色之對應玩家');
    else alert('同一角色選擇過多玩家');
  };

  // console.log(state.record.player);

  return (
    <div>
      <div className={style.title}>身份發放</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleJudge(roleName)}</div>
        </div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: PlayerProps, i: number) => {
            return (
              <div
                key={i}
                className={classNames(style.num, {
                  [style.clicked]: state.record.player![i].role || undefined,
                })}
                role="button"
                onClick={onRoleClick(v.id, v.name, roleName)}
              >
                {v.id}
                <br />
                {v.name.slice(0, 7)}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Button type="text" className={style.btn} onClick={onSubmitClick(roleName)}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Role;
