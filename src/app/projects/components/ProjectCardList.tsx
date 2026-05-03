'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 8);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center pb-8'>
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: '/saloon-5.png',
    title: "Triveda Mayurveda",
    description: "Full-stack e-commerce platform built for a client in the Ayurveda space. Features product listings, cart, checkout, and order management with a clean user experience.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://www.trivedamayurveda.com/",
    source: "https://github.com/prathambhatia/Ayurveda-tier1",
  },
  {
    logo: '/book-1.png',
    title: "Tech Updates",
    description: "Keeping up with fast-paced tech and AI advancements is hard. Built a platform that aggregates blogs, articles, and updates from all major sources and surfaces them in one place.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://tech-updates-phi.vercel.app/",
    source: "#",
  },
  {
    logo: '/token-2.png',
    title: "strapi-component-preview",
    description: "An npm plugin for Strapi 5 that adds a preview screenshot field to any component and shows all component previews as a side panel in the edit view — helping teams visually manage their content.",
    techStack: ["TypeScript", "Strapi 5", "Node.js"],
    link: "https://www.npmjs.com/package/strapi-component-preview",
    source: "https://github.com/prathambhatia/strapi-component-preview",
  },
];
