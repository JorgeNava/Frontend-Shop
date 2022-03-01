import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import axiosService from "../../helpers/axios";
import './products.scss';

export default function Products(props) {
    const [product, setProduct] = useState(null);
    const [purchasedProductDetails, setPurchasedProductDetails] = useState(null);
    const { internalId } = useParams();
    const axios = new axiosService()

    useEffect(async () => {
        getProductData();
    }, []); 

    async function getProductData() {
        setProduct(await axios.getData("/products/get-one-by-internal-id/"+internalId))
    }

    function renderImage() {
        if (product == null) {
            return (<p>Loading...</p>)
        }
        return (
            <img src={require("../../img/" + product.imageUrl + ".jpg")} alt="imagen producto" className="camisa__imagen"></img>
        )
    }

    function renderTitle() {
        if (product == null) {
            return (<p>Loading...</p>)
        }
        return (
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>
        )
    }

    function renderQuantity() {
        if (product == null) {
            return (<p>Loading...</p>)
        }
        return (
            <input onChange={event => setPurchasedProductDetails({
                quantity: event.target.value,
                ...purchasedProductDetails
            })} className="formulario__campo" type="number" placeholder={"Cantidad: " + product.quantity} min="1"></input>
        )
    }

    function renderSizeOptions() {
        if (product == null) {
            return (<option value="0">0</option>)
        } else {
            if ( product.sizes.length > 0) {
                return product.sizes.map((size, index) => {
                    return (<option value={size} key={index}>{size}</option>)
                });
            }
        }
    }

    function renderColorOptions() {
        if (product == null) {
            return (<option value="0">0</option>)
        } else {
            if ( product.sizes.length > 0) {
                return product.colors.map((color, index) => {
                    return (<option value={color} key={index}>{color}</option>)
                });
            }
        }
    }

    function saveProductPurchase() {
        localStorage.setItem('purchasedDetails', JSON.stringify({
            purchasedProductDetails: purchasedProductDetails,
            product: product
        }))
    }

    return (
        <div>
            <nav className="navegacion">
                <a className="navegacion__enlace navegacion__enlace--activo" href="index.html">Tienda</a>
            </nav>

            <main className="contenedor">
                <h1>React JS</h1>
                <div className="camisa">
                    {renderImage()}
                    <div className="camisa__contenido">
                        {renderTitle()}
                        <form className="formulario">
                            <select defaultValue="NONE" className="formulario__campo" name="" id="" onChange={event => setPurchasedProductDetails({
                                size: event.target.value,
                                ...purchasedProductDetails
                            })}>
                                <option value="NONE" disabled>--Seleccionar talla--</option>
                                {renderSizeOptions()}
                            </select>
                            {renderQuantity()}
                            <select defaultValue="NONE" className="formulario__campo" name="" id="" onChange={event => setPurchasedProductDetails({
                                color: event.target.value,
                                ...purchasedProductDetails
                            })}>
                                <option value="NONE" disabled>--Seleccionar color--</option>
                                {renderColorOptions()}
                            </select>
                            <Link to="/checkout" onClick={saveProductPurchase()} className="formulario__submit" type="submit" value="Agregar al carrito">
                                <p>Pagar</p>
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
        </div>     
    );
}
