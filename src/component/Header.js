import style from '../style/Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className='left'>
        <ul className={style.hdMenu}>
          <li>
            <a href=''>
              <img src={`${process.env.PUBLIC_URL}/img/icons/top/mac-client-60.png`} alt='' />
            </a>
          </li>
          <li className={style.menu}>메뉴표시</li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Projet</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
      <div className='right'>
        <ul className={style.hdMenu}>
          <li>
            <a href=''>
              <img src={`${process.env.PUBLIC_URL}/img/icons/top/search-50.png`} alt='' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src={`${process.env.PUBLIC_URL}/img/icons/top/wi-fi-50.png`} alt='' />
            </a>
          </li>
          <li>
            <p>시간표시</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
