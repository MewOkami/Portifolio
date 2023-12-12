import { Reset } from "./styles/Reset";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/index";
import { About } from "./components/About/index";
import { Tools } from "./components/Tools";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />

      <Header />
      <About />
      <Tools />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
