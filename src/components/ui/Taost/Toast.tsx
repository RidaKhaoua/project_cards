type TPrpos = {
  message: string;
  isOpen: boolean;
};

function Toast({ message, isOpen }: TPrpos) {
  return (
    <div
      className={`absolute duration-300 ${
        isOpen ? " opacity-100 left-5" : "opacity-0 left-0"
      } p-2 rounded bg-green-500 text-white`}>
      {message}
    </div>
  );
}

export default Toast;
