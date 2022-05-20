import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const [doctors, setDoctors, refetch] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctor', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                console.log(data);
            })
    }, [setDoctors])
    // const { data: doctors, isLoading } = useQuery('doctors', () => {
    //  fetch('http://localhost:5000/doctor', {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json());
    //     if (isLoading) {
    //         return <Loading></Loading>
    //     }
    // });
    return (
        <div>
            <h2 className="text-3xl">Manage Doctors:{doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                refetch={refetch}
                                index={index}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteModal
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageDoctor;