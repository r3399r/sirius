import { Button } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { dispatch, RootState } from 'src/redux/store';
import { getRoleData, RoleDataType } from 'src/services/RecordService';
import style from './GiveUp.module.scss';

type Props = {
  onClick: () => void;
};

const GiveUp = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  const [whichIsClicked, setWhichIsClicked] = useState<number>(-1);
  const [roleData, setRoleData] = useState<RoleDataType[]>([]);

  useEffect(() => {
    setRoleData(getRoleData(state.record.type!));
  }, [state]);

  const onNumClick = (i: number) => () => {
    setWhichIsClicked(i);
  };

  const onReturnClick = () => {
    setWhichIsClicked(-1);
  };

  const onSubmitClick = () => {
    onClick();
  };

  const numDisabledJudge = (id: string) => {
    if (
      _(state.record.player).find((x: Player) => x.id === id)?.role === 'wolf' ||
      _(state.record.player).find((x: Player) => x.id === id)?.role === 'wolf-king'
    )
      if (whichIsClicked === -1) return false;
      else if (whichIsClicked === Number(id)) return false;
      else return true;
    else return true;
  };

  const submitDisabledJudge = () => {
    if (whichIsClicked === -1) return true;
    else return false;
  };

  if (roleData.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div className={style.title}>第 {state.record.night.length} 天白天自爆玩家</div>
      <div className={style.numFrame}>
        {state.record.player?.map((v: Player) => (
          <Button
            key={v.id}
            className={classNames(style.num, {
              [style.clicked]: whichIsClicked === Number(v.id),
            })}
            type="text"
            onClick={onNumClick(Number(v.id))}
            disabled={numDisabledJudge(v.id)}
          >
            {v.id} {roleData.find((x: RoleDataType) => x.roleCode === v.role)?.roleName}
            <br />
            {v.name.slice(0, 7)}
          </Button>
        ))}
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

export default GiveUp;
