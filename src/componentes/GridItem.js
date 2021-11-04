import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../css/misestilos.css'
export default function GridItem(props) {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };
    return (
        <div className="row cardItem">
            <div className="card-md-6">
                <div>
                    <h4> {props.product.nombre} </h4>
                    <div className="fs-5 mb-3">
                        <span> $ {props.product.precio} </span>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        <button
                            onClick={() => { alert("Details(in construction)"); }}
                            className="btn btn-outline-dark flex-shrink-0 float-end"
                        >
                            Details
                        </button>
                    </div>
                    <div className="d-flex">
                        {isInCart(props.product) && (
                            <button
                                onClick={() => increase(props.product)}
                                className="btn btn-outline-dark flex-shrink-0 float-end"
                            >
                                Add more
                            </button>
                        )}
                        {!isInCart(props.product) && (
                            <button
                                onClick={() => addProduct(props.product)}
                                className="btn btn-outline-dark flex-shrink-0"
                            >
                                Add to cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}
