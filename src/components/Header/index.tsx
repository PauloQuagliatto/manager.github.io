import { useState } from "react";
import { useRouter } from "next/router";
import { IoIosMenu } from "react-icons/io";

import Container from "./styles";
import SideMenu from "../SideMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container>
        <div>
          <IoIosMenu
            onClick={() => setIsOpen(true)}
            color="#FFFFFF"
            fontSize="4rem"
            cursor="pointer"
          />
        </div>
        <button onClick={() => router.push("/login")}>Sair</button>
      </Container>
    </>
  );
};

export default Header;
