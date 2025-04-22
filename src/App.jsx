import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProjectCard from "./components/projects";
import SocialButton from "./components/socialbutton";
import ContactForm from "./components/contactform";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    let newTheme = "light";
    if (theme === "light") {
      newTheme = "dark";
    }

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const projectList = [
    {
      title: "To do App",
      description: "A simple to do list with CRUD functionality.",
      link: "https://github.com/",
    },
    {
      title: "Nada Nusantara",
      description: "A simple to do list with CRUD functionality.",
      link: "https://github.com/",
    },
    {
      title: "Library",
      description: "A simple to do list with CRUD functionality.",
      link: "https://github.com/",
    },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
        <nav className="flex justify-center gap-4 mb-6">
          <Link className="btn btn-sm btn-outline" to="/">
            Home
          </Link>
          <Link className="btn btn-sm btn-outline" to="/projects">
            Projects
          </Link>
          <Link className="btn btn-sm btn-outline" to="/contact">
            Contact
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center gap-6">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/121929122?v=4"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Abi Arrasyid</h1>
                  <p className="text-sm max-w-xs">
                    Frontend Developer | React JS, Next JS
                  </p>
                </div>
                <div className="flex flex-col w-full max-w-xs gap-3">
                  <SocialButton
                    platform="GitHub"
                    url="https://github.com/biirsy"
                    buttonColor={"primary"}
                  />
                  <SocialButton
                    platform="Linkedin"
                    url="https://linkedin.com/in/abiarrasyid"
                    buttonColor={"secondary"}
                  />
                  <SocialButton
                    platform="Instagram"
                    url="https://instagram.com/biirsy"
                    buttonColor={"accent"}
                  />
                </div>
              </div>
            }
          />

          <Route
            path="/projects"
            element={
              <div className="grid gap-4 w-full max-w-md mx-auto ">
                {projectList.map((item) => {
                  return (
                    <ProjectCard
                      title={item.title}
                      description={item.description}
                      link={item.link}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <button onClick={toggleTheme} className="btn btn-outline mt-4">
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </Router>
  );
}

export default App;
