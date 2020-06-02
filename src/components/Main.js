import PropTypes from 'prop-types'
import React from 'react'
import headshot from '../images/headshot/stevi_smith.jpg'
import fountainPenImg from '../images/stock/aaron-burden-y02jEX_B0O0-unsplash.jpg'
import letsTalkLoveImage from '../images/lets_talk_love/elijah-macleod-FH-xXwv7eZg-unsplash.jpg'
import WomensExperienceFlyer from '../images/engagements/a_womens_experience_6_2_20_fb.jpg'
import WomensExperienceFlyerSmall from '../images/engagements/a_womens_experience_6_2_20_fb_small.jpg'
import Card from './Card'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    let content = {
      title: "A Women's Experience",
      subheader: "June 2, 2020 at 7 PM",
      description: "This panel of women will help shed light on the many issues woman deal with in relationships, when they are unable to have an open communication with their man.",
      details: "Sign up for this event ",
      eventLink: "https://www.facebook.com/107556734134858/videos/2683232475286329/"
    }

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Meet Stevi</h2>
          <span className="image main">
            <img src={headshot} alt="Picture of Stevi Smith" />
          </span>
          <p>
            This is where we could put your bio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Books</h2>
          <span className="image main">
            <img src={fountainPenImg} alt="" />
          </span>
          <p>
            To stay up to date on all of Stevi's books join her mailing list <a href="#">here</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Let's Talk Love</h2>
          <span className="image main">
            <img src={letsTalkLoveImage} alt="" />
          </span>

          <p>
            Could be where you give an overview about your methodology. Would be a great place to get people interested in the way you view relationships
          </p>
          <a href={content.eventLink} target='_blank'>
            <Card image={WomensExperienceFlyer} smallImage={WomensExperienceFlyerSmall} content={content} />
          </a>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Call on Stevi</h2>
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
          {close}
        </article>
      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
