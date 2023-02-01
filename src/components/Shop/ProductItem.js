import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { addItemToCart, replaceCart } from '../../store/features/slices/cartSlice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const cartState = useSelector((state) => state.cart);

  const newItem = { title, price, description, id: id, quantity: 1, totalPrice: price };

  const addToCartHandler = () => {
    const newTotalQuantity = cartState.totalQuantity + 1;

    const updatedItems = cartState.items.slice();

    const existingItem = updatedItems.find((item) => item.id === id);

    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex((item) => item.id === id);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push(newItem);
    }

    const newCart = {
      items: updatedItems,
      totalQuantity: newTotalQuantity,
    };

    dispatch(replaceCart(newCart));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => dispatch(addItemToCart(newItem))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
