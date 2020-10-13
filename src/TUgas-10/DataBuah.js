import React from "react";

class DataBuah extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.nama}</td>
        <td>{this.props.data.harga}</td>
        <td>{this.props.data.berat / 1000} Kg</td>
        <td>{this.props.data.berat / 1000}</td>
      </tr>
    );
  }
}

export default DataBuah;
