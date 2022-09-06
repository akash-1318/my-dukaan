import "./App.css";
import {
  Header,
  SloganContainer,
  FeatureSteps,
  FreeProduct,
  Footer,
} from "./components/component-exporter";

function App() {
  return (
    <div className="App">
      <div className="main__container">
        <Header />
        <div className="main__sub-container">
          <section className="main__section">
            <SloganContainer />
          </section>
          <FeatureSteps />
          <FreeProduct />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
