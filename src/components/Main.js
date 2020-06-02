import PropTypes from 'prop-types'
import React from 'react'
import headshot from '../images/headshot/stevi_smith.jpg'
import fountainPenImg from '../images/stock/aaron-burden-y02jEX_B0O0-unsplash.jpg'
import letsTalkLoveImage from '../images/lets_talk_love/elijah-macleod-FH-xXwv7eZg-unsplash.jpg'
import WomensExperienceFlyer from '../images/engagements/a_womens_experience_6_2_20_fb.jpg'
import WomensExperienceFlyerSmall from '../images/engagements/a_womens_experience_6_2_20_fb_small.jpg'
import Card from './Card'
import Form from './Form'


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
            Who am I?
            <br />
            <br />
            They Call Me Stevi!
           </p>
          <p>Born and raised in the inner city of Baltimore, Maryland. I relocated to Ft. Lauderdale, Florida in 1999 to reshape my future and begin my life in the sun.</p>
          <p>With a background in training and development, I have mentored countless individuals in professional development, interpersonal skills, and personal relationships.</p>

          <p>Over the last 13 plus years, I have honed my skills as a professional trainer working with companies like American Express, Bank of America, Capital One, Connexion Point, and Georgia Pacific.</p>

          <p>I am an expert in assisting people in building a positive self-loving version of themselves, which in turn allows them to transition into healthy, loving, and meaningful relationships.</p>
          <p>My mission is to teach individuals the fundamentals of investing in themselves, their families, and potential lovers. This mission is achieved by offering personalized self-development training, seminars, and self-help books.</p>

          <p>My door is always open to you, your dreams, passions, and goals. So, when you are ready to embark on your journey of building a self-loving version of yourself...</p>

          <p>Just Call Stevi! ;)</p>
          {close}
        </article>

        <article
          id="books"
          className={`${this.props.article === 'books' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Books</h2>
          <span className="image main">
            <img src={fountainPenImg} alt="" />
          </span>
          <p>
            To stay up to date on all of Stevi's books join her mailing list here
          </p>

          <Form />
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
          <Form />
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
