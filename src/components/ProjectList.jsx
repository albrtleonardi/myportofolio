import React from "react";
import ProjectCard from "./ProjectCard";
import WorldUniversity from "../assets/img/world-university.png";
import Pathera from "../assets/img/pathera.png";
import StreamVerse from "../assets/img/streamverse.png";

const myProjects = [
  {
    id: 1,
    title: "World University",
    type: "Website",
    imageUrl: WorldUniversity,
  },
  {
    id: 2,
    title: "Pathera",
    type: "Website",
    imageUrl: Pathera,
  },
  {
    id: 3,
    title: "Streamverse",
    type: "Website",
    imageUrl: StreamVerse,
  },
  {
    id: 4,
    title: "Kerja Setara",
    type: "Coming Soon",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZSUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA",
  },
];

const ProjectList = ({ isDarkMode }) => {
  return (
    <div className="pt-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {myProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            type={project.type}
            imageUrl={project.imageUrl}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
