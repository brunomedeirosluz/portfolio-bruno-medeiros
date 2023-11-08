import SearchBar from "./SearchBar/SearchBar";
import Sobre from "./Sobre/Sobre";
import Stacks from "./Stacks/Stacks";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import "./Main.css";

function Main() {
    return (
        <div>
            <SearchBar />
            <Sobre />
            <Stacks />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main;