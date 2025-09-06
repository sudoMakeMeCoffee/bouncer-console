import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NewAppForm from "../../components/dashboard/new-app/NewAppForm";

const NewApp = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-[#232328] w-full min-h-screen flex items-center justify-center">
      <div className="wrapper w-full max-w-[500px] flex flex-col gap-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white hover:text-gray-300 w-fit"
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>

        <NewAppForm/>
      </div>
    </div>
  );
};

export default NewApp;
