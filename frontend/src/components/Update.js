import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [order, SetOrder] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/order/${id}`)
      .then((res) => {
        SetOrder(res.data);
        setTitle(res.data.title);
        setDesc(res.data.description);
        setQty(res.data.qty);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { title, description, qty };

    axios.post(`http://localhost:5000/order/${id}`, order).then(() => {
      console.log("Order updated");
      history.push("/");
    });
    // fetch(`http://localhost:8000/orders/${id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(order),
    // }).then(() => {
    //   console.log("new order added");
    //   setIsPending(false);
    //   history.push("/");
    // });
  };
  return (
    <div className="create">
      <h2>Update order</h2>
      {order && (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>Descripton:</label>
          <textarea
            required
            value={description}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <label>Qty:</label>
          <input
            type="number"
            required
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
            }}
          />
          <button>Update Order</button>
        </form>
      )}
    </div>
  );
};

export default Update;
