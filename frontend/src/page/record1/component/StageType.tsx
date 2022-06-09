import { useDispatch } from 'react-redux';
import { Stage } from 'src/constant/Stage';
import { Type } from 'src/constant/Type';
import { setType } from 'src/redux/recordSlice';
import style from './StageType.module.scss';

type Props = { goStage: (s: Stage) => void };

const StageType = ({ goStage }: Props) => {
  const dispatch = useDispatch();

  const onTypeClick = (v: string) => {
    dispatch(setType(v));
    goStage(Stage.Player);
  };

  return (
    <div>
      <div className={style.title}>選擇版型</div>
      <div className={style.panel}>
        {Object.values(Type).map((v, i) => (
          <div key={i} className={style.type} onClick={() => onTypeClick(v)}>
            {v}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageType;
