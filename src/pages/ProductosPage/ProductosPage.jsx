import {api} from './../../config/site.config';
import { useState, useEffect } from "react";

const ProductosPage = () => {

    //estados
    const [products, setProducts] = useState([]);

    //logica
    const loadProducts = () => {
        api.get('https://productoswebapp2.azurewebsites.net/productos')
        .then((response) => {
            console.log("response", response);
            setProducts(response.data);
        })       
    }

     //efectos
     useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Productos</h1>

                   {/*  <div class="row"> */}
                   {products.map((product, index) => {
                        return (
                            <div>
                                <div class="col-sm-6 mb-3 mb-sm-0" key={index}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{product.nombre}</h5>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            <i class="bi bi-apple h2"></i>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            
                        );
                   })}

                </div>
            </div>
        </div>
    );
};

export default ProductosPage;