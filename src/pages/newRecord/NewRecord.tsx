import { useState } from 'react';
import Type from './components/Type';
import style from './NewRecord.module.scss';

const steps = ['type', 'player', 'role', 'night', 'daytime'];

const NewRecord = () => {
  const [step, setStep] = useState<string>(steps[0]);

  const onTypeSubmit = () => {
    setStep(steps[1]);
  };

  return (
    <div className={style.self}>
      {step === steps[0] && <Type onClick={onTypeSubmit} />}
      {step === steps[1] && <div>this is 2nd step</div>}
    </div>
  );
};

export default NewRecord;
