import React, { createContext, useState, useEffect } from 'react';

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json'); // Ensure the path is correct
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();

        const loadedPhotos = data.photos || [];
        for (const year in data.gallery) {
          for (const category in data.gallery[year]) {
            loadedPhotos.push(...data.gallery[year][category]);
          }
        }

        setPhotos(loadedPhotos);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <PhotoContext.Provider value={{ photos }}>
      {children}
    </PhotoContext.Provider>
  );
};
