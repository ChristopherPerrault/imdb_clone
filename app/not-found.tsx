"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: string;
  reset: () => void;
}

//TODO: fix "reset is not a function" bug that appears when clicking Try Again button. Possible solution is that any parent component that's trying to render Error should be triggering the reset. useState maybe?

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-10 text-center">
      <h1>Something went wrong</h1>
      <button className="hover:text-blue-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
