import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellSreenStore } from "../store/store";

export default function Summary() {
  const dispatch = useDispatch();
  const saleState = useSelector((state: SellSreenStore) => state.sale)

  useEffect(() => {
    return () => {
      dispatch({ type: 'CLEAR_SALE' })
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Summary</h1>
      
    </div>
  );
}