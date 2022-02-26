import React from "react";
import './checkout.scss';

export default function Home(props) {
    return (
        <div>
            <p className="formulario__submitpago">Metodo de Pago</p>
            <p>
                <form className="formulario">
                    <select className="formulario__submitpagox" name="" id="">
                        <option  value="Chica" disabled selected>--Metodos de Pago--</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Credito">Tarjeta de Credito</option>
                        <option value="Debito">Debito</option>
                    </select>
                </form>
                </p>
            <form method="POST" action="https://secure.payzen.eu/vads-payment/">
                <input  className="formulario__submitpagox" name="parametre1" placeholder="Nombre" />
                <input  className="formulario__submitpagox" type="parametre2" name="parametre2" placeholder="Apellido" />
                <input    className="formulario__submitpagox" type="number" name="parametre3" placeholder="Numero celular" />
                <p className="formulario__submitpago">Numero de tarjeta</p>
                <input  className="formulario__submitpagox" type="number"  name="signature" placeholder="Numero de tarjeta"/>
                <p> <input  className="formulario__submitpago" type="submit" name="payer" value="Pagar"/></p>
            </form>
        </div>
    );
}
