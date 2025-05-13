import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  location: string;
  area: string;
  units: string;
  imageUrl: string;
  status: string;
  amenities: string[];
  floorplans?: string[];
  elevations?: string[];
  locationDetails: string;
  brochure: string;
}

const SkeletonDetails: React.FC = () => (
  <div className="animate-pulse font-poppins">
    <div className="h-8 w-3/4 bg-gray-800 rounded mb-8"></div>
    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      <div className="w-full lg:w-1/2 h-[400px] bg-gray-800 rounded"></div>
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="h-6 w-1/3 bg-gray-800 rounded"></div>
        <div className="h-4 w-full bg-gray-800 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
        <div className="h-4 w-4/6 bg-gray-800 rounded"></div>
        <div className="h-10 w-36 bg-gray-800 rounded-full mt-6"></div>
      </div>
    </div>
    <div className="h-6 w-1/4 bg-gray-800 rounded mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-28 bg-gray-800 rounded"></div>
      ))}
    </div>
  </div>
);

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const apiUrl = import.meta.env.VITE_SHEET_URL;

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoom(1);
  };

  const handleZoom = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
    } else {
      setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProjectDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(apiUrl);
        const projectData = response.data.find((p: any) => p.ID === id);

        if (!projectData) {
          setError('Project not found');
          setIsLoading(false);
          return;
        }

        const amenitiesArray = projectData.Amenities
          ? projectData.Amenities.split(/\s{2,}/).map((item: string) => item.trim()).filter(Boolean)
          : [];

        let floorplanImages: string[] = [];
        if (projectData.Floorplan) {
          try {
            floorplanImages = typeof projectData.Floorplan === 'string'
              ? JSON.parse(projectData.Floorplan)
              : [];
          } catch (err) {
            console.warn("Invalid JSON for Floorplan:", projectData.Floorplan);
          }
        }

        let elevationsImages: string[] = [];
        if (projectData.Elevations) {
          try {
            elevationsImages = typeof projectData.Elevations === 'string'
              ? JSON.parse(projectData.Elevations)
              : [];
          } catch (err) {
            console.warn("Invalid JSON for Elevations:", projectData.Elevations);
          }
        }

        setProject({
          id: projectData.ID,
          title: projectData.Title?.trim() || 'No Title',
          description: projectData.Description?.trim() || 'No Description available.',
          overview: projectData.Overview || '',
          location: projectData.Location?.trim() || 'Unknown location',
          area: projectData.Area?.trim() || 'Unknown',
          units: projectData.Units?.trim() || 'Unknown',
          imageUrl: projectData['Image URL']?.trim() || 'https://via.placeholder.com/1200x800?text=No+Image',
          status: projectData.Completion?.trim().toLowerCase() || 'unknown',
          amenities: amenitiesArray,
          floorplans: floorplanImages,
          elevations: elevationsImages,
          locationDetails: projectData['Location details']?.trim() || 'No Description available.',
          brochure: projectData.Brochure || 'https://via.placeholder.com/1200x800?text=No+Image'
        });

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setError('Failed to load project details. Please try again later.');
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProjectDetails();
    }
  }, [id]);

  if (error) {
    return (
      <div className="bg-gray-900 text-white min-h-screen pt-36 px-4 sm:px-6 lg:px-8 font-poppins">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-900/30 border border-red-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
            <p className="text-white">{error}</p>
            <Link to="/projects" className="inline-block mt-6 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-52 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto pb-12">
        {isLoading ? (
          <SkeletonDetails />
        ) : (
          <div className="animate-fadeIn space-y-16">
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white border-b-4 border-red-600 inline-block pb-2 tracking-tight">
                {project?.title}
              </h1>
              <Link to="/projects" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Projects
              </Link>
            </div>

            {/* Main Project Overview */}
            <section className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-800/90 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project?.imageUrl}
                    alt={project?.title}
                    className="w-full aspect-[4/3] object-contain bg-gray-900"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Image+Unavailable';
                    }}
                  />
                </div>
                {project?.brochure && project.brochure !== 'https://via.placeholder.com/1200x800?text=No+Image' && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = project.brochure;
                        link.download = `${project.title.replace(/\s+/g, '_')}_Brochure.pdf`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Brochure
                    </button>
                  </div>
                )}
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Project Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-300">{project?.location}</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-300">{project?.description} | {project?.area} sq ft</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    <p className="text-gray-300">Units: {project?.units}</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-300">Status: {project?.status}</p>
                  </div>
                </div>
                {project?.overview && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4 text-red-500">Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Amenities Section */}
            {project?.amenities && project.amenities.length > 0 && (
              <section>
                <h3 className="text-xl font-bold mb-6 text-red-500 border-b border-gray-800 pb-2">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center bg-gray-800/70 rounded-lg p-4 transition-all duration-300 hover:bg-gray-700/70 hover:shadow-md">
                      <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Elevations Section */}
            {project?.elevations?.length ? (
              <section>
                <h3 className="text-xl font-bold mb-6 text-red-500 border-b border-gray-800 pb-2">Property Elevations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.elevations.map((url, index) => (
                    <div key={index} className="bg-gray-800/90 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                      <img 
                        src={url}
                        alt={`Elevation ${index + 1}`}
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => openModal(url)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Floor Plans Section */}
            {project?.floorplans?.length ? (
              <section>
                <h3 className="text-xl font-bold mb-6 text-red-500 border-b border-gray-800 pb-2">Floor Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.floorplans.map((url, index) => (
                    <div key={index} className="bg-gray-800/90 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                      <img 
                        src={url}
                        alt={`Floor Plan ${index + 1}`}
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => openModal(url)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Location Section */}
            <section>
              <h3 className="text-xl font-bold mb-6 text-red-500 border-b border-gray-800 pb-2">Location</h3>
              <div className="bg-gray-800/90 rounded-lg overflow-hidden shadow-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Project Address</h4>
                <p className="text-gray-300 mb-6">
                  {project?.title}, {project?.location}, Hyderabad, Telangana, India
                </p>
                {project?.locationDetails && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Location Highlights</h4>
                    <p className="text-gray-400 text-sm whitespace-pre-line">
                      {project.locationDetails}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Image Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
                <div className="relative">
                  <img
                    src={selectedImage || ''}
                    alt="Zoomed"
                    className="max-w-full max-h-screen object-contain"
                    style={{ transform: `scale(${zoom})` }}
                    onWheel={handleZoom}
                  />
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;