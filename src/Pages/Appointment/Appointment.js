import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailavailAppointment from './AvailavailAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailavailAppointment date={date}></AvailavailAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;