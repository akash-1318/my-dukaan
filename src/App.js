import "./App.css";
import { Header, SloganContainer, FeatureSteps, FreeProduct, Footer } from "./components/component-exporter";

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
      <Footer/>
    </div>
  );
}

export default App;
