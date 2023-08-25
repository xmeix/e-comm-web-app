import { useState, useEffect } from "react";
import "./Toast.css";

const useToast = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
      const errorTimer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      const successTimer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      return () => {
        clearTimeout(errorTimer);
        clearTimeout(successTimer);
      };
    }, [errorMessage, successMessage]);

  const showErrorToast = (error) => {
    setErrorMessage(error);
  };

  const showSuccessToast = (success) => {
    setSuccessMessage(success);
  };

  const Toast = () => {
    return (
      <>
        {errorMessage && (
          <div className="toast-error">{errorMessage || "Error!"}</div>
        )}
        {successMessage && (
          <div className="toast-success">{successMessage || "Success!"}</div>
        )}
      </>
    );
  };
  return { Toast, showErrorToast, showSuccessToast };
};

export default useToast;
