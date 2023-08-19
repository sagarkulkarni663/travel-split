import React, { useState } from "react";


const PackingList = ({ data, handleDelete, itemcheck, clear }) => {
  const [sortby, setSortby] = useState("input")

  let sortedItems;

  if (sortby === "input") sortedItems = data;

  if (sortby === "description")
    sortedItems = data
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedItems = data
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul >
        {sortedItems.map((item) => <Item item={item} handleDelete={handleDelete}
          itemcheck={itemcheck} key={item.id} clear={clear} />)}

      </ul>
      <div className="actions" >
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clear}>clear</button>
      </div>
    </div>

  )
}
export default PackingList
export const Item = ({ item, handleDelete, itemcheck }) => {

  return (

    <li>
      <input type="checkbox" value={item.package} onChange={() => itemcheck(item.id)} />
      <span style={{ textDecoration: item.package ? "line-through" : "" }}>{item.quantity} {item.description}</span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  )
}
