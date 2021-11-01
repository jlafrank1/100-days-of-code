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

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <header>
      <h2>list!</h2>
    </header>
  );
};

export default ProjectList;
