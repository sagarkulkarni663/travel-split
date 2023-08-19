import { useState } from "react";

const Form = ({ onDataChange }) => {
  const [description, setDescription] = useState()
  const [quantity, setQuantity] = useState(1)
  const sub = (e) => {

    e.preventDefault();
    if (!description) return
    const newItem = { description, quantity, package: false, id: Date.now() }
    onDataChange(newItem)
    setDescription("")
    setQuantity(1)
  };
  return (
    <form className="add-form" onSubmit={sub}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
        {Array.from({ length: 20 }, (x, i) => i + 1).
          map(item => (<option value={item} key={item}>{item}</option>))}
      </select>
      <input type="text" placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )

};
export default Form