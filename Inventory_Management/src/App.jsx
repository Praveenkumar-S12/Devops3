import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    if (!name || !qty || !price) return;
    const newItem = {
      id: Date.now(),
      name,
      qty: parseInt(qty),
      price: parseFloat(price),
    };
    setItems([...items, newItem]);
    setName("");
    setQty("");
    setPrice("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Simple Inventory Management</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={{ padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "5px" }}
        />
        <button onClick={addItem} style={{ padding: "5px 10px" }}>
          Add Item
        </button>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Qty</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>Total</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
                No items added yet
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td style={cellStyle}>{item.name}</td>
                <td style={cellStyle}>{item.qty}</td>
                <td style={cellStyle}>₹{item.price.toFixed(2)}</td>
                <td style={cellStyle}>₹{(item.qty * item.price).toFixed(2)}</td>
                <td style={cellStyle}>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
};
