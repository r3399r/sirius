import Component from './Component';
import style from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <div className={style.block1}>hi</div>
      <div className={style.block2}>this is component</div>
      <div className={style.block2}>this is component</div>
      <Component />
    </div>
  );
};

export default Home;
