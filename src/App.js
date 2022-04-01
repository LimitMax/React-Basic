import React, { Component } from "react";
import "./App.css";
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman";

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: "LimitMax",
      menuMakanan: [
        { id: 1, nama: "Kentang Goreng", harga: 10000, stok: 20 },
        { id: 2, nama: "Seblak Naga Bonar", harga: 15000, stok: 10 },
      ],
      menuMinuman: [
        { id: 1, nama: "Boba Green Tea", harga: 10000, stok: 13 },
        { id: 2, nama: "Boba Coklat", harga: 9000, stok: 7 },
        { id: 3, nama: "Boba Vanilla", harga: 9000, stok: 15 },
      ],
      namaPembeli: "",
      keterangan: "",
      bayar: "",
    };
  }

  // Ganti Nama Resto
  handlerGantiNama = () => {
    this.setState({
      namaResto: "OYIT Family",
    });
  };

  //   Nama Pembeli
  handlerNamaPembeli = (event) => {
    this.setState({ namaPembeli: event.target.value });
  };

  //   Keterangan
  handlerChangeKeterangan = (event) => {
    this.setState({ keterangan: event.target.value });
  };

  //   Bayar
  handlerBayar = (event) => {
    this.setState({ bayar: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>CAFE & RESTO {this.state.namaResto}</h1>

        {/* Button Ganti Nama */}
        <button className="btn btn-success" onClick={this.handlerGantiNama}>
          Ganti Nama Resto
        </button>

        {/* Form */}
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-4 offset-md-4">
            <form>
              <div className="form-group">
                <label>Nama Pembeli</label>
                <input className="form-control" name="namaPembeli" onChange={this.handlerNamaPembeli} value={this.state.namaPembeli} />
                <small>Nama Pembeli: {this.state.namaPembeli}</small>
              </div>
              <div className="form-group">
                <label>Keterangan</label>
                <textarea className="form-control" name="keterangan" onChange={this.handlerChangeKeterangan} value={this.state.keterangan}></textarea>
                <small>Keterangan: {this.state.keterangan}</small>
              </div>
              <div className="form-group">
                <label>Jenis Pembayaran</label>
                <select className="form-control" name="bayar" onChange={this.handlerBayar} value={this.state.value}>
                  <option value="">Pilih Jenis Pembayaran</option>
                  <option value="Cash">Cash</option>
                  <option value="Kartu Kredit">Kartu Kredit</option>
                  <option value="Voucher">Voucher</option>
                </select>
                <small>Jenis Pembayaran: {this.state.bayar}</small>
              </div>
            </form>
          </div>
        </div>

        <br></br>
        {/* Menu MAkanan */}
        <h2 className="header-menu">Menu Makanan</h2>
        {this.state.menuMakanan.map((menu) => (
          <MenuMakanan key={menu.id} menuMakanan={menu.nama} hargaMakanan={menu.harga} stok={menu.stok} />
        ))}

        {/* Menu Minuman */}
        <h2>Menu Makanan</h2>
        {this.state.menuMinuman.map((menu) => (
          <MenuMinuman key={menu.id} menuMinuman={menu.nama} hargaMinuman={menu.harga} stok={menu.stok} />
        ))}
      </div>
    );
  }
}

export default App;
