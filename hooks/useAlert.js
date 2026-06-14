import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = "success", timeout = 3000) => {
    setAlert({ message, type });

    if (timeout) {
      setTimeout(() => {
        setAlert(null);
      }, timeout);
    }
  };

  const clearAlert = () => {
    setAlert(null);
  };

  return {
    alert,
    showAlert,
    clearAlert,
  };
};

export default useAlert;
