import { create } from "zustand";

interface ModalState {
  modal: boolean;
  toggleModal: () => void;
}
const useModalStore = create<ModalState>((set) => ({
  modal: false,
  toggleModal: () => {
    set((state) => ({ modal: !state.modal }));
  },
}));

export default useModalStore;
