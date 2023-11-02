import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import LinkedinLogo from '../../Images/linkedin.svg';
import GitHubLogo from '../../Images/github.svg';

function SearchBar() {
    const urlLinkedin = 'https://www.linkedin.com/in/brunodemedeiros95/';
    const urlGitHub = 'https://github.com/brunomedeirosluz';

    const navigate = useNavigate();


    return (
     <nav className="search-bar">
        <div>
          <p className="my-name" onClick={ () => navigate("/")}>Dev. Bruno Medeiros </p>
        </div>
        <div className="nav-bar">
          <p onClick={() => navigate("/")}>Página inicial</p>
          <p onClick={ () => navigate("/about")}>Sobre</p>
          <p onClick={() => navigate("/projects")}>Projetos</p>
          <p onClick={() => navigate("/contact")}>Contatos</p>
        </div>
        <div className="logos">
        <a 
          href={urlLinkedin} 
          target="_blank" 
          rel="noopener noreferrer">
        <img src={LinkedinLogo} alt="Logo do LinkedIn" />
        </a>
        <a 
          href={urlGitHub} 
          target="_blank" 
          rel="noopener noreferrer">
        <img src={GitHubLogo} alt="Logo do GitHub" />
        </a>
       </div>
    </nav>
  ) 
}

export default SearchBar