import React from "react";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class DataBuah extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.nama}</td>
        <td>{this.props.data.harga}</td>
        <td>{this.props.data.berat}</td>
      </tr>
    );
  }
}

export default function Tugas10() {
  return (
    <div style={{ marginTop: "5em" }}>
      <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
        </thead>
        <tbody>
          {dataHargaBuah.map((data, index) => {
            return <DataBuah key={index} data={data}></DataBuah>;
          })}
        </tbody>
      </table>
    </div>
  );
}
