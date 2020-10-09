import React from 'react'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class DataBuah extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.nama}</td>
                <td>{this.props.harga}</td>
                <td>{this.props.berat}</td>
            </tr>
        )
    }
}

export default function Tugas10() {
    return (
        <div style={{"margin-top": "5em"}}>
            <h1 style={{textAlign: "center"}}>Tabel Harga Buah</h1>
            <table>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
                {dataHargaBuah.map(data=>{
                    return (
                            <DataBuah nama={data.nama} harga={data.harga} berat={data.berat}></DataBuah>
                    )
                })}
            </table>
        </div>
    )
}
