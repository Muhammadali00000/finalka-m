import React, { useContext, useState } from 'react';
import './AdminPanel.scss';
import { PhotoContext } from '../../context';

const AdminPanel = () => {
    const { photos, addPhoto } = useContext(PhotoContext);
    const [formData, setFormData] = useState({
      year: '2021',
      category: 'production',
      title: '',
      description: '',
      url: '',
    });
  
    const [notification, setNotification] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPhoto = {
        ...formData,
        id: photos.length + 1,
      };
  
      try {
        const response = await fetch('http://localhost:5000/photos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPhoto),
        });
  
        if (response.ok) {
          const addedPhoto = await response.json();
          addPhoto(addedPhoto);
          setNotification('Photo added successfully!');
          setFormData({
            year: '2021',
            category: 'production',
            title: '',
            description: '',
            url: '',
          });
        } else {
          setNotification('Failed to add photo');
        }
      } catch (error) {
        console.error('Error adding photo:', error);
        setNotification('Карточка добавлена успешно!');
      }
    };

  return (
    <section className="adminka">
      <div className="container">
        <div className="adminka__wrap">
          <h2>Add New Photo</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Year:
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Category:
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="production">Production</option>
                <option value="products">Products</option>
                <option value="projects">Projects</option>
                <option value="events">Events</option>
                <option value="employees">Employees</option>
              </select>
            </label>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              URL:
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Add Photo</button>
          </form>
          {notification && <div className="notification">{notification}</div>}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
