import React, { useState, useEffect } from 'react';

interface Blog {
  _id: string;
  title: string;
  description: string;
  link: string;
}

const DBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/v1/blog/get-all-blog'
      );
      const data = await response.json();
      console.log('data', data);
      setBlogs(data.data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Handle form submission for adding/editing blog
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const endpoint =
        isEditMode && currentBlog
          ? `http://localhost:5000/api/v1/blog/edit-blog/${currentBlog._id}`
          : 'http://localhost:5000/api/v1/blog/create-blog';
      const method = isEditMode ? 'PUT' : 'POST';

      // Use FormData to send image and other data
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('link', formData.link);
      formDataToSend.append('date', new Date().toISOString());

      if (imageFile) formDataToSend.append('image', imageFile);

      const response = await fetch(endpoint, {
        method,
        body: formDataToSend,
      });

      if (response.ok) {
        alert(
          isEditMode ? 'Blog updated successfully!' : 'Blog added successfully!'
        );
        fetchBlogs();
        setFormData({
          title: '',
          description: '',
          link: '',
        });
        setImageFile(null);
        setIsFormVisible(false);
        setIsEditMode(false);
        setCurrentBlog(null);
      } else {
        alert('Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  // Handle delete blog
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/blog/delete-blog/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        alert('Blog deleted successfully!');
        fetchBlogs();
      } else {
        alert('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Handle edit button click
  const handleEdit = (blog: Blog) => {
    setIsFormVisible(true);
    setIsEditMode(true);
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      link: blog.link,
    });
    setImageFile(null);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-red-600 font-bold text-5xl text-center mb-6">
        Blogs
      </h1>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => {
            setIsFormVisible(true);
            setIsEditMode(false);
            setCurrentBlog(null);
            setFormData({
              title: '',
              description: '',
              link: '',
            });
            setImageFile(null);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Blog
        </button>
      </div>

      {/* Table to display blogs */}
      <div className="overflow-x-auto text-black">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Link</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="px-4 py-2 border">{blog.title}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {blog.link || 'N/A'}
                  </a>
                </td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
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

      {/* Form to add/edit blog */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-scroll text-black">
            <h2 className="text-2xl font-bold mb-4">
              {isEditMode ? 'Edit Blog' : 'Add Blog'}
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Title"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImageFile(e.target.files[0]);
                  }
                }}
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
                required={!isEditMode}
              />
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Description"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
              />
              <input
                type="text"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                placeholder="Link"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsFormVisible(false);
                    setIsEditMode(false);
                    setCurrentBlog(null);
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

export default DBlogs;
