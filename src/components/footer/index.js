import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <>            
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                    © 2022, Desenvolvimento ❤️ by 
                    <Link to='' target="_blank" className="footer-link fw-bolder"> Hygea Saúde.</Link>
                </div>
                </div>
            </footer>
        
        </>
    )
}

export default Footer;