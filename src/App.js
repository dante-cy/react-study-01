import FormRef from "./components/pages/FormRef";
import ProductList from "./components/pages/ProductList";
import RecordedCount from "./components/pages/RecodedCount";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨.`);
  return (
    <div className="App">
      {/* <ProductList className="container mx-auto" /> */}
      <RecordedCount />
      {/* <FormRef /> */}
    </div>
  );
}

export default App;
