import { gql } from "@apollo/client";


export const GET_USER_LIST = gql`
query {
    getUsers{
        id, name,email, phone
    }
  }
`

export const GET_PRODUCT_LIST = gql`
query {
    getProducts{
      _id, name, quantity, price
    }
  }
`