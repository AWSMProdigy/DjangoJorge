import React from 'react'
import { Button } from '../Button'
// import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/About'>How it works</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Testimonials</Link>
                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/About'>How it works</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Testimonials</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo" to="/">
                            Jorge Sousa <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>JSousa INC</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label='Facebook'>
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label='Facebook'>
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label='Facebook'>
                            <i className="fab fa-facebook-f"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
