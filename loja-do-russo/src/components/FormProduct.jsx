import React, { useState, useEffect } from 'react';
import { useApi } from "../hooks/useApi";

import "../css/Form.css";

const FormProduct = ({ dataProduct }) => {
    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [currentProductId, setCurrentProductId] = useState(null);

    const [url, setUrl] = useState("http://localhost:3000/products");
    const { data, httpRequestType } = useApi(url);

    const postUpdateProduct = (e) => {
        e.preventDefault();

        const params = {
            name: nameProduct,
            price: Number(priceProduct)
        };

        if (currentProductId) {
            params.id = currentProductId;
            httpRequestType(params, "PUT");
        } else {
            httpRequestType(params, "POST");
        }

        setNameProduct("");
        setPriceProduct("");
    }

    useEffect(() => {
        if (dataProduct) {
            setNameProduct(dataProduct.name);
            setPriceProduct(dataProduct.price);
            setCurrentProductId(dataProduct.id);
        }
    }, [dataProduct]);

    useEffect(() => {
        if (data) {
           
            setCurrentProductId(null);
        }
    }, [data]);

    return (
        <div>
            <div className='add_product'>
                <form onSubmit={postUpdateProduct}>
                    <label>Nome do produto
                        <input type="text" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                    </label>

                    <label>Preço
                        <input type="number" value={priceProduct} onChange={(e) => setPriceProduct(e.target.value)} />
                    </label>

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
};

export default FormProduct;
