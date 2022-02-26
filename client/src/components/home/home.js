import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './home.scss';
import axiosService from "../../helpers/axios";

export default function Home(props){
  const [products, setProducts] = useState([])
  const axios = new axiosService()

  async function getProductsData() {
    setProducts(await axios.getData("/products/get-many-by-type?type=Clothe"))
  }

  function renderLoading() {
    if (products.length == 0) {
      return <h1>LOADING...</h1>
    } else {
      return (products.map((product, index) => {
        return (
          <div className="producto" key={index}>
            <Link to="/products">
              <img
                className="producto__imagen"
                src={require("../../img/" + product.imageUrl + ".jpg")}
                alt="imagen camisa"
              ></img>
              <div className="producto__informacion">
                <p className="producto__nombre">{product.name}</p>
                <p className="producto__precio">${product.cost}</p>
              </div>
            </Link>
          </div>
        )
      })
      )
    }
  }

  useEffect(() => {
    getProductsData();
  }, [products]); 


  return (
    <div>
      <nav className="navegacion">
        <select
          defaultValue="0"
          name="OS"
          className="navegacion__enlace navegacion__enlace--activo"
        >
          <option value="0"> Tipos de Articulos </option>
          <option value="2">Ropa</option>
          <option value="3">Figuras</option>
          <option value="10">Coleccionables</option>
        </select>
        <select
          defaultValue="0"
          name="OS"
          className="navegacion__enlace navegacion__enlace--activo"
        >
          <option value="0"> Categorias </option>
          <option value="2">Peliculas</option>
          <option value="3">Series</option>
          <option value="10">Anime</option>
          <option value="12">Videojuegos</option>
        </select>
      </nav>

      <main className="contenedor">
        <h1>Nuestros Productos</h1>
        <div className="grid productsContainer">
          {renderLoading()}
        </div>
      </main>
      </div>
    )
}
