import { useState } from 'react';
import Daytime from './components/Daytime';
import Night from './components/Night';
import Player from './components/Player';
import Role from './components/Role';
import Type from './components/Type';
import style from './NewRecord.module.scss';

const steps = ['type', 'player', 'role', 'night', 'daytime'];

const NewRecord = () => {
  const [step, setStep] = useState<string>(steps[0]); // 同時宣告step(值) setStep(function)

  const onTypeSubmit = () => {
    setStep(steps[1]);
  };

  const onPlayerSubmit = () => {
    setStep(steps[2]);
  };

  const onRoleSubmit = () => {
    setStep(steps[3]);
  };

  const onNightSubmit = () => {
    setStep(steps[4]);
  };

  const onDaytimeSubmit = () => {
    setStep(steps[5]);
  };

  return (
    <div className={style.self}>
      {step === steps[0] && <Type onClick={onTypeSubmit} />}
      {step === steps[1] && <Player onClick={onPlayerSubmit} />}
      {step === steps[2] && <Role onClick={onRoleSubmit} />}
      {step === steps[3] && <Night onClick={onNightSubmit} />}
      {step === steps[4] && <Daytime onClick={onDaytimeSubmit} />}
    </div>
  );
};

export default NewRecord;
