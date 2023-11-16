import { Link } from "react-router-dom";

export default function HotelListItem({
    _id,
    name,
    location,
    imageUrl,
    description,
    facilities,
    summary

}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>Location: {location}</h6>
                <h2>Hotel: {name}</h2>
                <div>
                    <p>Summary:{summary}</p>
                    <p>{description}</p>
                    <p>Facilities:{facilities}</p>
                </div>
                <Link to={`/hotels/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
