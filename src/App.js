import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
      <div style={{ "padding-left": "25px" }}>
        <div style={{ display: "block", "margin-bottom": "1em" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              "font-weight": "bold",
              "font-size": "16px",
            }}
          >
            Nama Pelanggan
          </div>
          <input style={{ display: "inline-block" }} />
        </div>
        <div style={{ display: "block", "margin-bottom": "1em" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              "font-weight": "bold",
              "font-size": "16px",
            }}
          >
            Daftar Item
          </div>
          <div style={{ display: "inline-block" }}>
            <input type="checkbox" />
            <label for="Semangka">Semangka</label>
            <br />
            <input type="checkbox" />
            <label for="Jeruk">Jeruk</label>
            <br />
            <input type="checkbox" />
            <label for="Nanas">Nanas</label>
            <br />
            <input type="checkbox" />
            <label for="Salak">Salak</label>
            <br />
            <input type="checkbox" />
            <label for="Angur">Angur</label>
            <br />
            <br />
          </div>
        </div>
        <button style={{ padding: "5px", "border-radius": "10px" }}>
          Kirim
        </button>
      </div>
    </div>
  );
}

export default App;
