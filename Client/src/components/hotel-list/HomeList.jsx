import { useEffect, useState } from 'react';

import * as hotelService from '../../services/hotelService.js';
import HotelListItem from './hotel-list-item/HotelListItem.jsx';

export default function HotelList() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelService.getAll()
            .then(result => setHotels(result));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Hotels</h1>

            {hotels.map(hotel => (
                <HotelListItem key={hotel._id} {...hotel} />
            ))}

            {hotels.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
