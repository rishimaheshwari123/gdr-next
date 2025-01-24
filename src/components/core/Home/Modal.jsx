const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg h-screen w-screen">
        <div className="text-center">
          <video
            src="/video.mp4"
            muted
            autoPlay
            className="rounded-md w-full"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;
