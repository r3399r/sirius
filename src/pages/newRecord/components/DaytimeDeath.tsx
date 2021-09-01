import { Button } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DaytimeDeath as DaytimeDeathType } from 'src/model/Record';
import { setDaytimeDeath } from 'src/redux/recordSlice';
import { dispatch, RootState } from 'src/redux/store';
import style from './DaytimeDeath.module.scss';

type Props = {
  onClick: (v: string) => void;
};

const DaytimeDeath = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);

  const [deathstatus, setDeathstatus] = useState<string>('');

  const onGiveUpEarlierClick = () => {
    setDeathstatus('giveUpEarlier');
  };

  const onGiveUpLaterClick = () => {
    setDeathstatus('giveUpLater');
  };

  const onExileClick = () => {
    setDeathstatus('exile');
  };

  const onReturnClick = () => {
    setDeathstatus('');
  };

  const onSubmitClick = () => {
    const daytimeDeathInput: DaytimeDeathType = {
      id: String(state.record.daytimeDeath.length + 1),
      status: deathstatus,
    };
    dispatch(setDaytimeDeath(daytimeDeathInput));
    onClick(deathstatus);
  };

  const isGiveUpEarlierDisabled = () => {
    if (deathstatus === 'giveUpLater' || deathstatus === 'exile') return true;
    else return false;
  };

  const isGiveUpLaterDisabled = () => {
    if (deathstatus === 'giveUpEarlier' || deathstatus === 'exile') return true;
    else return false;
  };

  const isExileDisabled = () => {
    if (deathstatus === 'giveUpEarlier' || deathstatus === 'giveUpLater') return true;
    else return false;
  };

  const isSubmitDisabled = () => {
    if (deathstatus === '') return true;
    else return false;
  };

  return (
    <div>
      <div className={style.title}>第 {state.record.night.length} 天白天死亡狀態</div>
      <div className={style.mainFrame}>
        <Button
          type="text"
          className={style.deathBtn}
          onClick={onGiveUpEarlierClick}
          disabled={isGiveUpEarlierDisabled()}
        >
          警上自爆
        </Button>
        <Button
          type="text"
          className={style.deathBtn}
          onClick={onGiveUpLaterClick}
          disabled={isGiveUpLaterDisabled()}
        >
          警下自爆
        </Button>
        <Button
          type="text"
          className={style.deathBtn}
          onClick={onExileClick}
          disabled={isExileDisabled()}
        >
          投票放逐
        </Button>
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

export default DaytimeDeath;
