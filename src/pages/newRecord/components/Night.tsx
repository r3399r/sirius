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
  const savePlayer = (tmpDieList: number[]) => {
    const playerInput: Player[] = _.cloneDeep(state.record.player);
    for (const element of tmpDieList) {
      const idx = playerInput.findIndex((x: Player) => x.id === String(element));
      playerInput[idx].alive = false;
    }
    dispatch(setPlayer(playerInput));

    return playerInput;
  };

  const saveNight = (playerInput: Player[]) => {
    let hunterShootInput: number = -1;
    if (playerInput.find((x: Player) => x.role === 'hunter')?.alive === true) hunterShootInput = 13;
    else hunterShootInput = hunterShoot;
    let wolfKingShootInput: number = -1;
    if (playerInput.find((x: Player) => x.role === 'wolf-king')?.alive === true)
      wolfKingShootInput = 13;
    else wolfKingShootInput = wolfKingShoot;
    const nightInput = {
      id: String(state.record.night.length + 1),
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

  const onSubmitClick = () => {
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
      }
      setDieList(tmpDieList);
      if (Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id) === tmpkilled)
        return setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'hunter'));
      else if (
        Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id) === tmpkilled
      )
        return setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'wolf-king'));
      else {
        const playerInput: Player[] = savePlayer(tmpDieList);
        saveNight(playerInput);
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

        return setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'wolf-king'));
      } else {
        const playerInput = savePlayer(dieList.concat(hunterShoot));
        saveNight(playerInput);
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

        return setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'hunter'));
      } else {
        const playerInput = savePlayer(dieList.concat(wolfKingShoot));
        saveNight(playerInput);
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
      if (nightData[nightStep - 1].roleCode === 'wolf') setKill(-1);
      if (nightData[nightStep - 1].roleCode === 'witch') {
        setRescue(false);
        setPoision(-1);
      }
      if (nightData[nightStep - 1].roleCode === 'seer') setCheck(-1);
      if (nightData[nightStep].roleCode === 'hunter')
        if (
          dieList.includes(
            Number(_(state.record.player).find((x: Player) => x.role === 'wolf-king')?.id),
          )
        ) {
          setWolfKingShoot(-1);
          setDieList(dieList.slice(0, -1));
          setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'wolf-king'));
        } else {
          setGuard(-1);
          setDieList([]);
          setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'guard'));
        }
      if (nightData[nightStep].roleCode === 'wolf-king')
        if (
          dieList.includes(
            Number(_(state.record.player).find((x: Player) => x.role === 'hunter')?.id),
          )
        ) {
          setHunterShoot(-1);
          setDieList(dieList.slice(0, -1));
          setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'hunter'));
        } else {
          setGuard(-1);
          setDieList([]);
          setNightStep(nightData.findIndex((x: NightDataType) => x.roleCode === 'guard'));
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

  const isRoleDisabled = (id: string) => {
    if (dieList.includes(Number(id))) return true;
    if (Number(id) > 0 && _(state.record.player).find((x: Player) => x.id === id)?.alive !== true)
      return true;
    if (nightData[nightStep].roleCode === 'wolf') return wolfDisabledJudge(id, kill);
    else if (nightData[nightStep].roleCode === 'witch')
      return witchDisabledJudge(id, rescue, poison, kill, state.record.player);
    else if (nightData[nightStep].roleCode === 'seer')
      return seerDisabledJudge(id, check, state.record.player);
    else if (nightData[nightStep].roleCode === 'guard') return guardDisabledJudge(id, guard);
    else if (nightData[nightStep].roleCode === 'hunter')
      return hunterDisabledJudge(id, hunterShoot, state.record.player);
    else if (nightData[nightStep].roleCode === 'wolf-king')
      return wolfKingDisabledJudge(id, wolfKingShoot, state.record.player);
    else throw new Error('OverStep');
  };

  const isRescueDisabled =
    kill === Number(_(state.record.player).find((x: Player) => x.role === 'witch')?.id) ||
    poison >= 0 ||
    kill <= 0;

  const isPoisonDisabled = rescue === true || poison === 0;

  const isSubmitDisabled = !(whichIsClicked >= 0 && whichIsClicked <= 12);

  if (nightData.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div className={style.title}>第 {state.record.night.length + 1} 夜</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{nightData[nightStep].nightAction}</div>
          {nightData[nightStep].roleCode === 'witch' && (
            <div className={style.functionFrame}>
              <Button
                className={classNames(style.function, {
                  [style.functionClick]: rescue === true,
                })}
                type="text"
                onClick={onRescueClick}
                disabled={isRescueDisabled}
              >
                解救
              </Button>
              <Button
                className={classNames(style.function, {
                  [style.functionClick]: poison > 0,
                })}
                type="text"
                onClick={onPoisionClick}
                disabled={isPoisonDisabled}
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
                disabled={isRoleDisabled(v.id)}
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
            disabled={isRoleDisabled('0')}
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
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Night;
