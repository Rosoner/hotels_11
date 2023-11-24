import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as hotelService from '../../services/hotelService';
// import * as commentService from '../../services/commentService';

export default function HotelDetails() {
    const [hotel, setHotel] = useState({});
    // const [comments, setComments] = useState([]);
    const { hotelId } = useParams();

    useEffect(() => {
        hotelService.getOne(hotelId)
            .then(setHotel);

        // commentService.getAll(gameId)
        //     .then(setComments);
    }, [hotelId]);

    // const addCommentHandler = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget);

    //     const newComment = await commentService.create(
    //         gameId,
    //         formData.get('username'),
    //         formData.get('comment')
    //     );

    //     setComments(state => [...state, newComment]);
    //}

    return (
        <section id="game-details">
            <h1>Hotel Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={hotel.imageUrl} alt={hotel.name} />
                    <h1>{hotel.name}</h1>
                    <h6>{hotel.location}</h6>
                                    
                    <p className="type">{hotel.description}</p>
                    <div className="levels">Facilities: {hotel.facilities}</div>
                    <div >
                    <Link to={hotel.link} className="details-button">hotel</Link>
                    {/* <Link to={`/hotels/${_id}`} className="details-button">Details</Link */}
                    </div>                    
                </div>

                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div> */}

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article> */}
        </section>
    );
}
