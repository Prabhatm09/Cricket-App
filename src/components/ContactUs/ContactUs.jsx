import React from 'react';

import './contactUs.css';
import '../Style/style.css';

export function ContactUs() {
    return (
        <>
            <div className='container'>
                <div>
                    <img height="500px" width="100%" src="https://chhotaniveshgold.com/wp-content/uploads/2022/01/CN-Website-2022-Contact-Us-Banner_Option_1.jpg" alt=""></img>
                </div>
                <div className='contact_div'>
                    <h1>Meet us</h1>
                    <div className='contact_icon'>
                        <i class="fa-solid fa-phone"></i> <span>+91 7234567890</span>
                    </div>
                    <div className='contact_icon'>
                        <i class="fa-solid fa-copyright"></i><span>anjali123@gmail.com, amit3@gmail.com & prabhat76@gmail.com</span>
                    </div>
                    <div className='contact_icon'>
                        <i class="fa-solid fa-location-dot"></i><span>Flat no. 35 4th floor, Chirag Delhi, New Delhi</span>
                    </div>
                </div>
            </div>
        </>
    )
}