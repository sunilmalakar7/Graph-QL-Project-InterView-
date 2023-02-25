import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_USER_LIST } from '../Graphql/Queries'


const UserList = () => {
    const { data } = useQuery(GET_USER_LIST)
    let userList = data?.getUsers;

    return (
        <div>
            <div className="container">
                <h2 className="heading">User List</h2>
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        {
                            userList && userList?.map((user, key) => {
                                return (
                                    <tr key={key}>
                                        <td data-th="Id"> {user?.id} </td>
                                        <td data-th="Name"> {user?.name} </td>
                                        <td data-th="Email"> {user?.email} </td>
                                        <td data-th="Phone"> {user?.phone || "-"} </td>
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


export default UserList