import ProductList from "./components/pages/ProductList";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨.`);
  return (
    <div className="App">
      <ProductList className="container mx-auto" />
    </div>
  );
}

export default App;
