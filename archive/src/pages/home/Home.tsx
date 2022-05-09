import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory(); // 宣告物件

  const onClick = (path: string) => () => {
    history.push(path); // 超連結
  };

  return (
    <div className={style.btn}>
      <Button type="text" className={style.buttonLeft} onClick={onClick('new-record')}>
        建立新記錄
      </Button>
      <Button className={style.buttonRight} disabled={true}>
        復盤記錄
      </Button>
    </div>
  );
};

export default Home;
