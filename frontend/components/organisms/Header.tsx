import { Button } from "../atoms/Button";
import BurgerMenu from "../molecules/BurgerMenu";
import { useDispatch } from "react-redux";
import { tellDialogOpen } from "../../features/tellDialogSlice";
import { SlideMenu } from "./SlideMenu";
import Link from "next/link";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-16 flex" style={{ backgroundColor: "#b4cf9e" }}>
      <div className="flex justify-start flex-1">
        <Button text="電話する" clickEvent={() => dispatch(tellDialogOpen())} />
        <Button text="予約する" clickEvent={() => alert("予約する")} />
      </div>
      <div className="flex justify-around items-center text-2xl font-bold flex-1">
        <Link href="/">柄澤整骨院</Link>
      </div>
      <div className="flex justify-around flex-1">
        <BurgerMenu />
      </div>
      <SlideMenu />
    </div>
  );
};
