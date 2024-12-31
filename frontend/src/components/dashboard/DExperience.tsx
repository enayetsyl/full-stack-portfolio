import React, { useEffect, useState } from "react";

const DExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editExperience, setEditExperience] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    technologies: "",
    responsibilities: "",
    isCurrentlyWorking: false,
  });

  console.log("experience", experiences)

  // Fetch all experiences
  const fetchExperiences = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/experience/get-all-experience"
      );
      const data = await response.json();
      console.log("experience data", data);
      setExperiences(data.data || []);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  // Add or Update experience
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = editExperience
      ? `http://localhost:5000/api/v1/experience/update-experience/${editExperience._id}`
      : "http://localhost:5000/api/v1/experience/create-experience";

    try {
      const response = await fetch(endpoint, {
        method: editExperience ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200 || response.status === 201) {
        alert(
          editExperience
            ? "Experience updated successfully!"
            : "Experience added successfully!"
        );
        setFormData({
          companyName: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
          technologies: "",
          responsibilities: "",
          isCurrentlyWorking: false,
        });
        setEditExperience(null);
        setIsModalOpen(false);
        fetchExperiences();
      } else {
        alert("Failed to save experience");
      }
    } catch (error) {
      console.error("Error saving experience:", error);
    }
  };

  // Open modal for editing
  const handleEdit = (experience: any) => {
    setEditExperience(experience);
    setFormData({
      ...experience,
      description: experience.description.join(", "),
      technologies: experience.technologies.join(", "),
      responsibilities: experience.responsibilities.join(", "),
    });
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-red-600 font-bold text-5xl text-center mb-6">
        Experience
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setFormData({
              companyName: "",
              position: "",
              startDate: "",
              endDate: "",
              location: "",
              description: "",
              technologies: "",
              responsibilities: "",
              isCurrentlyWorking: false,
            });
            setEditExperience(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Experience
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border text-black">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Company Name</th>
              <th className="px-4 py-2 border">Position</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody >
            {experiences.map((experience: any) => (
              <tr key={experience._id}>
                <td className="px-4 py-2 border">{experience.companyName}</td>
                <td className="px-4 py-2 border">{experience.position}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleEdit(experience)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 mr-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-scroll" >
            <h2 className="text-2xl font-bold mb-4 text-black">
              {editExperience ? "Edit Experience" : "Add Experience"}
            </h2>
            <form onSubmit={handleSubmit} className="">
              {/* Company Name */}
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none text-black"
                required
              />
              {/* Position */}
              <input
                type="text"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                placeholder="Position"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
                required
              />
              {/* Start Date */}
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                placeholder="Start Date"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
                required
              />
              {/* End Date */}
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                placeholder="End Date"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
              />
              {/* Location */}
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="Location"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
                required
              />
              {/* Description */}
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Description (comma-separated)"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
                required
              />
              {/* Technologies */}
              <textarea
                value={formData.technologies}
                onChange={(e) =>
                  setFormData({ ...formData, technologies: e.target.value })
                }
                placeholder="Technologies (comma-separated)"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
                required
              />
              {/* Responsibilities */}
              <textarea
                value={formData.responsibilities}
                onChange={(e) =>
                  setFormData({ ...formData, responsibilities: e.target.value })
                }
                placeholder="Responsibilities (comma-separated)"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none  text-black"
                required
              />
              {/* Is Currently Working */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={formData.isCurrentlyWorking}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isCurrentlyWorking: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label className="text-black">Currently Working</label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {editExperience ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DExperience;
