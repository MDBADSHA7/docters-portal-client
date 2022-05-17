import React from 'react';
import docter from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center my-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={docter} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white my-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos, expedita debitis corrupti repellat dolores laborum molestias harum vero, amet minus iste sit sequi aspernatur tempora. Corrupti maxime placeat illo, consequuntur ratione dicta adipisci iusto animi? Qui doloremque voluptatibus obcaecati?</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 ">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;