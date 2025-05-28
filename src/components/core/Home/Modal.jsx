import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg h-scree w-screen">
        {/* <button className="absolute top-1 right-4 text-black" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button> */}
        <div className="text-center">
          <video src="/video.mp4" muted autoPlay className="rounded-md w-full">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;
