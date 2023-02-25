import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_PRODUCT_LIST } from '../Graphql/Queries'


const ProductList = () => {
    const { data: productList } = useQuery(GET_PRODUCT_LIST)
    return (
        <div>
            <div className="container">
                <h2 className="heading">Product List</h2>
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        {
                            productList && productList?.getProducts?.map((product, key) => {
                                key++;
                                return (
                                    <tr key={key}>
                                        <td data-th="Id"> {key} </td>
                                        <td data-th="Name"> {product.name} </td>
                                        <td data-th="Price"> {product.price} </td>
                                        <td data-th="Quantity" > {product.quantity} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default ProductList


