import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, SetOrder] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/order/${id}`)
      .then((res) => {
        SetOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/order/${id}`)
      .then(() => {
        console.log("Order deleted");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch(`http://localhost:5000/order/${id}`, {
    //   method: "DELETE",
    // }).then(() => {
    //   history.push("/");
    // });
  };

  return (
    <div className="order-details">
      <h2>Order Detail</h2>
      {order && (
        <article>
          <h2>Title: {order.title}</h2>
          <p>Description: {order.description}</p>
          <p>Quantity: {order.qty}</p>
          <br />
          <button onClick={handleDelete}>Delete</button>{" "}
          <Link to={`/update/${order._id}`}>
            <button>Update</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default OrderDetail;
