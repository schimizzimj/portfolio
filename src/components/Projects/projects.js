import React from "react"
import projectList from "../../data/projects.json"

import "./projects.scss"

const Projects = () => (
  <section id="projects" className="section projects">
    <h1 className="sectionTitle pt-3">Projects</h1>
    <div className="cardDeck">
      {projectList.map(project => {
        return (
          <a className="projectLink" href={project.link}>
            <div className="card">
              <img
                className="cardImage"
                variant="top"
                alt={project.title}
                src={project.image}
              />
              <div className="cardBody">
                <div className="cardTitle">{project.title}</div>
                <div>{project.text}</div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  </section>
)

export default Projects
