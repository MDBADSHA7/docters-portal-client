import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        // Send server
        fetch('https://glacial-sierra-51251.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an appointment on ,${data.booking?.data} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="Booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;