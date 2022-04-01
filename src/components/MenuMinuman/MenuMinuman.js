import React, { Component } from "react";

class MenuMinuman extends Component {
  render() {
    return (
      <div style={{ border: "1px solid red", width: 300, margin: "auto" }}>
        <p>Menu Minuman: {this.props.menuMinuman}</p>
        <p>Harga: Rp. {this.props.hargaMinuman}</p>
        <p>Stok: {this.props.stok}</p>
      </div>
    );
  }
}

export default MenuMinuman;
