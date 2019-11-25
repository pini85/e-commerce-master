import React from "react";
import { connect } from "react-redux";
import FadeTransition from "../../transitions/fadeTransition";
import {
  HeaderContainer,
  LogoContainer,
  LogoStyles,
  OptionContainer,
  Option,
  OptionText,
  CartStyles
} from "./header.styles";
import "../../components/header/header.styles.scss";
import Cart from "../cart/cart.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoStyles>
        <Logo title="logo"></Logo>
      </LogoStyles>
    </LogoContainer>
    <OptionContainer>
      <Option>
        <OptionText to="/shop">Shop</OptionText>
      </Option>
      <Option>
        <OptionText to="/categories">Categories</OptionText>
      </Option>
      {/* <Option>
        <OptionText to="/shop">Contact</OptionText>
      </Option> */}
      <Option>
        {currentUser ? (
          <OptionText onClick={() => auth.signOut()}>Sign out</OptionText>
        ) : (
          <OptionText to="/signin">Sign in</OptionText>
        )}
      </Option>
      <CartStyles>
        <Cart></Cart>
      </CartStyles>
    </OptionContainer>

    <FadeTransition isOpen={!hidden} duration={500}>
      {!hidden ? <CartDropDown /> : null}
    </FadeTransition>
  </HeaderContainer>
);

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),

  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);

// export default Header;
