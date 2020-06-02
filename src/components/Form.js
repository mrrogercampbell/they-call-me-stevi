import React from 'react';

const Form = () => {
    return (
        <div>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special" />
                    </li>
                    <li>
                        <input type="reset" value="Reset" />
                    </li>
                </ul>
            </form>
            <ul className="icons">
                <li>
                    <a
                        href="https://twitter.com/TheyCallMeStevi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon fa-twitter"
                    >
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/stephanie.smith.16752754"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon fa-facebook">
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/theycallme_stevi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon fa-instagram">
                        <span className="label">Instagram</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Form;