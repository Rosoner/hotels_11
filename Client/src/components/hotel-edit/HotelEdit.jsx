import { useNavigate, useParams } from 'react-router-dom';

import * as hotelService from '../../services/hotelService';

import { useEffect, useState } from 'react';

export default function HotelEdit() {
    const navigate = useNavigate();
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState({
        name: '',
        location: '',        
        description: '',
        imageUrl: '',
        summary: '',
        facilities: '',
        link: '',
        _id: '',
    });
    

    useEffect(() => {
        hotelService.getOne(hotelId)
        .then(result => {
            setHotel(result);
            });
    }, [hotelId]);


    const editHotelSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await hotelService.edit(hotelId, values);
           
            navigate('/hotels');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setHotel(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

   
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editHotelSubmitHandler}>
                <div className="container">
                    <h1>Edit Hotel</h1>
                    <label htmlFor="name">Hotel:</label>
                    <input type="text" 
                        id="name" 
                        name="name" 
                        value={hotel.name} 
                        onChange={onChange} 
                        placeholder= "Enter hotel name" />

                    <label htmlFor="location">Location:</label>
                        <input type="text" 
                        id="location" 
                        name="location" 
                        value={hotel.location} 
                        onChange={onChange} 
                        placeholder="Enter hotel location..." />

                    <label htmlFor="hotel-img">Image:</label>
                        <input type="text" 
                        id="imageUrl" 
                        name="imageUrl"
                        value={hotel.imageUrl} 
                        onChange={onChange} 
                        placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" 
                        value={hotel.summary} 
                        onChange={onChange} 
                        id="summary"></textarea>

                    <label htmlFor="description">Description:</label>
                        <textarea name="description" 
                        value={hotel.description} 
                        onChange={onChange}
                        id="description"></textarea>

                    <label htmlFor="facilities">Facilities:</label>
                        <input type="text" 
                        id="facilities" 
                        name="facilities" 
                        value={hotel.facilities} 
                        onChange={onChange} 
                        placeholder="Enter hotel facilities" />

                    <label htmlFor="hotel-link">Link:</label>
                        <input type="text" 
                        id="link" name="link" 
                        value={hotel.link} 
                        onChange={onChange} 
                        placeholder="Enter official hotel's link" />

                    <input className="btn submit" type="submit" value="Edit hotel" />
                </div>
            </form>
        </section>
    );
}
