import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { clearCartItems } from '../../store/features/slices/cartSlice';

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              description: item.description,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      {cartState.totalQuantity > 0 && (
        <div className="" style={{ display: 'flex', justifyContent: 'end' }}>
          <div className="">
            <button className="btn" style={{ marginRight: '5px' }} onClick={() => dispatch(clearCartItems())}>
              Clear Cart
            </button>
            <button className="btn" style={{ marginLeft: '5px' }}>
              Order Now
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Cart;
