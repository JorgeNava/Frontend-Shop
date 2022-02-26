import React from "react";
import { Link } from 'react-router-dom';
import './products.scss';

export default function Products(props) {
    return (
        <div>
            <nav className="navegacion">
                <a className="navegacion__enlace navegacion__enlace--activo" href="index.html">Tienda</a>
            </nav>

            <main className="contenedor">
                <h1>React JS</h1>
                <div className="camisa">
                    <img src={require("../../img/3.jpg")} alt="imagen producto" className="camisa__imagen"></img>
                    <div className="camisa__contenido">
                        <p>Pellentesque in leo pharetra, molestie felis iaculis, pulvinar ante. Maecenas hendrerit orci a erat bibendum, a venenatis mi tincidunt. Donec malesuada congue leo non egestas. Maecenas et lorem dui. In risus massa, accumsan sed dapibus non, dignissim a sem. Sed eu rhoncus ante.</p>
                    <form className="formulario">
                        <select className="formulario__campo" name="" id="">
                            <option value="Chica" disabled selected>--Seleccionar talla--</option>
                            <option value="Chica">Chica</option>
                            <option value="Mediana">Mediana</option>
                            <option value="Grande">Grande</option>
                        </select>
                        <input className="formulario__campo" type="number" placeholder="Cantidad" min="1"></input>
                        <Link to="/checkout" className="formulario__submit" type="submit" value="Agregar al carrito">
                            <p>Pagar</p>
                        </Link>
                    </form>
                    
                    </div>
                </div>
            </main>
        </div>     
    );
}
