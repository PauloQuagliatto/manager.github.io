import { useEffect } from "react";
import { useRouter } from "next/router";

const Unauthorized = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  return <></>;
};

export default Unauthorized;
