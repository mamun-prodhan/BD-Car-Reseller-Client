import React from 'react';

const BookingModal = ({ selectedCar, setSelectedCar }) => {

    const { categoryId, categoryName, productName, productImage, resalePrice, originalPrice, yearOfPurchase, yearsOfUse, location, postedTime, sellersName, conditionType, mobileNumber, description } = selectedCar;

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            name: name,
            email: email,
            productName: productName,
            resalePrice: resalePrice,
            phone: phone,
            meetingLocation: meetingLocation
        }
        
        console.log(booking);
        setSelectedCar(null);
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
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name='email' type="text" placeholder="Your Email" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Product Name </span>
                        </label>
                        <input name='productName' type="text" value={productName} disabled className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='resalePrice' type="text" disabled value={resalePrice} className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <input className='w-full btn btn-primary' type="submit" value="Order Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;