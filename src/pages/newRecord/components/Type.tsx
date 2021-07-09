import { Button } from 'antd';
import style from './Type.module.scss';

const types = [
  '狼王守衛',
  '守墓人石像鬼',
  '狼美人騎士',
  '機械狼',
  '狼王魔術師',
  '預女獵白',
  '噩夢之影',
];

type Props = {
  onClick: () => void;
};

const Type = ({ onClick }: Props) => {
  return (
    <div>
      <div className={style.title}>選擇版型</div>
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
        <Button type="text" onClick={onClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Type;
