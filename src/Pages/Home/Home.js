import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OwnMake from './OwnMake';
import Services from './Services';
import Testimonials from './Testimonials';
import Input from './Input';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <OwnMake></OwnMake>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Input></Input>
            <Footer></Footer>
        </div>
    );
};

export default Home;