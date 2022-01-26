import { useContext, useEffect, useState } from "react";
import router from "next/router";
import { toast } from "react-toastify";
import { GiTopHat } from "react-icons/gi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { GlobalContext } from "../../src/context/GlobalContext";

import Container from "./styles";
import SpinnerModal from "../../src/components/SpinnerModal";

const Login = () => {
  const global = useContext(GlobalContext);

  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isSpinnerOpen, setIsSpinnerOpen] = useState<boolean>(false);

  useEffect(() => {
    global.setStore(null);
  }, []);

  useEffect(() => {
    setIsDesktop(window !== undefined && window.innerWidth > 1450);
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (password && email) {
      setIsSpinnerOpen(true);
      
      const store = {
        email,
        cnpj: "65461605650",
        name: "Entry",
        waiters: [],
        categories: [],
        openOrders: [],
        closedOrders: [],
        configurations: {},
      };

      global.setStore(store);

      router.push("/dashboard");
    }
  };

  return (
    <>
      <Container>
        {isDesktop && (
          <aside>
            <GiTopHat color="#FFFFFF" fontSize="20em" />
            <p>Faça seu cardápio e disponibilize como mágica</p>
          </aside>
        )}
        <main>
          <div className="form-container">
            <form onSubmit={handleLogin}>
              <input
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password-input">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="icon-container"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <AiOutlineEyeInvisible fontSize="24px" />
                  ) : (
                    <AiOutlineEye fontSize="24px" />
                  )}
                </div>
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Esqueceu a senha? Digite seu e-mail e <span>clique aqui</span>
            </p>
          </div>
        </main>
      </Container>
      <SpinnerModal isOpen={isSpinnerOpen} />
    </>
  );
};

export default Login;
