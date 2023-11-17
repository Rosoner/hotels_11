import { useNavigate } from 'react-router-dom';

import * as hotelService from '../../services/hotelService';

export default function HotelCreate() {
    const navigate = useNavigate();
    
    const createHotelSubmitHandler = async (e) => {
        e.preventDefault();

        const hotelData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await hotelService.create(hotelData);

            navigate('/hotels');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createHotelSubmitHandler}>
                <div className="container">
                    <h1>Create Hotel</h1>
                    <label htmlFor="leg-name">Hotel:</label>
                    <input type="text" id="name" name="name" placeholder="Enter hotel name..." />

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" placeholder="Enter hotel location..." />

                    <label htmlFor="hotel-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>

                    <label htmlFor="facilities">Facilities:</label>
                    <input type="text" id="facilities" name="facilities" placeholder="Enter hotel facilities" />

                    <label htmlFor="hotel-link">Link:</label>
                    <input type="text" id="link" name="link" placeholder="Enter official hotel's link" />

                    <input className="btn submit" type="submit" value="Create hotel" />
                </div>
            </form>
        </section>
    );
}
