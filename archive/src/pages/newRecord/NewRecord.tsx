import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DaytimeDeath as DaytimeDeathType } from 'src/model/Record';
import { RootState } from 'src/redux/store';
import Daytime from './components/Daytime';
import DaytimeDeath from './components/DaytimeDeath';
import GiveUp from './components/GiveUp';
import Night from './components/Night';
import Player from './components/Player';
import Role from './components/Role';
import Sheriff from './components/Sheriff';
import Type from './components/Type';
import style from './NewRecord.module.scss';

const steps = [
  'type',
  'player',
  'role',
  'night',
  'daytimeDeath',
  'giveUp',
  'sheriff',
  'daytimeDetail',
  'exile',
  'blank',
];

const NewRecord = () => {
  const state = useSelector((rootState: RootState) => rootState);
  const [step, setStep] = useState<string>(steps[0]);
  const onSubmit = (i: number) => () => {
    setStep(steps[i]);
  };

  const onDaytimeDeathClick = (deathstatus: string) => {
    if (deathstatus === 'exile') setStep(steps[6]);
    else setStep(steps[5]);
  };

  const onGiveUpClick = () => {
    if (
      state.record.daytimeDeath.find((x: DaytimeDeathType) => x.id === '1')?.status ===
      'giveUpEarlier'
    )
      return 3;
    // 警上自爆
    else return 6; // 警下自爆
  };

  const onSheriffClick = () => {
    if (
      state.record.daytimeDeath.find((x: DaytimeDeathType) => x.id === '1')?.status ===
      'giveUpLater'
    )
      return 3;
    // 警下自爆
    else return 7; // 放逐
  };

  return (
    <div className={style.self}>
      {step === steps[0] && <Type onClick={onSubmit(1)} />}
      {step === steps[1] && <Player onClick={onSubmit(2)} />}
      {step === steps[2] && <Role onClick={onSubmit(3)} />}
      {step === steps[3] && <Night onClick={onSubmit(4)} />}
      {step === steps[4] && <DaytimeDeath onClick={onDaytimeDeathClick} />}
      {step === steps[5] && <GiveUp onClick={onSubmit(onGiveUpClick())} />}
      {step === steps[6] && <Sheriff onClick={onSubmit(onSheriffClick())} />}
      {step === steps[7] && <Daytime onClick={onSubmit(3)} />}
    </div>
  );
};

export default NewRecord;
