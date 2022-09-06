import "./App.css";
import { Header, SloganContainer, FeatureSteps, FreeProduct } from "./components/component-exporter";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__container">
      <section className="main__section">
        <SloganContainer />
      </section>
      <FeatureSteps/>
      <FreeProduct/>
      </div>
    </div>
  );
}

export default App;
