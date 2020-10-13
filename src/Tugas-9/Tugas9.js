import React from "react";

export default function Tugas9() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
      <div style={{ paddingLeft: "25px" }}>
        <div style={{ display: "block", marginBottom: "1em" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Nama Pelanggan
          </div>
          <input style={{ display: "inline-block" }} name="name" />
        </div>
        <div style={{ display: "block", marginBottom: "1em" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Daftar Item
          </div>
          <div style={{ display: "inline-block" }}>
            <input type="checkbox" name="Semangka" value="Semangka" />
            <label>Semangka</label>
            <br />
            <input type="checkbox" name="Jeruk" value="Jeruk" />
            <label>Jeruk</label>
            <br />
            <input type="checkbox" name="Nanas" value="Nanas" />
            <label>Nanas</label>
            <br />
            <input type="checkbox" name="Salak" value="Salak" />
            <label>Salak</label>
            <br />
            <input type="checkbox" name="Angur" value="Angur" />
            <label>Angur</label>
            <br />
            <br />
          </div>
        </div>
        <button style={{ padding: "5px", borderRadius: "10px" }}>Kirim</button>
      </div>
    </div>
  );
}
