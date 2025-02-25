import { toast, Slide, Flip } from "react-toastify";

const toastSuccessOption = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: false,
  theme: "light",
  transition: Slide,
};

const toastErrorOption = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: false,
  them: "dark",
  transition: Flip,
};

export const successToast = (message) => {
  toast.success(message, toastSuccessOption);
};

export const errorToast = (message) => {
  toast.error(message, toastErrorOption);
};
