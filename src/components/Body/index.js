// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const leftNavbarContentList = [
  {name: 'Item 1'},
  {name: 'Item 2'},
  {name: 'Item 3'},
  {name: 'Item 4'},
]

const Body = () => {
  const renderRightNavbar = () => (
    <div className="left-right-navbar-card">
      <h1 className="body-subheading">Right Navbar Menu</h1>
      <ul className="right-navbar-list">
        <li className="right-navbar-item">
          <p>Ad 1</p>
        </li>
        <li className="right-navbar-item">
          <p>Ad 2</p>
        </li>
      </ul>
    </div>
  )

  const renderBodyContent = () => (
    <div className="body-content-card">
      <h1 className="body-subheading">Content</h1>
      <p className="body-content-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const renderLeftNavbar = () => (
    <div className="left-right-navbar-card">
      <h1 className="body-subheading">Left Navbar Menu</h1>
      <ul className="left-navbar-list">
        {leftNavbarContentList.map(eachItem => {
          const {name} = eachItem

          return (
            <li className="left-navbar-item" key={name}>
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && renderLeftNavbar()}
            {showContent && renderBodyContent()}
            {showRightNavbar && renderRightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
