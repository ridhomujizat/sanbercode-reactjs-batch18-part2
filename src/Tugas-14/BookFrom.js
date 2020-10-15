import React, { useContext } from "react";
import axios from "axios";

import { BuahContext } from "./BuahContext";

const BookFrom = () => {
  const { allDataBuah, inputData, newData } = useContext(BuahContext);
  const [dataHargaBuah, setDataHargaBuah] = allDataBuah;
  const [inputBuah, setInputBuah] = inputData;
  const dataBuah = newData;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputBuah.id === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, inputBuah)
        .then((res) => {
          setDataHargaBuah([...dataHargaBuah, inputBuah]);
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
              x.weight = inputBuah.weight;
            }
            return x;
          });
          setDataHargaBuah([...databuah]);
          setInputBuah(dataBuah);
        });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    setInputBuah({ ...inputBuah, ...{ [id]: value } });
  };

  return (
    <>
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

export default BookFrom;
