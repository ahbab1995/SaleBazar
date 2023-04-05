import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase";

const Orderlist = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orderlist`;
    fetch(url, {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user.email]);

  return (
    <div>
      <h1>Order List {orderList.length}</h1>
      <ol>
        {
          orderList.map(order=><li>{order.name}</li>)
        }
      </ol>
    </div>
  );
};

export default Orderlist;
