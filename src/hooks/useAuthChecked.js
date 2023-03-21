import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/features/user/userSlice";

const useAuthChecked = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localstorage = localStorage?.getItem("Auth-Dashboard");
    if (localstorage) {
      const auth = JSON.parse(localstorage);
      if (auth?.token && auth?.user) {
        dispatch(userLoggedIn({ toekn: auth.token, user: auth.user }));
      }
    }
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
};

export default useAuthChecked;
