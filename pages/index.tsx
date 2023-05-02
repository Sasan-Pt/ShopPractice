import type { NextPage } from "next";
import Main from "../components/Main";
import Modal from "../components/Modal";
import { useAtom } from "jotai";
import { showAtom } from "../components/shareComponent/Store";

const Home: NextPage = () => {
  const [show] = useAtom(showAtom);
  const opaccity = show ? "opacity-70" : null;
  return (
    <div className={`${opaccity}`}>
      <Main />
      <Modal />
    </div>
  );
};

export default Home;
