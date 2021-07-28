import { Button } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { setNight, setPlayer } from 'src/redux/recordSlice';
import { dispatch, RootState } from 'src/redux/store';
import {
  getNightData,
  guardDisabledJudge,
  hunterDisabledJudge,
  NightDataType,
  seerDisabledJudge,
  witchDisabledJudge,
  wolfDisabledJudge,
  wolfKingDisabledJudge,
} from 'src/services/RecordService';
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
    const inputData = (tmpDieList: number[]) => {
      let playerInput: Player[] = [];
      for (let i = 0; i < 12; i++) {
        const id = String(i + 1);
        const name = state.record.player![i].name;
        const role = state.record.player![i].role;
        const alive = tmpDieList.includes(i + 1) ? false : true;
        playerInput = playerInput.concat({ id, name, role, alive });
      }
      dispatch(setPlayer(playerInput));

      let hunterShootInput: any = '';
      if (playerInput.find((x: Player) => x.role === 'hunter')?.alive === true)
        hunterShootInput = 'inactive';
      else hunterShootInput = hunterShoot;

      let wolfKingShootInput: any = '';
      if (playerInput.find((x: Player) => x.role === 'wolf-king')?.alive === true)
        wolfKingShootInput = 'inactive';
      else wolfKingShootInput = wolfKingShoot;

      const nightInput = {
        id: state.record.night === undefined ? '1' : String(state.record.night.length + 1),
        kill,
        rescue,
        poison,
        check,
        guard,
        hunterShoot: hunterShootInput,
        wolfKingShoot: wolfKingShootInput,
      };
      dispatch(setNight(nightInput));
    };

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
      else {
        inputData(tmpDieList);
        onClick();
      }
    } else if (nightStep === 4)
      if (
        Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id) !==
          tmpkilled &&
        Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id) ===
          hunterShoot
      ) {
        setDieList(dieList.concat(hunterShoot));

        return setNightStep(5);
      } else {
        inputData(dieList.concat(hunterShoot));
        setDieList(dieList.concat(hunterShoot));
        onClick();
      }
    else if (nightStep === 5)
      if (
        Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id) !== tmpkilled &&
        Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id) ===
          wolfKingShoot
      ) {
        setDieList(dieList.concat(wolfKingShoot));

        return setNightStep(4);
      } else {
        inputData(dieList.concat(wolfKingShoot));
        setDieList(dieList.concat(wolfKingShoot));
        onClick();
      }
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
    if (dieList.includes(Number(ID))) return true;
    // if (_(state.record.player).find((x: Player) => x.id === ID)?.alive !== true) return true;
    if (nightStep === 0) return wolfDisabledJudge(ID, kill);
    else if (nightStep === 1)
      return witchDisabledJudge(ID, rescue, poison, kill, state.record.player!);
    else if (nightStep === 2) return seerDisabledJudge(ID, check, state.record.player!);
    else if (nightStep === 3) return guardDisabledJudge(ID, guard);
    else if (nightStep === 4) return hunterDisabledJudge(ID, hunterShoot, state.record.player!);
    else if (nightStep === 5) return wolfKingDisabledJudge(ID, wolfKingShoot, state.record.player!);
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
      <div className={style.title}>
        第 {state.record.night === undefined ? 1 : state.record.night.length + 1} 夜
      </div>
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
