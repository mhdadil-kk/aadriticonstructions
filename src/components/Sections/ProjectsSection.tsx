import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import SectionHeader from '../UI/SectionHeader';

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SHEET_URL);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: 'rgb(33 33 33)' }}>
      <div className="container mx-auto px-5">
        <SectionHeader 
          title="Our Projects" 
          description="Explore our portfolio of innovative construction projects that are redefining excellence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.ID}
              className="relative overflow-hidden h-80 rounded-lg bg-gray-800 shadow-md transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project['Image URL']})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-300 group-hover:pb-8">
                <div className="inline-block px-3 py-1 text-xs font-medium text-white bg-red-600 rounded-full mb-3">
                  {project.Completion}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.Title}</h3>
                <p className="text-sm text-gray-300 mb-3">@ {project.Location}</p>
                <Link 
                  to={`/projects/${project.ID}`}
                  className="inline-flex items-center text-white hover:text-red-500 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
