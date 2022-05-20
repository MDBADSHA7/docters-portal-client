import React from 'react';

const Datas = ({ datas, setTreatment }) => {
    const { name, slots, price } = datas;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> :
                        <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ?
                    'spaces' : 'space'} available</p>
                <p>price: ${price}</p>
                <div class="card-actions justify-center">
                    <label
                        htmlFor="Booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(datas)}
                        class="btn btn-sm btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Datas;