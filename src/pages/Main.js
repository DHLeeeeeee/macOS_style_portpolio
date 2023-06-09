import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const cursor = keyframes`
  0% {
  width: 1px;
  }
  50% {
    width: 0;
  }
  100% {
    width: 1px;
  }
`;

const TextWrap = styled.p`
  width: 100vw;
  text-align: center;
  position: relative;
  font-size: 36px;
  color: #fff;

  &::after {
    position: absolute;
    display: inline-block;
    transform: translate(5px, 2px);
    margin-left: 2px;
    width: 1px;
    height: 40px;
    background-color: #fff;
    content: '';
    animation: ${cursor} 1s 0.5s infinite;
  }
`;

const Main = () => {
  // 텍스트 효과
  // 완성된 텍스트 변수선언
  const completiontxt = '좋은 기술로 새로운 가능성을 만들어 가고 싶은 웹 개발자 이동혁입니다.';
  // 텍스트를 집어 넣을 빈 state
  const [text, setText] = useState('');
  // 텍스트 개수 새는 state
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + completiontxt[count]); // 이전 set한 문자 + 다음 문자
      setCount(count + 1); // 개수 만큼 체크
    }, 50);
    if (count === completiontxt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제
  });
  return <TextWrap>{text}</TextWrap>;
};

export default Main;
