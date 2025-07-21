import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => <ToastContainer
    position="top-center"
    autoClose={3000} // ⏱️ Toast will auto close in 3 seconds
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    pauseOnHover
    draggable
    pauseOnFocusLoss
  />;

export const showErrorToast = (msg) => toast.error(msg);
export const showSuccessToast = (msg) => toast.success(msg);

export default Toastify;
