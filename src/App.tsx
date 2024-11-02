import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { Counter } from "./components/Counter/Counter";
import "./App.scss";
import { List } from "./components/List/List";

function App() {
  const [count, setCount] = useState<number | null>(1);
  return (
    <>
      <Header title="Hello" />
      <Section>
        <p>This is a section made with tsx</p>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Item One", "Item Two", "Item Three"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
