import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading'
import UserRow from './UserRow';
const Users = () => {
    const [users, setUsers, refetch] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data);
            })
    }, [setUsers])
    // const { data: users, isLoading } = useQuery('users', () => {
    //     // fetch('http://localhost:5000/user', { method: 'GET' })
    //     //     .then(res => res.json())

    // });
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2 className="text-2xl">All users:{users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Users;