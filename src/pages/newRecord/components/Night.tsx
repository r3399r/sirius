import { Button } from 'antd';
import style from './Night.module.scss';

const daytime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

type Props = {
  onClick: () => void;
  roleName: string;
};

const Night = ({ onClick, roleName }: Props) => {
  return (
    <div>
      <div className={style.title}>首夜</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleName === 'witch' ? '女巫' : '預言家'}</div>
          {roleName === 'witch' && (
            <div className={style.functionFrame}>
              <div className={style.function}>解救</div>
              <div className={style.function}>撒毒</div>
            </div>
          )}
        </div>
        <div className={style.numFrame}>
          {daytime.map((v: string, i: number) => {
            return (
              <div className={style.num} key={i}>
                {v}
              </div>
            );
          })}
          <div className={style.null}>{roleName === 'witch' ? '無行動' : '無查驗'}</div>
        </div>
      </div>

      <div>
        <Button type="text" className={style.btn} onClick={onClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Night;
