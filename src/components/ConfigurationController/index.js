// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="config-container">
          <div className="config-layout-card">
            <h1 className="config-layout-heading">Layout</h1>
            <ul className="config-layout-list">
              <li className="config-layout-item">
                <input
                  onClick={onToggleShowContent}
                  className="config-layout-input"
                  type="checkbox"
                  id="content"
                />
                <label className="config-layout-label" htmlFor="content">
                  Content
                </label>
              </li>
              <li className="config-layout-item">
                <input
                  onClick={onToggleShowLeftNavbar}
                  className="config-layout-input"
                  type="checkbox"
                  id="leftNavbar"
                />
                <label className="config-layout-label" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </li>
              <li className="config-layout-item">
                <input
                  onClick={onToggleShowRightNavbar}
                  className="config-layout-input"
                  type="checkbox"
                  id="rightNavbar"
                />
                <label className="config-layout-label" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
