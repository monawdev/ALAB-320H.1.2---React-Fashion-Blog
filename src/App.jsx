import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Article />
        <Article />
      </main>

      <Footer />
    </>
  );
}

export default App;