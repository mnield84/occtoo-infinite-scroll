import { Header } from "./components/Header/Header";
import { InfiniteScroll } from "./components/InfiniteScroll/InfiniteScroll";

function App() {
  return (
    <>
      <Header />
      <InfiniteScroll
        api="https://jsonplaceholder.typicode.com/todos"
        limit={10}
        page={1}
      />
    </>
  );
}

export default App;
