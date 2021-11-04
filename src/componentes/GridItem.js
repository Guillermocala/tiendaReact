import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";
import '../css/misestilos.css'
export default function GridItem(props) {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };
    return (
        <div className="card">
            <div className="card-body">
                
                    <h4 className="card-title"> {props.product.nombre} </h4>
                    <div className="card-subtitle fs-5 mb-3">
                        <span> $ {props.product.precio} </span>
                    </div>
                
                <div className="card-text">
                    <div className="card-link">
                        <button
                            onClick={() => { alert("Details(in construction)"); }}
                            className="btn btn-outline-dark flex-shrink-0 float-end"
                        >
                            Details
                        </button>
                    </div>
                    <div className="card-link">
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
