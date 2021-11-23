import { useDispatch } from "react-redux";
import { sumNumber, subNumber } from "../../store/modules/result/action";

const Counter = () => {
  const dispatch = useDispatch();

  const handleClickSum = () => {
    dispatch(sumNumber(1));
  };

  const handleClickSub = () => {
    dispatch(subNumber(1));
  };

  return (
    <div>
      <button onClick={handleClickSub}>-</button>
      <button onClick={handleClickSum}>+</button>
    </div>
  );
};

export default Counter;
