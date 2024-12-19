import React, { useEffect, useState } from "react";

let PixabayC = () => {
  let [api, setApi] = useState({ images: [] });
  let [search, setSearch] = useState("");

  // Fetch images from Pixabay API
  let fetchImages = async (searchTerm) => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term.");
      return;
    }
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=47534062-23de516974b6931e2467e675e&q=${searchTerm}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setApi({ images: data.hits });
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  // Fetch random images on initial load
  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=47534062-23de516974b6931e2467e675e&image_type=photo&order=popular&pretty=true`
        );
        const data = await response.json();
        setApi({ images: data.hits });
      } catch (err) {
        console.error("Error fetching random images:", err);
      }
    };

    fetchRandomImages();
  }, [search]);

  return (
    
    <div className="pixabay-container">
      <div className="bgimage">
     <div className="brandName">
         <h1>Pixabay</h1>
         <div className="buttons">
           <button id="log" className="but">Login</button>
           <button id="join" className="but">Join</button>
           <button id="upload" className="but">
             <i className="fa-solid fa-arrow-up-from-bracket"></i> Upload           
             </button>
         </div>
       </div>
      
      <div className="header">
        <h1>Stunning Royalty-Free Images & Stock</h1>
        <div className="nav-links">
          
          <li className="nav-item">Explore</li>
          <li className="nav-item">Photos</li>
          <li className="nav-item">Illustrations</li>
          <li className="nav-item">Vectors</li>
          <li className="nav-item">Videos</li>
          <li className="nav-item">Music</li>
          <li className="nav-item">Sound Effects</li>
          <li className="nav-item">GIFs</li>
         
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={search}
          placeholder="Search for free Images, Videos, Music & more"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => fetchImages(search)}>Search</button>
      </div>

      {/* Image Results */}
      <div className="images-grid">
        {api.images.length > 0 ? (
          api.images.map((image) => (
            <div className="image-item" key={image.id}>
              <img
                src={image.webformatURL}
                alt={image.tags}
                className="api-image"
              />
            </div>
          ))
        ) : (
          <p>No images found. Try a different search term.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default PixabayC;