import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ selectedCar, setSelectedCar }) => {

    const { _id ,categoryId, categoryName, productName, productImage, resalePrice, originalPrice, yearOfPurchase, yearsOfUse, location, postedTime, sellersName, conditionType, mobileNumber, description } = selectedCar;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const productId = form.id.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            name: name,
            email: email,
            productName: productName,
            productId: _id,
            resalePrice: resalePrice,
            phone: phone,
            meetingLocation: meetingLocation
        }

        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSelectedCar(null);
            toast.success('Booking confirmed')
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <label className="label">
                            <span className="label-text">Enter Your Name </span>
                        </label>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Your Email" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Product Name </span>
                        </label>
                        <input name='productName' type="text" value={productName} disabled className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Product Id</span>
                        </label>
                        <input name='id' type="text" value={_id} disabled  className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='resalePrice' type="text" disabled value={resalePrice} className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered" required/>
                        <label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required/>
                        <input className='w-full btn btn-primary' type="submit" value="Order Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;