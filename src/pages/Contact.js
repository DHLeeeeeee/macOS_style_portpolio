import style from '../style/Contact.module.css';

const Contact = () => {
  return (
    <article className={style.contact}>
      <p className={style.title}>Contact with me</p>
      <div className={style.container}>
        <ul>
          <li>
            <p>
              E-mail : <a href='mailto:luvya8055@naver.com'>luvya8055@naver.com</a>
            </p>
          </li>
          <li>
            <p>
              Github :
              <a href='https://github.com/DHLeeeeeee' target={'_blank'}>
                DH
              </a>
            </p>
          </li>
          <li>
            <p>
              Velog :
              <a href='https://velog.io/@luvya8055' target={'_blank'}>
                DHLee
              </a>
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Contact;
