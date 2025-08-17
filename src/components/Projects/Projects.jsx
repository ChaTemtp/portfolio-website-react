// src/components/Projects/Projects.jsx
import './Projects.css';
import ProjectCard from './ProjectCard';
import Store from '../../assets/images/Store.png';
import Port from '../../assets/images/Port.png';
import Weather from '../../assets/images/Weather.png';

function Projects() {
  const projectList = [
    {
      title: 'Store Apps',
      description: 'This made from react and css so you can see them in Live Demo.',
      image: Store,
      demo: 'https://chatemtp.github.io/mini-ecommerce-collaboration/',
      code: 'https://github.com/ChaTemtp/mini-ecommerce-collaboration',
    },
    {
      title: 'Weather App',
      description: 'You can check weather every where you want.',
      image: Weather,
      demo: 'https://chatemtp.github.io/my-weather-app/',
      code: 'https://github.com/ChaTemtp/my-weather-app',
    },
    {
      title: 'Portfolio Website',
      description: 'My portfolio website.',
      image: Port,
      demo: 'https://chatemtp.github.io/portfolio-website/',
      code: 'https://github.com/ChaTemtp/portfolio-website',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
