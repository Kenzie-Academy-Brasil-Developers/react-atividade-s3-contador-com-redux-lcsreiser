import "./styles.css";
import { useSelector } from "react-redux";

const Display = () => {
  const result = useSelector((store) => store.result);

  return (
    <div className={result < 0 && "red"} counter>
      Valor atual: {result}{" "}
    </div>
  );
};

export default Display;
