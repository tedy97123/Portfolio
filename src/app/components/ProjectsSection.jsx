"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
 
const projectsData = [
  {
    id: 1,
    title: "React Gym Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/gymapp/gymapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tedy97123/React/tree/main/gymapp",
    previewUrl: "https://aesthetic-liger-9203e9.netlify.app/",
  },
  {
    id: 2,
    title: "React Portfolio Application",
    description: "Project 3 description",
    image: "images/projects/portfolio/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tedy97123/React/tree/main/Portfolio_Website",
    previewUrl: "https://652f05a59aea69076180539b--whimsical-taiyaki-a8c844.netlify.app/",
  },
  {
    id: 3,
    title: "Mobile Crypto Application",
    description: "Project 4 description",
    image: "images/projects/madeTheTrade/mte.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tedy97123/MadeTheTrade",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React TS Finacnial DashBoard",
    description: "Financial Dashboard with ML regressions",
    image: "/images/projects/finDash/fdash.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tedy97123/finance-app",
    previewUrl: "https://stellular-torte-3a769e.netlify.app/",
  },
  {
    id: 5,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            
          </motion.li>
        ))}
       
      </ul>
    </section>
  );
};

export default ProjectsSection;
