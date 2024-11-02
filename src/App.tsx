import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { Counter } from "./components/Counter/Counter";
import { List } from "./components/List/List";
import "./App.scss";

// interface User {
//   id: number,
//   email: string,
// }

function App() {
  const [count, setCount] = useState(1);
  // const [user, setUser] = useState<User | null>(null);
  // const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("TypeScript is React");
  }, []);

  const plusOne = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  return (
    <>
      <Header title="Hello" />
      <Section>
        <p>This is a section made with tsx</p>
      </Section>
      <Counter setCount={setCount}>
        Count is {count}
        <button onClick={plusOne}>+</button>
      </Counter>
      <List
        items={["Item One", "Item Two", "Item Three"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
