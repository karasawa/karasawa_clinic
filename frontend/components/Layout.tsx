import { FC, memo, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./organisms/Header";
import { TellDialog } from "./organisms/TellDialog";

type Props = {
  children: ReactNode;
  title: string;
};
// eslint-disable-next-line react/display-name
const Layout: FC<Props> = memo(({ children, title = "default title" }) => {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <TellDialog />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
});

export default Layout;
