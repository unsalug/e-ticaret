import { CardProductProps } from "../detail/DetailClient";

interface CounterProps{
    cardProduct : CardProductProps,
    increaseFunc : () => void;
    decreaseFunc : () => void;

}

const Counter:React.FC<CounterProps> = ({cardProduct, increaseFunc, decreaseFunc}) => {
  return (
    <div className="flex items-center gap-2">
        <div className="w-8 h-9 border flex items-center justify-center text-lg rounded-md" onClick={decreaseFunc}>-</div>
        <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
        <div className="w-8 h-9 border flex items-center justify-center text-lg rounded-md" onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter