import React from 'react';
import { Button } from '../Button'



export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredName: null,
            enteredEmail: null,
            enteredMessage: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            enteredName: e.target.value,
        });
    }

    handleEmailChange(e) {
        this.setState({
            enteredEmail: e.target.value,
        });
    }

    handleMessageChange(e) {
        this.setState({
            enteredMessage: e.target.value,
        });
    }

    handleSend() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Name: this.state.enteredName,
                Email: this.state.enteredEmail,
                Message: this.state.enteredMessage,
            }),
        };
        fetch("/api/create-lead", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    render() {
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
                        <form className="formC">
                            <div className="rows">
                                <div className="column">
                                    <input type="email" name="email" placeholder="Your Email" className="contact-input" onChange={this.handleEmailChange}/>
                                    <input type="name" name="name" placeholder="Your name" className="contact-input" onChange={this.handleNameChange}/>
                                    <input type="message" name="message" placeholder="Your message" className="contact-input" onChange={this.handleMessageChange}/>
                                    <Button children="Send message" buttonStyle="btn--primary" buttonSize="btn--large" onClick={this.handleSend}></Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}