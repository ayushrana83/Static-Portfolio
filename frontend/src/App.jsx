import ContactForm from "./Components/ContactForm";
import FrontPage from "./Components/FrontPage";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return <div className="w-full min-h-screen">
    <Navbar/>
    <FrontPage/>
    <Skills/>
    <Projects/>
    <ContactForm/>
  </div>;
}

export default App;
