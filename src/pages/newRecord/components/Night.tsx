import { Button } from 'antd';
import style from './Night.module.scss';

const daytime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

type Props = {
  onClick: () => void;
};

const Night = ({ onClick }: Props) => {
  return (
    <div>
      <div className={style.title}>首夜</div>
      <div className={style.main_frame}>
        <div>
          <div className={style.header}>女巫</div>
          <div className={style.function_frame}>
            <div className={style.function}>解救</div>
            <div className={style.function}>撒毒</div>
          </div>
        </div>
        <div className={style.num_frame}>
          {daytime.map((v: string, i: number) => {
            return (
              <div className={style.num} key={i}>
                {v}
              </div>
            );
          })}
          <div className={style.null}>無行動</div>
        </div>
      </div>

      <div className={style.btn}>
        <Button type="text" className={style.botton} onClick={onClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Night;
