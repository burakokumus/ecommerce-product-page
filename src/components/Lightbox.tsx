import React from "react";

export interface LightboxProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const Lightbox = ({ children, handleClose }: LightboxProps) => {
  return (
    <div className="fixed z-10 overflow-hidden inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75">
      <div className="flex flex-col items-end">
        <button onClick={handleClose} className="mb-4">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
          <span className="sr-only">close lightbox</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Lightbox;
