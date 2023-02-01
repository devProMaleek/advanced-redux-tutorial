import { showNotification } from '../slices/UISlice';
import { replaceCart } from '../slices/cartSlice';

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    try {
      dispatch(showNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }));
      const response = await fetch('https://react-https-request-5cc4f-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cartData),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
      dispatch(showNotification({ status: 'success', title: 'Success!', message: 'Sent Cart Successfully!' }));
    } catch (error) {
      dispatch(showNotification({ status: 'error', title: 'Error!', message: 'Sending cart data failed!' }));
    } finally {
      setTimeout(() => {
        dispatch(showNotification(null));
      }, 2000);
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      dispatch(showNotification({ status: 'pending', title: 'Fetching...', message: 'Fetching cart data!' }));
      const response = await fetch('https://react-https-request-5cc4f-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }
      const data = await response.json();
      dispatch(showNotification({ status: 'success', title: 'Success!', message: 'Fetched Cart Successfully!' }));
      dispatch(replaceCart({
        items: data.items || [],
        totalQuantity: data.totalQuantity,
      }));
    } catch (error) {
      dispatch(showNotification({ status: 'error', title: 'Error!', message: 'Fetching cart data failed!' }));
    } finally {
      setTimeout(() => {
        dispatch(showNotification(null));
      }, 2000);
    }
  };
};
