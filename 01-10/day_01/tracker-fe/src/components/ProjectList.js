import React, { useState, useEffect } from "react";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const projects = await fetch("http://localhost:9000/projects");
      const parsedProjects = await projects.json();
      setProjects(parsedProjects);
      console.log(parsedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  const projectsRow = projects.map((project) => (
    <tr key={project._id}>
      <td>{project.day}</td>
      <td>{project.title}</td>
      <td>{project.github}</td>
      <td>{project.app}</td>
    </tr>
  ));

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Project</th>
            <th>Link to GitHub</th>
            <th>Link to Deployed App</th>
          </tr>
        </thead>
        <tbody>{projectsRow}</tbody>
      </table>
    </>
  );
};

export default ProjectList;
