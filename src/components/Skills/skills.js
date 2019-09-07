import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./skills.scss"
import skillsList from "../../data/skills.json"

export default class Skills extends React.Component {
  createStars = numStars => {
    let stars = []
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={["fas", "star"]}
          id="star"
          style={{ color: "orange" }}
        />
      )
    }
    for (let i = 5 - numStars; i > 0; i--) {
      stars.push(
        <FontAwesomeIcon
          icon={["far", "star"]}
          id="star"
          style={{ color: "orange" }}
        />
      )
    }

    return <div className="stars">{stars}</div>
  }

  render() {
    return (
      <section id="skills" className="section skills">
        <h1 className="sectionTitle">Skills</h1>
        <div className="skillList">
          {skillsList.map(skill => {
            return (
              <div
                className="singleSkill"
                id={"skill--" + skill.name}
                key={"skill--" + skill.name}
              >
                <h3> {skill.name} </h3>
                {this.createStars(skill.level)}
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
