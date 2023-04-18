import style from '../style/About.module.css';

const About = () => {
  return (
    <article className={style.about}>
      <div className={style.left}>
        <p>자기소개</p>
        <p>
          저는 현재 프론트엔드 개발자가 되기 위해 준비 중인 이동혁입니다! <br />
          저는 시각적으로 매력적이면서도 직관적이며 <br /> 사용자가 편리하게 이용할 수 있는 웹사이트를 만드는 것을 좋아합니다. <br />
          프론트엔드 개발자 양성 과정을 수료 했습니다. <br />
          이 과정에서 웹 개발에 대한 전반적인 지식을 습득하고 <br /> 그동안 진행해왔던 개인 프로젝트들을 통해 실습과 경험을 쌓았습니다. <br />
          성장과 발전을 위해 계속해서 공부하고 있으며 <br /> 다양한 기술을 활용하여 사용자들이 편리하게 이용할 수 있는 웹사이트를 만드는 것을 목표로 하고
          있습니다.
          <br />
        </p>
      </div>
      <div className={style.right}>
        <div className={style.career}>
          <p>경력</p>
          <p>
            그린 컴퓨터 아카데미
            <br />
            프론트엔드 개발자 양성과정 수료 2022.11.14 ~ 2023.04.24
          </p>
        </div>
        <div className={style.skill}>
          <p>사용기술</p>
          <ul>
            <li>
              <div>
                <img src={`${process.env.PUBLIC_URL}/img/icons/html5.png`} alt='' />
                <img src={`${process.env.PUBLIC_URL}/img/icons/css3.png`} alt='' />
              </div>
              <p>시멘틱 마크업을 준수합니다.</p>
              <p>CSS 애니메이션을 사용 할 수 있습니다.</p>
              <p>미디어쿼리를 이용해 반응형 웹 개발 경험이 있습니다.</p>
              <p>Flex, Grid를 활용하여 다양한 레이아웃 개발이 가능합니다.</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/img/icons/javascript.png`} alt='' />
              <p>기본적인 자바스크립트 문법에 대한 이해가 있습니다.</p>
              <p>함수를 만들고 파라미터를 전달 할 수 있습니다.</p>
              <p>이벤트 리스너를 활용하여 동적인 상호작용을 구현 할 수 있습니다.</p>
              <p>배열과 자료형에 대한 이해와 활용이 가능합니다.</p>
              <p>제이쿼리 라이브러리를 활용하여 개발이 가능합니다.</p>
              <p>ES6 문법을 꾸준히 공부하고 있습니다.</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/img/icons/react.png`} alt='' />
              <p>React hooks 사용 경험이 있습니다.</p>
              <p>함수형 컴포넌트를 만들고 props를 활용 할 수 있습니다.</p>
              <p>Router를 이용한 SPA 개발 경험이 있습니다.</p>
              <p>fetch, axios를 이용해 API 데이터를 받아와, 컴포넌트에 데이터 바인딩한 경험이 있습니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default About;
