import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  status: string;
}

// Skeleton Card Component
const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md animate-pulse font-poppins">
      <div className="w-full aspect-[4/3] bg-gray-900 shimmer-bg bg-shimmer-size animate-shimmer"></div>
      <div className="p-4 flex flex-col justify-between min-h-[160px]">
        <div>
          <div className="h-6 w-3/4 bg-gray-900 shimmer-bg bg-shimmer-size animate-shimmer rounded mb-2"></div>
          <div className="h-3 w-full bg-gray-900 shimmer-bg bg-shimmer-size animate-shimmer rounded mb-1"></div>
          <div className="h-3 w-5/6 bg-gray-900 shimmer-bg bg-shimmer-size animate-shimmer rounded"></div>
        </div>
        <div className="mt-3 h-8 w-28 bg-gray-900 shimmer-bg bg-shimmer-size animate-shimmer rounded-full"></div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_SHEET_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(apiUrl);
        const cleanedProjects: Project[] = response.data.map((project: any) => ({
          id: project.ID,
          title: project.Title?.trim() || 'No Title',
          description: project.Description?.trim() || 'No Description available.',
          location: project.Location?.trim() || 'Unknown location',
          imageUrl: project['Image URL']?.trim() || 'https://via.placeholder.com/1200x800?text=No+Image',
          status: project.Completion?.trim().toLowerCase() || 'unknown',
        }));
        setProjects(cleanedProjects);
        setIsVisible(true);
      } catch (error) {
        console.error('Error fetching projects data:', error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = statusFilter === 'all'
    ? projects
    : projects.filter((p) => p.status.toLowerCase().includes(statusFilter.toLowerCase()));

  if (error) {
    return <div className="text-center text-red-600 py-20 text-base font-poppins">{error}</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-52 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white border-b-4 border-red-600 inline-block pb-2 tracking-tight animate-fadeIn">
          Our Projects
        </h1>
      </div>

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {['all', 'ongoing', 'completed', 'upcoming'].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              statusFilter === status
                ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-glow ring-2 ring-red-500'
                : 'bg-gray-800/90 backdrop-blur-sm text-gray-200 hover:bg-gray-700 hover:shadow-glow'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-glow ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-contain bg-gray-900 transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Image+Unavailable';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4 flex flex-col justify-between min-h-[160px]">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">{project.title}</h3>
                    <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                    <p className="text-xs text-gray-400">{project.location}</p>
                    {project.status.includes('completed') && (
                      <p className="text-xs text-gray-500 mt-2">Status: Completed</p>
                    )}
                  </div>
                  {project.status.includes('ongoing') && (
                    <Link to={`/projects/${project.id}`}>
                      <button className="mt-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-glow">
                        View Details
                      </button>
                    </Link>
                  )}
                  {project.status.includes('completed') && (
                    <button className="mt-3 bg-gray-600 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-glow">
                      Sold Out
                    </button>
                  )}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
