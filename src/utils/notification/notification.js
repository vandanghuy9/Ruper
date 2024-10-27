import { toast } from "react-toastify";
let toastId = 0;
export const successNoti = (message) => {
  return toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const errorNoti = (message) => {
  return toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const loadingNoti = (message) => {
  toastId = toast.loading(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const stopLoadingNoti = (message) => {
  toast.update(toastId, { render: message, type: "success", isLoading: false });
};
