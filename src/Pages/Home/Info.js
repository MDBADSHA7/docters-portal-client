import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTittle="Opening Hours" bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" img={clock}></InfoCard>
            <InfoCard cardTittle="Our Locations" bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" img={marker}></InfoCard>
            <InfoCard cardTittle="Contact Us" bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" img={phone}></InfoCard>
        </div>
    );
};

export default Info;