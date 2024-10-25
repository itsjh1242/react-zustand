import { create } from "zustand";

interface CounterState {
  count: number;
  errMsg: string;
  setErrMsg: (msg: string) => void;
  resetErrMsg: () => void;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  setToValue: (value: number) => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  errMsg: "",
  setErrMsg: (msg: string) => set(() => ({ errMsg: msg })),
  resetErrMsg: () => set(() => ({ errMsg: "" })), // 여기서 set() 사용

  increase: () => {
    set((state) => ({ count: state.count + 1 }));
    useCounterStore.getState().resetErrMsg(); // 상태 업데이트 후 resetErrMsg 호출
  },
  decrease: () => {
    set((state) => ({ count: state.count - 1 }));
    useCounterStore.getState().resetErrMsg(); // 상태 업데이트 후 resetErrMsg 호출
  },
  reset: () => set(() => ({ count: 0 })),
  setToValue: (value: number) => set(() => ({ count: value })),
}));

export default useCounterStore;
