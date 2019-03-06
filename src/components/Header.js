import { Link } from 'react-router-dom';
import React from 'react';

const Header = (props) => (
  <header className="main-header">
    <nav>
      <Link to="/" className="header-logo">CHEERS!</Link>
      <Link to='/beers' className="header-link">Top Beers</Link>
    </nav>
    <div className="header-right">
      <ul className="user-header">
        <li>
          <ul className="user-options">
            <li><Link to={`/users/${props.id}`}>Profile</Link></li>
            <li><Link to={`/users/${props.id}/edit`}>Edit Profile</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
);


const mapStateToProps = (state) => {
  return {
    username: state.session.username,
    userImg: state.session.userImg,
    id: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //logout: () => dispatch(logout())
  };
};

export default Header;
