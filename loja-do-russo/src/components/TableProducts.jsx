import React from 'react'
import { useEffect, useState } from 'react'
import {useApi} from "../hooks/useApi"

import "../css/TableProducts.css"

const TableProducts = ({formTable}) => {
  const [url , setUrl] = useState("http://localhost:3000/products")
  const {data , httpRequestType , attForm } = useApi(url)
  

  const exchangeProduct =  (id) =>{
    httpRequestType(id , "GET")
  }

  const deleteProduct =  (id) =>{
    httpRequestType(id , "DELETE") 
    console.log("data btn delete" , data)
  }

  useEffect(() => {
    console.log("data tela" , data)
  }, [data]);  


  useEffect(() => {
    if (attForm) {
        formTable(attForm);
    }
}, [attForm, formTable]);

  return (
    <div>
        {data ? (
        <>
      
        <table className='tbl__geral'>
          <thead className='tbl__head'>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody className="tbl__body">
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>R$ {item.price}</td>
                <td>
                  <button onClick={() => productDetails(item.id)}>Ver Detalhes </button>
                  <button onClick={() => exchangeProduct(item.id)}>Alterar </button>
                  <button onClick={() => deleteProduct(item.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table></>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default TableProducts