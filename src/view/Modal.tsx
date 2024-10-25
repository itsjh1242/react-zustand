import { Frame, Divider, Title } from "../components/Frame";
// zustand store
import useModalStore from "../store/useModalStore";

export const Modal: React.FC = () => {
  const { modal, toggleModal } = useModalStore();

  return (
    <Frame className="relative">
      {modal && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-[#232323]">
          <div className="w-2/5 h-1/4 flex flex-col justify-between bg-[#333333] rounded-md p-[24px]">
            <div>
              <p className="font-bold">Modal</p>
              <p className="mt-[12px] text-white">Hi, I'm modal</p>
            </div>
            <div className="w-full flex justify-end">
              <button className="p-2 bg-blue-500 text-white rounded mt-4" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
      <Title text="Modal" />
      <Divider />
      <p>Current Modal Open State: {modal ? "OPEN" : "CLOSE"}</p>
      <Divider />
      <button className="p-2 bg-green-500 text-white rounded" onClick={toggleModal}>
        {modal ? "CLOSE MODAL" : "OPEN MODAL"}
      </button>
    </Frame>
  );
};
