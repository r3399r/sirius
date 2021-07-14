import { Button } from 'antd';
import style from './Night.module.scss';

const daytime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

type Props = {
  onClick: () => void;
  roleNameNight: string;
};

const roleJudge = (roleName: string) => {
  if (roleName === 'witch') return ['女巫', '無行動'];
  if (roleName === 'seer') return ['預言家查驗', '無查驗'];
  if (roleName === 'guard') return ['守衛守護', '空守'];
  if (roleName === 'hunter') return ['獵人開槍', '壓槍'];
  if (roleName === 'wolf-king') return ['狼王開槍', '壓槍'];
  throw new Error('unexpected error');
};

const Night = ({ onClick, roleNameNight }: Props) => {
  return (
    <div>
      <div className={style.title}>首夜</div>
      <div className={style.mainFrame}>
        <div>
          <div className={style.header}>{roleJudge(roleNameNight)[0]}</div>
          {roleNameNight === 'witch' && (
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
          <div className={style.null}>{roleJudge(roleNameNight)[1]}</div>
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
