import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearSingleCartItems } from '../../store/features/slices/cartSlice';

const CartItem = (props) => {
  const { id, title, quantity, total, price, description } = props.item;
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);

  const newItem = { title, price, description, id: id, quantity: 1, totalPrice: price };

  return (
    <li className={classes.item} style={{ position: 'relative' }}>
      <button
        className=""
        onClick={() => dispatch(clearSingleCartItems(id))}
        style={{ position: 'absolute', right: '0px', top: '0px', padding: '1px 10px' }}
        type="button"
      >
        X
      </button>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(removeItemFromCart(id))}>-</button>
          <button onClick={() => dispatch(addItemToCart(newItem))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
