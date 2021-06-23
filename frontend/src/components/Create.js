import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [qty, setQty] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { title, description, qty };

    axios.post("http://10.133.201.123:5000/order", order).then(() => {
      console.log("Order added");
      history.push("/");
    });

    // fetch("http://10.133.201.123:5000/order", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(order),
    // }).then(() => {
    //   console.log("new order added");
    //   history.push("/");
    // });
  };

  return (
    <div className="create">
      <h2>Add a new order</h2>
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
        <button>Add Order</button>
      </form>
    </div>
  );
};

export default Create;
