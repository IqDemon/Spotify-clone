import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {
  children: React.ReactNode;
}

const ToasterProvider: React.FC<ToasterProviderProps> = ({ children }) => {
  return (
    <>
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
      />
      {children}
      </>

  );
};

export default ToasterProvider;