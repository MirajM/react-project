import { useEffect, useState } from "react";
import axios from "axios";
import OrderList from "./OrderList";

const Home = () => {
  const [order, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get("http://10.133.201.123:5000/order")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="home">{order && <OrderList order={order} />}</div>;
};

export default Home;
