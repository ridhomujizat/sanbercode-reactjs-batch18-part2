import React, { useState, createContext, useEffect } from "react";

import axios from "axios";

export const BuahContext = createContext();

export const BuahProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  let dataBuah = {
    id: null,
    name: "",
    price: "",
    weight: "",
  };
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

  return (
    <BuahContext.Provider
      value={{
        allDataBuah: [dataHargaBuah, setDataHargaBuah],
        inputData: [inputBuah, setInputBuah],
        newData: dataBuah,
      }}
    >
      {props.children}
    </BuahContext.Provider>
  );
};
