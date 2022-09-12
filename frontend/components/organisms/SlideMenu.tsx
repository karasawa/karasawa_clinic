import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../features/burgerMenuSlice";
import styled, { keyframes } from "styled-components";
import { RootState } from "../../store";

export const SlideMenu = () => {
  const { isOpen } = useSelector((state: RootState) => state.burgerMenu);
  const dispatch = useDispatch();
  return (
    <Slider
      style={
        isOpen
          ? {
              width: "300px",
            }
          : { width: 0, height: 0 }
      }
    >
      <MenuWrapper style={isOpen ? {} : { display: "none" }}>
        <Link href="/">
          <MenuList onClick={() => dispatch(closeMenu())}>ホーム</MenuList>
        </Link>
        <Link href="/introduction">
          <MenuList onClick={() => dispatch(closeMenu())}>当院の特徴</MenuList>
        </Link>
        <Link href="/symptom">
          <MenuList onClick={() => dispatch(closeMenu())}>対応症状</MenuList>
        </Link>
        <Link href="/director_introduction">
          <MenuList onClick={() => dispatch(closeMenu())}>院長紹介</MenuList>
        </Link>
        <Link href="/faq">
          <MenuList onClick={() => dispatch(closeMenu())}>FAQ</MenuList>
        </Link>
        <Link href="/access">
          <MenuList onClick={() => dispatch(closeMenu())}>アクセス</MenuList>
        </Link>
      </MenuWrapper>
    </Slider>
  );
};

const Slider = styled.div`
  margin-top: 64px;
  width: 300px;
  height: 600px;
  background-color: #000;
  position: absolute;
  z-index: 100;
  right: 0;
  opacity: 0.8;
  transition: all 0.5s ease-out;
`;

const fadeUp = keyframes`
0% {
  opacity: 0;
}
80% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 30px;
  animation: ${fadeUp} 0.5s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const MenuList = styled.h3`
  font-size: 28px;
  color: #b4cf9e;
  cursor: pointer;
  &:hover {
    color: #547443;
  }
`;
