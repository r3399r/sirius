import { Button } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Player as PlayerType } from 'src/model/Record';
import { RootState } from 'src/redux/store';
import style from './Night.module.scss';

type Props = {
  onClick: () => void;
};

const roleJudge = (roleName: string) => {
  if (roleName === 'witch') return ['女巫', '女巫', '無行動'];
  if (roleName === 'seer') return ['預言家', '預言家查驗', '無查驗'];
  if (roleName === 'guard') return ['守衛', '守衛守護', '空守'];
  if (roleName === 'hunter') return ['獵人', '獵人開槍', '壓槍'];
  if (roleName === 'wolf-king') return ['狼王', '狼王開槍', '壓槍'];
  if (roleName === 'wolf') return ['狼'];
  if (roleName === 'villager') return ['平民'];
  throw new Error('unexpected error');
};

const Night = ({ onClick }: Props) => {
  const night = ['witch', 'seer', 'guard', 'hunter', 'wolf-king'];
  const [nightStep, setNightStep] = useState<number>(0);

  const state = useSelector((rootState: RootState) => rootState);

  const onSubmitClick = () => () => {
    if (nightStep === 4) return onClick;
    else return setNightStep(nightStep + 1);
  };

  return (
    <div>
      <div className={style.title}>首夜</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleJudge(night[nightStep])[1]}</div>
          {night[nightStep] === 'witch' && (
            <div className={style.functionFrame}>
              <div className={style.function}>解救</div>
              <div className={style.function}>撒毒</div>
            </div>
          )}
        </div>
        <div className={style.numFrame}>
          {state.record.player?.map((v: PlayerType, i: number) => {
            return (
              <div className={style.num} key={i}>
                {v.id} {roleJudge(String(v.role))[0]}
                <br />
                {v.name.slice(0, 7)}
              </div>
            );
          })}
          <div className={style.null}>{roleJudge(night[nightStep])[2]}</div>
        </div>
      </div>

      <div>
        <Button type="text" className={style.btn} onClick={onSubmitClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Night;
