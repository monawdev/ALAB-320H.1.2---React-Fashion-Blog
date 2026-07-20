import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import image1 from "./assets/blog-image-1.jpg";
import image2 from "./assets/blog-image-2.jpg";

function App() {
  return (
    <>
      <Header />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={image1}
        />

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image={image2}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;