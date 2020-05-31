import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>They Call Me Stevi</h1>
        <p>
          From relationship advise to how to know if they are the right one. Stevi has the answers!
          <br />
          Stay tuned for more!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Who is Stevi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Stevi's Books
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Let's Talk Love
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Call on Stevi
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
