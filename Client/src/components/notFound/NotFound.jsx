import { Link } from 'react-router-dom';
// import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className="bg-2 section" id="contact">
            <div
                // className={`inner ${styles.notFoundBackground}`}
                data-topspace={50}
                data-bottomspace={20}                
            >
                <div className="container">
                    <h3 className="hdr1" style={{ color: 'red', fontSize: 60}}>  404 Page Not Found</h3>
                    <h3 className="hdr2"><Link style={{ color: 'yellow',}} to="/">Back to Home Page</Link></h3>
                    
                </div>
            </div>
        </div>

    )
}