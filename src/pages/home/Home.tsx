import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory();

  const onClick = (path: string) => () => {
    history.push(path);
  };

  return (
    <div className={style.self}>
      <Button onClick={onClick('new-record')}>建立新記錄</Button>
      <Button disabled={true}>復盤記錄</Button>
    </div>
  );
};

export default Home;
