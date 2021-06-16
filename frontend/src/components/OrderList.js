import { Link } from "react-router-dom";

const OrderList = ({ order }) => {
  return (
    <div className="order-list">
      {order.map((order) => (
        <div className="order-preview" key={order._id}>
          <Link to={`/order/${order._id}`}>
            <h2>{order.title}</h2>
            <p>{order.description}</p>
            <p>{order.qty}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
