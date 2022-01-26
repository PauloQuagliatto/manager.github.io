import router from "next/router";
import { AiOutlineDashboard, AiOutlineGroup } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { MdExitToApp, MdOutlineClose, MdPerson } from "react-icons/md";

import { BackgroundShadow, Container } from "./styles";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOPen: boolean) => void;
}

const SideMenu = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <>
      {isOpen ? (
        <>
          <BackgroundShadow onClick={() => setIsOpen(false)}></BackgroundShadow>
          <Container>
            <div>
              <MdOutlineClose
                color="#FFFFFF"
                fontSize="40px"
                cursor="pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <nav>
              <ul>
                <li onClick={() => router.push("/dashboard")}>
                  <AiOutlineDashboard /> Dashboard
                </li>
                <li onClick={() => router.push("/products")}>
                  <FaHamburger /> Produtos
                </li>
                <li onClick={() => router.push("/login")}>
                  <MdExitToApp /> Sair
                </li>
              </ul>
            </nav>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideMenu;
