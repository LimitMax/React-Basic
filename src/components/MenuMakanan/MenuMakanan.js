import React from "react";

var menuMakanan = (props) => {
  return (
    <div style={{ border: "1px solid red", width: 300, margin: "auto" }}>
      <p>Menu Makanan: {props.menuMakanan}</p>
      <p>Harga: Rp. {props.hargaMakanan}</p>
      <p>Stok: {props.stok}</p>
    </div>
  );
};

export default menuMakanan;
