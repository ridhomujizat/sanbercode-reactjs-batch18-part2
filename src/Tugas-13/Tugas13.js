import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas13 = () => {
  let dataBuah = {
    id: 0,
    name: "",
    price: "",
    weight: "",
  };
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  const [inputBuah, setInputBuah] = useState(dataBuah);

  useEffect(() => {
    if (dataHargaBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHargaBuah(
            res.data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                price: el.price,
                weight: el.weight,
              };
            })
          );
        });
    }
  }, [dataHargaBuah]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputBuah.id === 0) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, inputBuah)
        .then((res) => {
          setDataHargaBuah([...dataHargaBuah, inputBuah]);
          setInputBuah(dataBuah);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/fruits/${inputBuah.id}`,
          inputBuah
        )
        // arr2.find(o => o.id === obj.id) || obj
        .then((res) => {
          var databuah = dataHargaBuah.map((x) => {
            if (x.id === inputBuah.id) {
              x.name = inputBuah.name;
              x.price = inputBuah.price;
              x.weight = inputBuah;
            }
            return x;
          });
          setDataHargaBuah(databuah);
          setInputBuah(dataBuah);
        });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    setInputBuah({ ...inputBuah, ...{ [id]: value } });
  };

  const handleDelete = (event) => {
    const idBuah = parseInt(event.target.value);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {
        const databuah = dataHargaBuah.filter((el) => el.id !== idBuah);
        setDataHargaBuah(databuah);
        console.log(idBuah);
        console.log(databuah);
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
      <form onSubmit={handleSubmit}>
        <label>Nama</label>
        <input
          required
          type="text"
          id="name"
          onChange={handleChange}
          value={inputBuah.name}
        />
        <label>Harga</label>
        <input
          required
          type="number"
          id="price"
          onChange={handleChange}
          value={inputBuah.price}
        />
        <label>Berat</label>
        <input
          required
          type="number"
          id="weight"
          onChange={handleChange}
          value={inputBuah.weight}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Tugas13;
