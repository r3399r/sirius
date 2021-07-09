import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setType } from 'src/redux/recordSlice';
import style from './Type.module.scss';

const types = ['狼王守衛', '守墓人石像鬼', '狼美人騎士', '機械狼', '狼王魔術師'];

type Props = {
  onClick: () => void;
};

const Type = ({ onClick }: Props) => {
  const dispatch = useDispatch();

  const demoClick = () => {
    dispatch(setType(Date.now().toString()));
  };

  return (
    <div>
      <div className={style.title}>選擇版型</div>
      <button onClick={demoClick}>Demo Redux</button>
      <div className={style.panel}>
        {types.map((v: string, i: number) => {
          return (
            <div key={i} className={style.type}>
              {v}
            </div>
          );
        })}
      </div>
      <div className={style.btn}>
        <Button type="primary" onClick={onClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Type;
