import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state.user);

  return auth?.user ? true : false;
};

export default useAuth;
