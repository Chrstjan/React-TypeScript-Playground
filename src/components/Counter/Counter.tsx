import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

export const Counter = ({ children, setCount }: CounterProps) => {
  return (
    <>
      <h2>{children}</h2>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};
