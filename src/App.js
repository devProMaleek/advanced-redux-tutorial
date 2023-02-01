import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, useCallback, useState } from 'react';
import { sendCartData, fetchCartData } from './store/features/actions/cartAction';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const uiState = useSelector((state) => state.ui);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notificationState = useSelector((state) => state.ui.notification);

  // const sendCartData = useCallback(
  //   async (data) => {
  //     try {
  //       dispatch(showNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }));
  //       const response = await fetch('https://react-https-request-5cc4f-default-rtdb.firebaseio.com/cart.json', {
  //         method: 'PUT',
  //         body: JSON.stringify(data),
  //       });

  //       if (!response.ok) {
  //         throw new Error('Sending cart data failed.');
  //       }
  //       dispatch(showNotification({ status: 'success', title: 'Success!', message: 'Sent Cart Successfully!' }));
  //     } catch (error) {
  //       dispatch(showNotification({ status: 'error', title: 'Error!', message: 'Sending cart data failed!' }));
  //     } finally {
  //       setTimeout(() => {
  //         dispatch(showNotification(null));
  //       }, 2000);
  //     }
  //   },
  //   []
  // );

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendCartData(cartState);
  // }, [cartState, sendCartData, isInitial]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    
    if (cartState.changed) {
      dispatch(sendCartData(cartState));
    }
  }, [cartState]);

  return (
    <>
      {notificationState && (
        <Notification
          status={notificationState.status}
          title={notificationState.title}
          message={notificationState.message}
        />
      )}
      <Layout>
        {uiState.isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
