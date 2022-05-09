import { Button } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player, Sheriff as SheriffType } from 'src/model/Record';
import { setSheriff } from 'src/redux/recordSlice';
import { dispatch, RootState } from 'src/redux/store';
import { getRoleData, RoleDataType } from 'src/services/RecordService';
import style from './Sheriff.module.scss';

type Props = {
  onClick: () => void;
};

const stage = ['上警玩家', '退水玩家', '投票給', '投票給'];

const Sheriff = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  const [stageStep, setStageStep] = useState<number>(0);
  const [roleData, setRoleData] = useState<RoleDataType[]>([]);
  const [whichIsClicked, setWhichIsClicked] = useState<number[]>([]);
  const [nullIsClicked, setNullIsClick] = useState<number[]>([]);
  const [runForList, setRunForList] = useState<number[]>([]);
  const [withdrawList, setWithdrawList] = useState<number[]>([]);
  const [candidate, setCandidate] = useState<number[]>([]);
  const [candidateStep, setCandidateStep] = useState<number>(0);
  const [firstVoteResult, setFirstVoteResult] = useState<number[]>([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]); // 0:X 13:run-for
  const [firstVotes, setFirstVotes] = useState<number[]>([]);
  const [competitor, setCompetitor] = useState<number[]>([]);
  const [competitorStep, setCompetitorStep] = useState<number>(0);
  const [secondVoteResult, setSecondVoteResult] = useState<number[]>([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]); // 0:X 13:run-for
  const [secondVotes, setSecondVotes] = useState<number[]>([]);

  useEffect(() => {
    setRoleData(getRoleData(state.record.type!));
  }, [state]);

  const onNumClick = (id: number) => () => {
    if (!whichIsClicked.includes(id)) setWhichIsClicked(whichIsClicked.concat(id));
  };

  const onNullClick = () => {
    setNullIsClick([0]);
  };

  const isNumDisabled = (id: number) => {
    if (nullIsClicked === [0]) return true;
    if (stageStep === 0) return false;
    if (stageStep === 1)
      if (runForList.includes(id)) return false;
      else return true;
    if (stageStep === 2)
      if (runForList.includes(id)) return true;
      else if (firstVoteResult[id - 1] === -1) return false;
      else return true;

    if (stageStep === 3)
      if (competitor.includes(id)) return true;
      else if (secondVoteResult[id - 1] === -1) return false;
      else return true;
  };

  const isNullDisabled = () => {
    if (whichIsClicked.length === 0) return false;
    else return true;
  };

  const onReturnClick = () => {
    setNullIsClick([]);
    setWhichIsClicked([]);
  };

  const isSubmitDisabled = () => {
    if (stageStep === 0)
      if (whichIsClicked.length >= 1) return false;
      else return true;
    if (stageStep === 1) return false;
    if (stageStep === 2)
      if (candidateStep === candidate.length - 1)
        if (
          12 - firstVotes.reduce((a: number, b: number) => a + b, 0) - whichIsClicked.length ===
          runForList.length
        )
          return false;
        else return true;
      else return false;
    if (stageStep === 3)
      if (competitorStep === competitor.length - 1)
        if (
          12 - secondVotes.reduce((a: number, b: number) => a + b, 0) - whichIsClicked.length ===
          competitor.length - 1
        )
          return false;
        else return true;
      else return false;
  };

  const saveSheriff = (tmpVoteResult: any, num: number) => {
    if (stageStep === 1) {
      const sheriffInput: SheriffType = {
        runFor: runForList,
        withdraw: withdrawList,
        firstVote: {
          1: -1,
          2: -1,
          3: -1,
          4: -1,
          5: -1,
          6: -1,
          7: -1,
          8: -1,
          9: -1,
          10: -1,
          11: -1,
          12: -1,
        },
        secondVote: {
          1: -1,
          2: -1,
          3: -1,
          4: -1,
          5: -1,
          6: -1,
          7: -1,
          8: -1,
          9: -1,
          10: -1,
          11: -1,
          12: -1,
        },
        sheriff: num,
      };
      dispatch(setSheriff(sheriffInput));
    }
    if (stageStep === 2) {
      const sheriffInput: SheriffType = {
        runFor: runForList,
        withdraw: withdrawList,
        firstVote: {
          1: tmpVoteResult[0] === -1 ? 13 : tmpVoteResult[0],
          2: tmpVoteResult[1] === -1 ? 13 : tmpVoteResult[1],
          3: tmpVoteResult[2] === -1 ? 13 : tmpVoteResult[2],
          4: tmpVoteResult[3] === -1 ? 13 : tmpVoteResult[3],
          5: tmpVoteResult[4] === -1 ? 13 : tmpVoteResult[4],
          6: tmpVoteResult[5] === -1 ? 13 : tmpVoteResult[5],
          7: tmpVoteResult[6] === -1 ? 13 : tmpVoteResult[6],
          8: tmpVoteResult[7] === -1 ? 13 : tmpVoteResult[7],
          9: tmpVoteResult[8] === -1 ? 13 : tmpVoteResult[8],
          10: tmpVoteResult[9] === -1 ? 13 : tmpVoteResult[9],
          11: tmpVoteResult[10] === -1 ? 13 : tmpVoteResult[10],
          12: tmpVoteResult[11] === -1 ? 13 : tmpVoteResult[11],
        },
        secondVote: {
          1: -1,
          2: -1,
          3: -1,
          4: -1,
          5: -1,
          6: -1,
          7: -1,
          8: -1,
          9: -1,
          10: -1,
          11: -1,
          12: -1,
        },
        sheriff: num,
      };
      dispatch(setSheriff(sheriffInput));
    }
    if (stageStep === 3) {
      const sheriffInput: SheriffType = {
        runFor: runForList,
        withdraw: withdrawList,
        firstVote: {
          1: firstVoteResult[0] === -1 ? 13 : firstVoteResult[0],
          2: firstVoteResult[1] === -1 ? 13 : firstVoteResult[1],
          3: firstVoteResult[2] === -1 ? 13 : firstVoteResult[2],
          4: firstVoteResult[3] === -1 ? 13 : firstVoteResult[3],
          5: firstVoteResult[4] === -1 ? 13 : firstVoteResult[4],
          6: firstVoteResult[5] === -1 ? 13 : firstVoteResult[5],
          7: firstVoteResult[6] === -1 ? 13 : firstVoteResult[6],
          8: firstVoteResult[7] === -1 ? 13 : firstVoteResult[7],
          9: firstVoteResult[8] === -1 ? 13 : firstVoteResult[8],
          10: firstVoteResult[9] === -1 ? 13 : firstVoteResult[9],
          11: firstVoteResult[10] === -1 ? 13 : firstVoteResult[10],
          12: firstVoteResult[11] === -1 ? 13 : firstVoteResult[11],
        },
        secondVote: {
          1: tmpVoteResult[0] === -1 ? 13 : tmpVoteResult[0],
          2: tmpVoteResult[1] === -1 ? 13 : tmpVoteResult[1],
          3: tmpVoteResult[2] === -1 ? 13 : tmpVoteResult[2],
          4: tmpVoteResult[3] === -1 ? 13 : tmpVoteResult[3],
          5: tmpVoteResult[4] === -1 ? 13 : tmpVoteResult[4],
          6: tmpVoteResult[5] === -1 ? 13 : tmpVoteResult[5],
          7: tmpVoteResult[6] === -1 ? 13 : tmpVoteResult[6],
          8: tmpVoteResult[7] === -1 ? 13 : tmpVoteResult[7],
          9: tmpVoteResult[8] === -1 ? 13 : tmpVoteResult[8],
          10: tmpVoteResult[9] === -1 ? 13 : tmpVoteResult[9],
          11: tmpVoteResult[10] === -1 ? 13 : tmpVoteResult[10],
          12: tmpVoteResult[11] === -1 ? 13 : tmpVoteResult[11],
        },
        sheriff: num,
      };
      dispatch(setSheriff(sheriffInput));
    }
  };

  const onSubmitClick = () => {
    if (stageStep === 0) {
      setRunForList(whichIsClicked);
      setWhichIsClicked([]);
      setNullIsClick([]);
      setStageStep(1);
    }
    if (stageStep === 1) {
      setWithdrawList(whichIsClicked);
      if (runForList.length - whichIsClicked.length === 0) {
        saveSheriff(firstVoteResult, 0);
        onClick();
      } else if (runForList.length - whichIsClicked.length === 1) {
        for (const element of runForList)
          if (!whichIsClicked.includes(element)) {
            saveSheriff(firstVoteResult, element);
            break;
          }
        onClick();
      } else {
        let tmpCandidate: number[] = [];
        for (const element of runForList)
          if (!whichIsClicked.includes(element)) tmpCandidate = tmpCandidate.concat(element);
        tmpCandidate = tmpCandidate.sort();
        tmpCandidate = tmpCandidate.concat(0); // 投給棄票者
        setCandidate(tmpCandidate);
        setWhichIsClicked([]);
        setNullIsClick([]);
        setStageStep(2);
      }
    }
    if (stageStep === 2) {
      setFirstVotes(firstVotes.concat(whichIsClicked.length));
      const tmpVoteResult = _.cloneDeep(firstVoteResult);
      for (const element of whichIsClicked) tmpVoteResult[element - 1] = candidate[candidateStep];
      setFirstVoteResult(tmpVoteResult);
      setWhichIsClicked([]);
      setNullIsClick([]);
      if (candidateStep === candidate.length - 1) {
        const maxVotes = Math.max.apply(null, firstVotes.slice(0, firstVotes.length - 1));
        if (firstVotes.filter((x: number) => x === maxVotes).length === 1) {
          saveSheriff(tmpVoteResult, candidate[firstVotes.indexOf(maxVotes)]);
          onClick();
        } else {
          let tmpCompetitor: number[] = [];
          for (let i = 0; i < 12; i++)
            if (firstVotes[i] === maxVotes) tmpCompetitor = tmpCompetitor.concat(candidate[i]);
          tmpCompetitor = tmpCompetitor.sort();
          tmpCompetitor = tmpCompetitor.concat(0);
          setCompetitor(tmpCompetitor);
          alert('平票進行PK');
          setStageStep(3);
        }
      } else setCandidateStep(candidateStep + 1);
    }
    if (stageStep === 3) {
      setSecondVotes(secondVotes.concat(whichIsClicked.length));
      const tmpVoteResult = _.cloneDeep(secondVoteResult);
      for (const element of whichIsClicked) tmpVoteResult[element - 1] = competitor[competitorStep];
      setSecondVoteResult(tmpVoteResult);
      setWhichIsClicked([]);
      setNullIsClick([]);
      if (competitorStep === competitor.length - 1) {
        const maxVotes = Math.max.apply(null, secondVotes.slice(0, secondVotes.length - 1));
        if (secondVotes.filter((x: number) => x === maxVotes).length === 1) {
          saveSheriff(tmpVoteResult, competitor[secondVotes.indexOf(maxVotes)]);
          onClick();
        } else {
          alert('再次平票，本局遊戲無警長');
          saveSheriff(tmpVoteResult, 0);
          onClick();
        }
      } else setCompetitorStep(competitorStep + 1);
    }
  };

  const displayheader = () => {
    if (stageStep === 2 && candidateStep === candidate.length - 1) return '棄票者';
    else if (stageStep === 3 && competitorStep === competitor.length - 1) return '棄票者';
    else if (stageStep === 2)
      return String(stage[stageStep]) + String(candidate[candidateStep]) + '號者';
    else if (stageStep === 3)
      return String(stage[stageStep]) + String(competitor[competitorStep]) + '號者';
    else return String(stage[stageStep]);
  };

  if (roleData.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div className={style.title}>競選警長</div>
      <div className={style.mainFrame}>
        <div className={style.header}>{displayheader()}</div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: Player) => {
            return (
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
            );
          })}
          {stageStep !== 0 && (
            <Button
              className={classNames(style.null, {
                [style.nullClick]: nullIsClicked.length > 0,
              })}
              type="text"
              onClick={onNullClick}
              disabled={isNullDisabled()}
            >
              無
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

export default Sheriff;
