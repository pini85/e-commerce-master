import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./cart.styles.scss";
import {
  selectCartItemsCount,
  selectCartHidden
} from "../../redux/cart/cart.selectors";
import icon from "../../assets/svg/cart.svg";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      animation: false
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.quantity !== prevProps.quantity) {
      this.setState({ animation: true });
      setTimeout(() => {
        this.setState({ animation: false });
      }, 500);
    }
  }

  render() {
    const { toggleCartHidden, hidden, quantity } = this.props;
    const iconAnimation = () => {
      if (!hidden) {
        return "icon-count-animate";
      } else if (this.state.animation) {
        return "icon-count-animate-notice";
      }
      return "";
    };
    return (
      <div
        onClick={toggleCartHidden}
        className={
          this.state.animation ? "icon-container animate" : "icon-container"
        }
      >
        <img className="icon-container" src={icon} alt="" />
        <span className={`icon-count ${iconAnimation()}`}>{quantity}</span>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  hidden: selectCartHidden(state),
  quantity: selectCartItemsCount(state)
  // cart.cartItems.reduce(
  //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
  //   0
  // we made this as a memoize)
});
const mapStateToDispatch = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapStateToDispatch)(Cart);
