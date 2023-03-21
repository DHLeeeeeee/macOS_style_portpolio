import { Outlet } from 'react-router-dom';
import style from '../style/Frame.module.css';

const Frame = () => {
  return (
    <div className={style.frame}>
      <div className={style.topBar}>
        <div className={style.btnWrap}>
          <div>
            <span className={`${style.topBar_btn} ${style.topBar_btn_red}`}></span>
            <span className={`${style.topBar_btn} ${style.topBar_btn_yellow}`}></span>
            <span className={`${style.topBar_btn} ${style.topBar_btn_green}`}></span>
          </div>
          <div className={style.arrows}>
            <span class='material-symbols-outlined'>arrow_back_ios</span>
            <span class='material-symbols-outlined'>arrow_forward_ios</span>
          </div>
        </div>
        <div className={style.search}>
          <span class='material-symbols-outlined'>search</span>
          <input type='text' placeholder='검색' />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Frame;
