import "./App.css";
import { Header, SloganContainer, FeatureSteps } from "./components/component-exporter";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__container">
      <section className="main__section">
        <SloganContainer />
      </section>
      <FeatureSteps/>
      </div>
    </div>
  );
}

export default App;
