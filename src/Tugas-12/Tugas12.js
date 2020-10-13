import React, { Component } from "react";

class Tugas12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
      index: -1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let index = this.state.index;
    let dataHargaBuah = this.state.dataHargaBuah;
    let inputBuah = {
      nama: this.state.inputNama,
      harga: this.state.inputHarga,
      berat: this.state.inputBerat,
    };
    if (index === -1) {
      this.setState({
        dataHargaBuah: [...this.state.dataHargaBuah, inputBuah],
      });
    } else {
      this.state.dataHargaBuah[index] = inputBuah;
      this.setState({
        dataHargaBuah,
        inputNama: "",
        inputHarga: "",
        inputBerat: "",
        index: -1,
      });
    }
  };

  handleChange = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    if (id === "nama") {
      this.setState({ inputNama: value });
    } else if (id === "harga") {
      this.setState({ inputHarga: value });
    } else {
      this.setState({ inputBerat: value });
    }
  };

  handleDelete = (event) => {
    let index = event.target.value;
    console.log(index);
    this.state.dataHargaBuah.splice(index, 1);
    this.setState({
      dataHargaBuah: this.state.dataHargaBuah,
    });
  };

  handleEdit = (event) => {
    let index = event.target.value;
    this.setState({
      inputNama: this.state.dataHargaBuah[index].nama,
      inputHarga: this.state.dataHargaBuah[index].harga,
      inputBerat: this.state.dataHargaBuah[index].berat,
      index,
    });
  };

  render() {
    return (
      <>
        <div style={{ marginTop: "5em" }}>
          <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th colSpan="2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataHargaBuah.map((data, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{data.nama}</td>
                    <td>{data.harga}</td>
                    <td>{data.berat / 1000} Kg</td>
                    <td>
                      <button value={index} onClick={this.handleEdit}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button value={index} onClick={this.handleDelete}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Nama</label>
          <input
            required
            type="text"
            id="nama"
            onChange={this.handleChange}
            value={this.state.inputNama}
          />
          <label>Harga</label>
          <input
            required
            type="number"
            id="harga"
            onChange={this.handleChange}
            value={this.state.inputHarga}
          />
          <label>Berat</label>
          <input
            required
            type="number"
            id="berat"
            onChange={this.handleChange}
            value={this.state.inputBerat}
          />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Tugas12;
