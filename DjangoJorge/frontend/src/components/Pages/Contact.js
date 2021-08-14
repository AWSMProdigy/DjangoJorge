import React from 'react';
// import '../App.css';
import { Button } from '../Button'
// import './Contact.css'
export default function Contact(){
    return (
        <div className='contact-container'>
            <section className="contact-subscription">
                <p className="contact-subscription-heading">
                    Let's get you into a home today!
                </p>
                <p className="contact-subscription-text">
                    Sure, why not?
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="contact-input"/>
                        <Button buttonStyle='btn--primary'>Send Email</Button>
                    </form>
                </div>
            </section>
        </div>

    )
}