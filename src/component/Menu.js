import { Link } from 'react-router-dom';
import style from '../style/Menu.module.css';

const Menu = ({ title, setTitle }) => {
  /**
   * 헤더에 있는 타이틀 바꿔주는 함수
   * @param {string} t 타이틀 넣으면 됨
   */
  function titleHandler(t) {
    setTitle(t);
  }

  return (
    <nav>
      <ul className={style.gnb}>
        <li className={style.gnbItm}>
          <Link to='/project' onClick={() => titleHandler('Project')}>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/finder.png`} alt='' />
          </Link>
        </li>
        <li className={style.gnbItm}>
          <Link to='/about' onClick={() => titleHandler('About')}>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/safari.png`} alt='' />
          </Link>
        </li>
        <li className={style.gnbItm}>
          <Link to='/contact' onClick={() => titleHandler('Contact')}>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/mail.png`} alt='' />
          </Link>
        </li>
        <li className={style.gnbItm}>
          <Link>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/vscode.png`} alt='' />
          </Link>
        </li>
        <li className={style.gnbItm}>
          <Link>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/setting.png`} alt='' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
