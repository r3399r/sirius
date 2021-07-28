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
    if (nightData[nightStep].roleCode === 'wolf') setKill(Number(id));
    if (nightData[nightStep].roleCode === 'witch')
      if (poison === 13) setPoision(Number(id));
      else setPoision(0); // 無行動
    if (nightData[nightStep].roleCode === 'seer') setCheck(Number(id));
    if (nightData[nightStep].roleCode === 'guard') setGuard(Number(id));
    if (nightData[nightStep].roleCode === 'hunter') setHunterShoot(Number(id));
    if (nightData[nightStep].roleCode === 'wolf-king') setWolfKingShoot(Number(id));
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

      let hunterShootInput: number = -1;
      if (playerInput.find((x: Player) => x.role === 'hunter')?.alive === true)
        hunterShootInput = 13;
      else hunterShootInput = hunterShoot;

      let wolfKingShootInput: number = -1;
      if (playerInput.find((x: Player) => x.role === 'wolf-king')?.alive === true)
        wolfKingShootInput = 13;
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

    if (nightData[nightStep].roleCode === 'guard') {
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
    } else if (nightData[nightStep].roleCode === 'hunter')
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
    else if (nightData[nightStep].roleCode === 'wolf-king')
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
      if (
        nightData[nightStep].roleCode !== 'wolf' &&
        nightData[nightStep].roleCode !== 'hunter' &&
        nightData[nightStep].roleCode !== 'wolf-king'
      )
        setNightStep(nightStep - 1);
      if (nightData[nightStep].roleCode === 'witch') setKill(-1);
      if (nightData[nightStep].roleCode === 'seer') {
        setRescue(false);
        setPoision(-1);
      }
      if (nightData[nightStep].roleCode === 'guard') setCheck(-1);
      if (nightData[nightStep].roleCode === 'hunter')
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
      if (nightData[nightStep].roleCode === 'wolf-king')
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
    } else if (nightData[nightStep].roleCode === 'wolf') setKill(-1);
    if (nightData[nightStep].roleCode === 'witch') {
      setRescue(false);
      setPoision(-1);
    }
    if (nightData[nightStep].roleCode === 'seer') setCheck(-1);
    if (nightData[nightStep].roleCode === 'guard') setGuard(-1);
    if (nightData[nightStep].roleCode === 'hunter') setHunterShoot(-1);
    if (nightData[nightStep].roleCode === 'wolf-king') setWolfKingShoot(-1);
    setWhichIsClicked(-1);
  };

  const disabledJudge = (id: string) => {
    if (dieList.includes(Number(id))) return true;
    // if (_(state.record.player).find((x: Player) => x.id === ID)?.alive !== true) return true;
    if (nightData[nightStep].roleCode === 'wolf') return wolfDisabledJudge(id, kill);
    else if (nightData[nightStep].roleCode === 'witch')
      return witchDisabledJudge(id, rescue, poison, kill, state.record.player!);
    else if (nightData[nightStep].roleCode === 'seer')
      return seerDisabledJudge(id, check, state.record.player!);
    else if (nightData[nightStep].roleCode === 'guard') return guardDisabledJudge(id, guard);
    else if (nightData[nightStep].roleCode === 'hunter')
      return hunterDisabledJudge(id, hunterShoot, state.record.player!);
    else if (nightData[nightStep].roleCode === 'wolf-king')
      return wolfKingDisabledJudge(id, wolfKingShoot, state.record.player!);
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
