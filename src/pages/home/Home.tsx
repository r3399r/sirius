import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory(); // 宣告物件

  const onClick = (path: string) => () => {
    history.push(path); // 超連結
  };

  return (
    <div className={style.main}>
      <Button type="primary" onClick={onClick('new-record')}>
        建立新記錄
      </Button>
      <Button disabled={true}>復盤記錄</Button>
    </div>
  );
};

export default Home;
