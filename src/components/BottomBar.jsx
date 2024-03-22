import Buttons from "../atoms/Buttons";
import { MdUndo } from "react-icons/md";
import { IoMdRedo } from "react-icons/io";
import { MdOutlinePrint } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const BottomBar = ({
  isOpen,
  step,
  prevStep,
  nextStep,
  openSidebar,
  printPage,
}) => {
  return (
    <div className="fixed grid grid-cols-4 gap-4 bottom-[10px] bg-white border-2 p-2 rounded-3xl border-gray-200 max-sm:w-[90%] left-1/2 -translate-x-1/2  z-30">
      <Buttons disabled={step === 0 ? true : false} handleClick={prevStep}>
        <div className="flex justify-center text-xl">
          <MdUndo />
        </div>
        Prev
      </Buttons>
      <Buttons disabled={11 === step + 1 ? true : false} handleClick={nextStep}>
        <div className="flex justify-center text-xl">
          <IoMdRedo />
        </div>
        Next
      </Buttons>
      <Buttons handleClick={openSidebar}>
        <div className="flex justify-center text-xl">
          <MdOutlineRemoveRedEye />
        </div>
        <span className="max-sm:hidden">{isOpen ? "Open" : "Close"}</span>
        <span className="md:hidden">{isOpen ? "Close" : "Preview"}</span>
      </Buttons>
      <Buttons handleClick={printPage}>
        <div className="flex justify-center text-xl">
          <MdOutlinePrint />
        </div>
        Print
      </Buttons>
    </div>
  );
};

export default BottomBar;
