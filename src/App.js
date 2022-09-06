import "./App.css";
import { Header, SloganContainer } from "./components/component-exporter";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main__section">
        <SloganContainer />
      </section>
    </div>
  );
}

export default App;
