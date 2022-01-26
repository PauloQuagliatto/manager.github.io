import { useEffect } from "react";
import router from "next/router";

const Home = () => {
  useEffect(() => {
    router.push("/login");
  }, []);

  return <></>;
};

export default Home;
