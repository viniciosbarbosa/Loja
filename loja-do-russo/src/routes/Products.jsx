import { useEffect, useState } from 'react'
import {useApi} from "../hooks/useApi"

import "../css/Products.css"
import Form from '../components/FormProduct'
import FormProduct from '../components/FormProduct'
import TableProducts from '../components/TableProducts'
import Footer from '../components/Footer'

const Products = () => {

  const [dataProduct , setDataProduct] = useState(null)


  const createProduct = () =>{
    setDataProduct(true)
  }


  
  return (
    <div className='Products'>
      <h1>Lista de Produtos</h1>

      <button className='btn__add__product' onClick={createProduct}>Add +</button>

      <TableProducts formTable={setDataProduct}/>

      {dataProduct && (
        <FormProduct dataProduct={dataProduct}/>
      )}


      <Footer/>

    </div>
  )
}

export default Products