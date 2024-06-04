import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // 컴포넌트 안에서 side-effect 로직 및 비동기 로직을 처리하기 e.g. useEffect( )
  // useEffect(() => {
  //   fetch("https://react-test-5cf3a-default-rtdb.firebaseio.com/cart.json", {
  //     method: "PUT",
  //     body: JSON.stringify(cart),
  //   });
  // }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
