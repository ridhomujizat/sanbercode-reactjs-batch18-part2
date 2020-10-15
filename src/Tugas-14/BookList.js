import React, { useContext } from "react";
import { BuahContext } from "./BuahContext";
import axios from "axios";

const BookList = () => {
  const { allDataBuah, inputData } = useContext(BuahContext);
  const [dataHargaBuah, setDataHargaBuah] = allDataBuah;
  const [inputBuah, setInputBuah] = inputData;

  const handleDelete = (event) => {
    let idDataBuah = parseInt(event.target.value);
    let newdaftarBuah = dataHargaBuah.filter((el) => el.id !== idDataBuah);
    setDataHargaBuah([...newdaftarBuah]);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then((res) => {
        console.log(res);
      });
  };

  const handleEdit = (event) => {
    const idBuah = parseInt(event.target.value);
    const databuah1 = dataHargaBuah.find((el) => el.id === idBuah);
    console.log(databuah1);
    setInputBuah(databuah1);
  };

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
            {dataHargaBuah !== null &&
              dataHargaBuah.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.weight / 1000} Kg</td>
                    <td>
                      <button value={data.id} onClick={handleEdit}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button value={data.id} onClick={handleDelete}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
