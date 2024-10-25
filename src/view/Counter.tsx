// zustand store
import useCounterStore from "../store/useCounterStore";
// component
import { Divider, Frame, Title } from "../components/Frame";

export const Counter: React.FC = () => {
  const { count, increase, decrease, reset, setToValue, errMsg, setErrMsg } = useCounterStore();

  const handlerSetToValue = () => {
    const value = prompt("enter value to set");
    const parsedValue = parseInt(value ?? "", 10);
    if (!isNaN(parsedValue)) {
      setToValue(parsedValue);
    } else {
      setErrMsg("CHECK YOUR INPUT, IT MUST BE NUMBER!");
    }
  };

  return (
    <>
      <Frame>
        <Title text="Counter" />
        <Divider />
        <p>COUNTER: {count}</p>
        <p className="text-xs text-red-500">{errMsg}</p>
        <Divider />

        <div className="flex justify-center items-center gap-[4px]">
          <button
            className="px-[20px] py-[4px]"
            onClick={() => {
              increase();
            }}
          >
            INCREASE
          </button>
          <button
            className="px-[20px] py-[4px]"
            onClick={() => {
              decrease();
            }}
          >
            DECREASE
          </button>
          <button
            className="px-[20px] py-[4px]"
            onClick={() => {
              reset();
            }}
          >
            RESET
          </button>
          <button
            className="px-[20px] py-[4px]"
            onClick={() => {
              handlerSetToValue();
            }}
          >
            SET
          </button>
        </div>
      </Frame>
    </>
  );
};
