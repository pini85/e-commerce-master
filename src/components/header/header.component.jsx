import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../components/header/header.styles.scss";
import Cart from "../cart/cart.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="header__logo-wrapper">
      <Logo title="logo" className="header__logo"></Logo>
    </Link>
    <div className="header__options">
      <div className="header__option">
        <Link className="header__option-text" to="/shop">
          Shop
        </Link>
      </div>
      <div className="header__option">
        <Link className="header__option-text" to="/categories">
          Categories
        </Link>
      </div>
      <div className="header__option">
        <Link className="header__option-text" to="/shop">
          Contact
        </Link>
      </div>
      <div className="header__option">
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="header__option-text">
            Sign out
          </div>
        ) : (
          <Link className="header__option-text" to="/signin">
            Sign in
          </Link>
        )}
      </div>
      <div className="header__option-cart">
        <Cart></Cart>
      </div>
    </div>
    {!hidden ? <CartDropDown /> : null}
  </div>
);

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),

  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);

// export default Header;
