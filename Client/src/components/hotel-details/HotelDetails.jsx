import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


import * as hotelService from '../../services/hotelService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";


export default function HotelDetails() {
    const navigate = useNavigate();
    const {username, userId, isAuthenticated} = useContext(AuthContext);
    const [hotel, setHotel] = useState({});
    const [comments, setComments] = useState([]);
    const { hotelId } = useParams();

    // console.log(_id)
    // console.log(hotel._ownerId)

    useEffect(() => {
        hotelService.getOne(hotelId)
            .then(setHotel);

            commentService.getAll(hotelId)
            .then(setComments);

    }, [hotelId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            hotelId,
            formData.get('comment')
        );

        newComment.owner = { username };

        setComments(state => [...state, { ...newComment, owner: { username } }]);
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${hotel.name}`);

        if (hasConfirmed) {
            await hotelService.remove(hotelId);

            navigate('/hotels');
        }
    }

    return (
        <section id="hotel-details">
            <h1>Hotel Details</h1>
            <div className="info-section">
                <div className="hotel-header">
                    <img className="hotel-img" src={hotel.imageUrl} alt={hotel.name} />
                    <h1>{hotel.name}</h1>
                    <h5>{hotel.location}</h5>
                    <span >
                        <Link to={hotel.link} ><span style={{ color: 'darkblue', fontSize:12}}>Visit web site</span></Link>
                    </span>  
                                    
                    <p className="type">{hotel.description}</p>
                                                           
                    <div className="levels">
                        <span style={{ color: 'darkred',}}> Facilities: </span>
                        <span>{hotel.facilities}</span>
                    </div>
                                     
                </div>

                <div className="details-comments">
                    <div id='header-comment'>Comments:</div>
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments yet.</p>
                    )}
                </div>

                {userId === hotel._ownerId && isAuthenticated && (
                <div className="buttons">
                    <Link to={`/hotels/${hotelId}/edit`} className="button">Edit</Link>
                    <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    
                </div>
                )}
                
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input id="btn-submit" type="submit" value="Add Comment" />
                    {/* <input className="btn submit" type="submit" value="Add Comment" /> */}
                </form>
            </article>
        </section>
    );
}