import { items } from "./api/getItems";
import { List } from "./components/List";

function App() {
  return (
    <>
      <List items={items} />
    </>
  );
}

export default App;
