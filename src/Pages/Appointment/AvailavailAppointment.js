import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Datas from './Datas';

const AvailavailAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://glacial-sierra-51251.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://glacial-sierra-51251.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])
    return (
        <div>
            <h4 className='text-xl text-primary text-center my-12'>Availavail Appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services?.map(datas => <Datas
                    key={datas._id}
                    datas={datas}
                    setTreatment={setTreatment}
                ></Datas>)}
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailavailAppointment;