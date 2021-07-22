import { Button } from 'antd';
import classNames from 'classnames';
// import { stat } from 'fs';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { setPlayer } from 'src/redux/recordSlice';
import { dispatch, RootState } from 'src/redux/store';
import { getNightData, NightDataType } from 'src/services/RecordService';
import style from './Night.module.scss';

type Props = {
  onClick: () => void;
};

const Night = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  const [nightStep, setNightStep] = useState<number>(0);
  const [nightData, setNightData] = useState<NightDataType[]>([]);

  const [kill, setKill] = useState<number>(-1);
  const [rescue, setRescue] = useState<boolean>(false);
  const [poison, setPoision] = useState<number>(-1);
  const [check, setCheck] = useState<number>(-1);
  const [guard, setGuard] = useState<number>(-1);
  const [hunterShoot, setHunterShoot] = useState<number>(-1);
  const [wolfKingShoot, setWolfKingShoot] = useState<number>(-1);
  const [whichIsClicked, setWhichIsClicked] = useState<number>(-1);
  const [dieList, setDieList] = useState<number[]>([]);

  useEffect(() => {
    setNightData(getNightData(state.record.type!));
  }, [state]);

  const onRoleClick = (id: string) => () => {
    setWhichIsClicked(Number(id));
    if (nightStep === 0) setKill(Number(id));
    if (nightStep === 1)
      if (poison === 13) setPoision(Number(id));
      else setPoision(0); // 無行動
    if (nightStep === 2) setCheck(Number(id));
    if (nightStep === 3) setGuard(Number(id));
    if (nightStep === 4) setHunterShoot(Number(id));
    if (nightStep === 5) setWolfKingShoot(Number(id));
  };

  const onRescueClick = () => {
    setRescue(true);
    setWhichIsClicked(13);
  };

  const onPoisionClick = () => {
    setPoision(13);
    setWhichIsClicked(13);
  };

  const onSubmitClick = () => {
    setWhichIsClicked(-1);
    let tmpkilled = -1;
    if (nightStep === 3) {
      let tmpDieList: number[] = [];
      if (poison > 0) tmpDieList = tmpDieList.concat(poison);
      if (kill > 0 && kill !== poison) {
        if (rescue === true && kill === guard) {
          tmpkilled = kill;
          tmpDieList = tmpDieList.concat(kill);
        }
        if (rescue === false && kill !== guard) {
          tmpkilled = kill;
          tmpDieList = tmpDieList.concat(kill);
        }
        // else tmpkilled = 0 // 狼未刀穿
      }
      setDieList(tmpDieList);
      if (Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id) === tmpkilled)
        return setNightStep(4);
      else if (
        Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id) === tmpkilled
      )
        return setNightStep(5);
      else onClick();
    } else if (nightStep === 4)
      if (
        Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id) !==
          tmpkilled &&
        Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id) ===
          hunterShoot
      ) {
        setDieList(dieList.concat(hunterShoot));

        return setNightStep(5);
      } else onClick();
    else if (nightStep === 5)
      if (
        Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id) !== tmpkilled &&
        Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id) ===
          wolfKingShoot
      ) {
        setDieList(dieList.concat(wolfKingShoot));

        return setNightStep(4);
      } else onClick();
    else return setNightStep(nightStep + 1);
  };

  const onReturnClick = () => {
    if (whichIsClicked === -1) {
      if (nightStep !== 0 && nightStep !== 4 && nightStep !== 5) setNightStep(nightStep - 1);
      if (nightStep === 1) setKill(-1);
      if (nightStep === 2) {
        setRescue(false);
        setPoision(-1);
      }
      if (nightStep === 3) setCheck(-1);
      if (nightStep === 4)
        if (
          dieList.includes(
            Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id),
          )
        ) {
          setWolfKingShoot(-1);
          setDieList(dieList.slice(0, -1));
          setNightStep(5);
        } else {
          setGuard(-1);
          setDieList([]);
          setNightStep(3);
        }
      if (nightStep === 5)
        if (
          dieList.includes(
            Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id),
          )
        ) {
          setHunterShoot(-1);
          setDieList(dieList.slice(0, -1));
          setNightStep(4);
        } else {
          setGuard(-1);
          setDieList([]);
          setNightStep(3);
        }
    } else if (nightStep === 0) setKill(-1);
    if (nightStep === 1) {
      setRescue(false);
      setPoision(-1);
    }
    if (nightStep === 2) setCheck(-1);
    if (nightStep === 3) setGuard(-1);
    if (nightStep === 4) setHunterShoot(-1);
    if (nightStep === 5) setWolfKingShoot(-1);
    setWhichIsClicked(-1);
  };

  const disabledJudge = (ID: string) => {
    const wolfDisabledJudge = (id: string) => {
      if (kill >= 0)
        if (Number(id) === kill) return false;
        else return true;
      else return false;
    };
    const witchDisabledJudge = (id: string) => {
      if (_(state.record.player).find((x: Player) => x.id === id)?.role === 'witch') return true;
      else if (Number(id) === 0)
        if (rescue === false && poison <= 0) return false;
        else return true;
      else if (rescue === true)
        if (Number(id) === kill) return false;
        else return true;
      else if (poison === 13) return false;
      // 確認開毒
      else if (poison > 0)
        if (Number(id) === poison) return false;
        // 僅有被毒者為可按下
        else return true;
      else if (poison === 0) return true;
      // 無行動
      else return true;
    };
    const seerDisabledJudge = (id: string) => {
      if (_(state.record.player).find((x: Player) => x.id === id)?.role === 'seer') return true;
      else if (check >= 0)
        if (Number(id) === check) return false;
        else return true;
      else return false;
    };
    const guardDisabledJudge = (id: string) => {
      if (guard >= 0)
        if (Number(id) === guard) return false;
        else return true;
      else return false;
    };
    const hunterDisabledJudge = (id: string) => {
      if (_(state.record.player).find((x: Player) => x.id === id)?.role === 'hunter') return true;
      else if (hunterShoot >= 0)
        if (Number(id) === hunterShoot) return false;
        else return true;
      else return false;
    };
    const wolfKingDisabledJudge = (id: string) => {
      if (_(state.record.player).find((x: Player) => x.id === id)?.role === 'wolf-king')
        return true;
      else if (wolfKingShoot >= 0)
        if (Number(id) === wolfKingShoot) return false;
        else return true;
      else return false;
    };
    if (dieList.includes(Number(ID))) return true;
    // if (_(state.record.player).find((x: Player) => x.id === ID)?.alive !== true) return true;
    if (nightStep === 0) return wolfDisabledJudge(ID);
    else if (nightStep === 1) return witchDisabledJudge(ID);
    else if (nightStep === 2) return seerDisabledJudge(ID);
    else if (nightStep === 3) return guardDisabledJudge(ID);
    else if (nightStep === 4) return hunterDisabledJudge(ID);
    else if (nightStep === 5) return wolfKingDisabledJudge(ID);
    else throw new Error('overStep');
  };

  const rescueDisabledJudge = () => {
    // 刀女巫 確定撒毒&無行動 空刀
    if (
      kill === Number(_(state.record.player).find((x: Player) => x.role === 'witch')?.id) ||
      poison >= 0 ||
      kill <= 0
    )
      return true;
    else return false;
  };

  const poisonDisaledJudge = () => {
    if (rescue === true || poison === 0) return true;
    else return false;
  };

  const submitDisabledJudge = () => {
    if (whichIsClicked >= 0 && whichIsClicked <= 12) return false;
    else return true;
  };

  if (nightData.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div className={style.title}>首夜</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{nightData[nightStep].nightAction}</div>
          {nightStep === 1 && (
            <div className={style.functionFrame}>
              <Button
                className={classNames(style.function, {
                  [style.functionClick]: rescue === true,
                })}
                type="text"
                onClick={onRescueClick}
                disabled={rescueDisabledJudge()}
              >
                解救
              </Button>
              <Button
                className={classNames(style.function, {
                  [style.functionClick]: poison > 0,
                })}
                type="text"
                onClick={onPoisionClick}
                disabled={poisonDisaledJudge()}
              >
                撒毒
              </Button>
            </div>
          )}
        </div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: Player) => {
            return (
              <Button
                className={classNames(style.num, {
                  [style.numClick]: whichIsClicked === Number(v.id),
                })}
                key={v.id}
                type="text"
                onClick={onRoleClick(v.id)}
                disabled={disabledJudge(v.id)}
              >
                {v.id} {nightData.find((x: NightDataType) => x.roleCode === v.role)?.roleName}
                <br />
                {v.name.slice(0, 7)}
              </Button>
            );
          })}
          <Button
            className={classNames(style.null, {
              [style.nullClick]: whichIsClicked === 0,
            })}
            type="text"
            onClick={onRoleClick('0')}
            disabled={disabledJudge('0')}
          >
            {nightData[nightStep].nightNull}
          </Button>
        </div>
      </div>

      <div className={style.btnFrame}>
        <Button type="text" className={style.backbtn} onClick={onReturnClick}>
          Back
        </Button>
        <Button
          type="text"
          className={style.btn}
          onClick={onSubmitClick}
          disabled={submitDisabledJudge()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Night;
