import { ScaleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ScaleLoader color="#3B82F6" size={30} />
    </div>
  );
};

export default Spinner;
