import { useNavigate, useParams } from 'react-router-dom';

import * as hotelService from '../../services/hotelService';
import useForm from '../../hooks/useForm';
import { useEffect, useState } from 'react';

export default function HotelEdit() {
    const navigate = useNavigate();
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState({
        name: '',
        location: '',
        imageUrl: '',
        summary: '',
        description: '',
        facilities: '',
        link: '',
    });

    useEffect(() => {
        hotelService.getOne(hotelId)
            .then(result => {
                setHotel(result);
            });
    }, [hotelId]);

    const editHotelSubmitHandler = async (values) => {
        try {
            await hotelService.edit(hotelId, values);
           // edit = async (hotelId, hotelData) 

            navigate('/hotels');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(editHotelSubmitHandler, hotel);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Hotel</h1>
                    <label htmlFor="leg-name">Hotel:</label>
                    <input type="text" id="name" name="name" value={values.name} onChange={onChange} placeholder= {values.name} />

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

                    <input className="btn submit" type="submit" value="Edit hotel" />
                </div>
            </form>
        </section>
    );
}
