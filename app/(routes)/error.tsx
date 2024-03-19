"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: string;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-10 text-center">
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
