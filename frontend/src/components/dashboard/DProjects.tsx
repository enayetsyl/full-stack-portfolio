import React, { useState, useEffect } from 'react';

const DProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    summary: '',
    liveLink: '',
    gitHubLink: '',
    stack: '',
    category: '',
    technologies: '',
  });

  console.log("projects", projects)

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/project/get-all-projects');
      const data = await response.json();
      console.log('data', data)
      setProjects(data.data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Handle form submission for adding/editing project
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isEditMode
        ? `http://localhost:5000/api/v1/project/edit-project/${currentProject._id}`
        : 'http://localhost:5000/api/v1/project/create-project';
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          stack: formData.stack.split(',').map((s) => s.trim()),
          category: formData.category.split(',').map((c) => c.trim()),
          technologies: formData.technologies.split(',').map((t) => t.trim()),
        }),
      });

      if (response.ok) {
        alert(isEditMode ? 'Project updated successfully!' : 'Project added successfully!');
        fetchProjects();
        setFormData({
          title: '',
          image: '',
          description: '',
          summary: '',
          liveLink: '',
          gitHubLink: '',
          stack: '',
          category: '',
          technologies: '',
        });
        setIsFormVisible(false);
        setIsEditMode(false);
        setCurrentProject(null);
      } else {
        alert('Failed to save project');
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  // Handle delete project
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/project/delete-project/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Project deleted successfully!');
        fetchProjects();
      } else {
        alert('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  // Handle edit button click
  const handleEdit = (project) => {
    setIsFormVisible(true);
    setIsEditMode(true);
    setCurrentProject(project);
    setFormData({
      title: project.title,
      image: project.image,
      description: project.description,
      summary: project.summary,
      liveLink: project.liveLink,
      gitHubLink: project.gitHubLink,
      stack: project.stack.join(', '),
      category: project.category.join(', '),
      technologies: project.technologies.join(', '),
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-red-600 font-bold text-5xl text-center mb-6">Projects</h1>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => {
            setIsFormVisible(true);
            setIsEditMode(false);
            setCurrentProject(null);
            setFormData({
              title: '',
              image: '',
              description: '',
              summary: '',
              liveLink: '',
              gitHubLink: '',
              stack: '',
              category: '',
              technologies: '',
            });
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>

      {/* Table to display projects */}
      <div className="overflow-x-auto text-black">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Live Link</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td className="px-4 py-2 border">{project.title}</td>
                <td className="px-4 py-2 border">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {project.liveLink || 'N/A'}
                  </a>
                </td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleEdit(project)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form to add/edit project */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-scroll text-black">
            <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Project' : 'Add Project'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Title"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
                required
              />
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="Image URL"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
                required
              />
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <textarea
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                placeholder="Summary"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <input
                type="text"
                value={formData.liveLink}
                onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                placeholder="Live Link"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <input
                type="text"
                value={formData.gitHubLink}
                onChange={(e) => setFormData({ ...formData, gitHubLink: e.target.value })}
                placeholder="GitHub Link"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <textarea
                value={formData.stack}
                onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                placeholder="Stack (comma-separated)"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <textarea
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="Category (comma-separated)"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <textarea
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                placeholder="Technologies (comma-separated)"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsFormVisible(false);
                    setIsEditMode(false);
                    setCurrentProject(null);
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {isEditMode ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DProjects;