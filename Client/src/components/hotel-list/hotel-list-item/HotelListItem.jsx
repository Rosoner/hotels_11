import { Link } from "react-router-dom";

export default function HotelListItem({
    _id,
    name,
    location,
    imageUrl,
    summary

}) {
    return (
        <div className="allHotels">
            <div className="allHotels-info">
                <img src={imageUrl} />
                <h2>{name}</h2>
                <h6>{location}</h6>                
                <div>
                    <p>{summary}</p>
                </div>
                <Link to={`/hotels/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
