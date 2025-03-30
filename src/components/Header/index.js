import {IoCartOutline} from 'react-icons/io5'

import './style.css'

const Header = props => {
  const {restoName, ordersList} = props
  // console.log('ordersList in header', ordersList)

  return (
    <header className="header" data-testid="header">
      <h1 className="header-name">{restoName}</h1>
      <div className="header-right">
        <p className="header-right-para">My Orders</p>
        <IoCartOutline size={25} />
        <span className="header-orders-count">{ordersList?.length || 0}</span>
      </div>
    </header>
  )
}

export default Header
