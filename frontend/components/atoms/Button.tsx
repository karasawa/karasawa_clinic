import { FC } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  clickEvent: () => void;
};

export const Button: FC<Props> = ({ text, clickEvent }) => {
  return (
    <button
      className=" text-white p-3 rounded-lg m-2"
      style={{ backgroundColor: "#281914" }}
      onClick={clickEvent}
    >
      {text}
    </button>
  );
};

// const BaseButton = styled.button`
//   padding: 10px 14px;
//   border: none;
//   border-radius: 10px;
//   background-color: #281914;
//   color: #fff;
//   cursor: pointer;
//   font-family: "Shippori Mincho", serif;
//   &:hover {
//     background-color: #74905d;
//   }
// `;
