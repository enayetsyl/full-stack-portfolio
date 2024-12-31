import React, { useEffect, useState } from "react";

const DSkill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [skillImage, setSkillImage] = useState(null)
  const [skills, setSkills] = useState([]);

  const handleAddSkill = async () => {
    if (!skillName.trim()) {
      alert("Skill name cannot be empty");
      return;
    }


    if (!skillImage) {
      alert("Skill image is required");
      return;
    }

    const formData = new FormData()
    formData.append("name", skillName);
    formData.append("image", skillImage)

    try {
      const response = await fetch("http://localhost:5000/api/v1/skill", {
        method: "POST",
        
        body: formData,
      });

      if (response.ok) {
        alert("Skill added successfully!");
        setSkillName("");
        setSkillImage(null)
        setIsModalOpen(false);
        fetchSkills()
      } else {
        alert("Failed to add skill");
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("An error occurred while adding the skill.");
    }
  };

  const fetchSkills = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/skill");
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setSkills(data.data);
      } else {
        console.error("Failed to fetch skills");
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const handleDeleteSkill = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/skill/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Skill deleted successfully!");
        fetchSkills(); // Refresh the skills table
      } else {
        alert("Failed to delete skill");
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
      alert("An error occurred while deleting the skill.");
    }
  };
  console.log("skills", skills);
  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="p-6 text-black">
      <h1 className="text-red-600 font-bold text-5xl text-center mb-6">
        Skills
      </h1>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Skill
        </button>
      </div>

      {/* Skills Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Skill Name</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill: { _id: string; name: string }) => (
              <tr key={skill._id}>
                <td className="px-4 py-2 border text-black">{skill.name}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleDeleteSkill(skill._id)}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Add a New Skill</h2>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Enter skill name"
              className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
            />
            <input
            type="file"
            accept="image/*"
            onChange={(e)=> setSkillImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSkill}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DSkill;
