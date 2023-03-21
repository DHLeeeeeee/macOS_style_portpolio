import style from '../style/Header.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, setTitle }) => {
  /**
   * 헤더에 있는 타이틀 바꿔주는 함수
   * @param {string} t 타이틀 넣으면 됨
   */
  function titleHandler(t) {
    setTitle(t);
  }
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className={style.header}>
      <div className={style.left}>
        <ul className={style.hdMenu}>
          <li className={`${style.logo} ${style.icon}`}>
            <Link to='/' onClick={() => titleHandler('Hello')}>
              <img src={`${process.env.PUBLIC_URL}/img/icons/top/mac-client-60.png`} alt='' />
            </Link>
          </li>
          <li>
            <p className={style.title}>{title}</p>
          </li>
          <li className={style.menuItm}>
            <Link to='/project' onClick={() => titleHandler('project')}>
              Project
            </Link>
          </li>
          <li className={style.menuItm}>
            <Link to='/about' onClick={() => titleHandler('about')}>
              About
            </Link>
          </li>
          <li className={style.menuItm}>
            <Link to='/contact' onClick={() => titleHandler('contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.right}>
        <ul className={style.hdMenu}>
          <li className={style.icon}>
            <Link>
              <img src={`${process.env.PUBLIC_URL}/img/icons/top/search-50.png`} alt='' />
            </Link>
          </li>
          <li className={style.icon}>
            <Link>
              <img src={`${process.env.PUBLIC_URL}/img/icons/top/wi-fi-50.png`} alt='' />
            </Link>
          </li>
          <li>
            <p className={style.time}>{time.toLocaleTimeString()}</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
