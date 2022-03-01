import React, { useState } from "react";
import './checkout.scss';
import axiosService from "../../helpers/axios";
import { v4 as uuidv4 } from 'uuid';

export default function Home(props) {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const axios = new axiosService()

    async function savePaymentMethod() {
        const PURCHASED_DETAILS = JSON.parse(localStorage.getItem("purchasedDetails"));
        const USER = JSON.parse(localStorage.getItem("User"));

        const NEW_PURCHASED_DETAILS = {
            purchasedProductDetails: PURCHASED_DETAILS.purchasedProductDetails,
            product: PURCHASED_DETAILS.product,
            paymentMethod: paymentMethod
        }
        localStorage.setItem('purchasedDetails', JSON.stringify(NEW_PURCHASED_DETAILS))
        const SUBTOTAL = PURCHASED_DETAILS.product.cost * PURCHASED_DETAILS.purchasedProductDetails.quantity;
        const TOTAL = SUBTOTAL * 1.11;
        const NEW_PURCHASE_REGISTER = {
            internalId: "P-"+(uuidv4().substring(0,5)),
            buyerUsername: USER.username,
            paymentMethodId: PURCHASED_DETAILS.paymentMethod.paymentMethodIdentifier,
            product: {
                internalId : PURCHASED_DETAILS.product.internalId,
                name: PURCHASED_DETAILS.product.internalId,
                size: PURCHASED_DETAILS.purchasedProductDetails.size,
                color: PURCHASED_DETAILS.purchasedProductDetails.color,
                quantity: PURCHASED_DETAILS.purchasedProductDetails.quantity,
                cost: PURCHASED_DETAILS.product.cost,
            },
            deliveryAdress:  "Example adress (CHANGE FOR FUTURE IMPLEMENTATION - FER)",
            subtotal: SUBTOTAL,
            total: TOTAL
        }
        await axios.postData("/sales/save-one", NEW_PURCHASE_REGISTER)
    }
    // action="https://secure.payzen.eu/vads-payment/"
    return (
        <div>
            <p className="formulario__submitpago">Metodo de Pago</p>
            <form  >
                <select defaultValue="NONE" className="formulario__submitpagox" name="" id=""onChange={event => setPaymentMethod({
                    type: event.target.value,
                    ...paymentMethod
                })}>
                    <option value="NONE" disabled>--Metodos de Pago--</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Credito">Tarjeta de Credito</option>
                    <option value="Debito">Debito</option>
                </select>
                <input className="formulario__submitpagox" name="parametre1" placeholder="Nombre"
                    onChange={event => setPaymentMethod({
                        ownerName: event.target.value,
                        ...paymentMethod
                    })}
                />
                <input className="formulario__submitpagox" name="parametre2" placeholder="Apellido"
                    onChange={event => setPaymentMethod({
                        ownerLastName: event.target.value,
                        ...paymentMethod
                    })}
                />
                <input className="formulario__submitpagox" name="parametre3" placeholder="Numero celular"
                    onChange={event => setPaymentMethod({
                        phone: event.target.value,
                        ...paymentMethod
                    })}
                />
                <p className="formulario__submitpago">Numero de tarjeta</p>
                <input className="formulario__submitpagox" name="signature" placeholder="Numero de tarjeta"
                    onChange={event => setPaymentMethod({
                        paymentMethodIdentifier: event.target.value,
                        ...paymentMethod
                    })}
                />
            </form>
            <p onClick={savePaymentMethod} value="Pagar">Xd</p> 
        </div>
    );
}
