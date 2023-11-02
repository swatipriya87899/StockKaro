import React from 'react';
import './Leftbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMoneyCheckDollar, faPeopleRoof, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Leftbar = () => {


  const leftMenu = [
    {
      menu: 'Dashboard',
      icon: faChartLine,
      to: '/'
    },
    {
      menu: 'Markets',
      icon: faPeopleRoof,
      to: '/markets'
    },
    {
      menu: 'Transaction',
      icon: faMoneyCheckDollar,
      to: '/transaction'
    },
    {
      menu: 'Profile',
      icon: faUser,
      to: '/profile'
    },
    {
      menu: 'Settings',
      icon: faGear,
      to: '/settings'
    }
  ]
  return (
    <div className='leftbar'>

      <div className='header'>
        StocKaro
      </div>

      {/* Menu */}
      {
        leftMenu.map((menu) =>
          <Link key={menu.to} to={menu.to} className='leftMenu'>
              <FontAwesomeIcon icon={menu.icon} />
              <div>{menu.menu}</div>
          </Link>
        )
      }
    </div >
  )
}

export default Leftbar