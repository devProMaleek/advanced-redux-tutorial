import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartVisibility } from '../../store/features/slices/UISlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const toggleCartHandler = () => {
    dispatch(toggleCartVisibility());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
