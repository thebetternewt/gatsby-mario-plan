import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Notifications = ({ notifications }) => (
  <div className="section">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">Notifications</span>
        <ul className="notifications">
          {notifications &&
            notifications.map(item => (
              <li key={item.id} style={{ marginBottom: 10 }}>
                <p className="pink-text">{item.user}</p>
                <p>{item.content}</p>
                <div className="grey-text notification-date">
                  {moment(item.time.toDate()).calendar()}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
)

Notifications.defaultProps = {
  notifications: [],
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape()),
}

export default Notifications
