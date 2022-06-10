import { Button } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { dispatch, RootState } from 'src/redux/store';
import { getRoleData, RoleDataType } from 'src/services/RecordService';
import style from './Daytime.module.scss';

const daytime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

type Props = {
  onClick: () => void;
};

const Daytime = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  const [stageStep, setStageStep] = useState<number>(0);
  const [roleData, setRoleData] = useState<RoleDataType[]>([]);
  const [voted, setVoted] = useState<number>(-1);
  const [whichIsClicked, setWhichIsClicked] = useState<number[]>([]);
  const [voteResult, setVoteResult] = useState<number[]>([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);

  useEffect(() => {
    setRoleData(getRoleData(state.record.type!));
  }, [state]);

  const onNumClick = (id: number) => () => {
    if (stageStep === 0) setVoted(id);
    else setWhichIsClicked(whichIsClicked.concat(id));
  };

  const onNullClick = () => {
    setVoted(0);
  };

  const onReturnClick = () => {
    if (stageStep === 0) setVoted(-1);
    else setWhichIsClicked([]);
  };

  const onSubmitClick = () => {
    if (stageStep === 0) setStageStep(1);
    else {
      if (voted === 0) onClick();
      const tmpVoteResult = _.cloneDeep(voteResult);
      for (const element of whichIsClicked) tmpVoteResult[element - 1] = voted;
      setVoteResult(tmpVoteResult);
      setVoted(-1);
      setWhichIsClicked([]);
      setStageStep(0);
    }
  };

  const isNumDisabled = (id: number) => {
    if (_(state.record.player).find((x: Player) => x.id === String(id))?.alive === false)
      return true;
    if (stageStep === 0)
      if (voted === 0) return true;
      else if (voteResult.includes(id)) return true;
      else if (voted > 0)
        if (voted === id) return false;
        else return true;
      else return false;
    else if (voteResult[id - 1] === -1) return false;
    else return true;
  };

  const isNullDisabled = () => {
    if (voted > 0) return true;
    else return false;
  };

  const isSubmitDisabled = () => {
    if (stageStep === 0)
      if (voted === -1) return true;
      else return false;
    else if (whichIsClicked === []) return true;
    else return false;
  };

  const displayheader = () => {
    if (stageStep === 0) return '選擇被投票者';
    else if (voted === 0) return '棄票者';
    else return '投給' + String(voted) + '號者';
  };

  if (roleData.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div className={style.title}>第 {state.record.night.length} 天白天放逐狀態</div>
      <div className={style.mainFrame}>
        <div className={style.header}>{displayheader()}</div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: Player) => (
            <Button
              key={v.id}
              className={classNames(style.num, {
                [style.clicked]: whichIsClicked.includes(Number(v.id)),
              })}
              type="text"
              onClick={onNumClick(Number(v.id))}
              disabled={isNumDisabled(Number(v.id))}
            >
              {v.id} {roleData.find((x: RoleDataType) => x.roleCode === v.role)?.roleName}
              <br />
              {v.name.slice(0, 5)}
            </Button>
          ))}
          {stageStep === 0 && (
            <Button
              className={classNames(style.null, {
                [style.nullClick]: voted === 0,
              })}
              type="text"
              onClick={onNullClick}
              disabled={isNullDisabled()}
            >
              無其他被投票者
            </Button>
          )}
        </div>
      </div>

      <div className={style.btnFrame}>
        <Button type="text" className={style.backbtn} onClick={onReturnClick}>
          Back
        </Button>
        <Button
          type="text"
          className={style.btn}
          disabled={isSubmitDisabled()}
          onClick={onSubmitClick}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Daytime;
