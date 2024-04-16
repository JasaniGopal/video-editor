import React, { useState, useRef } from 'react';
import demo_profile_image from "../../assets/demo_profile_image.jpg"

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(demo_profile_image); // Use demo_profile_image as initial state
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader(); 

    reader.onload = () => {
      setProfileImage(reader.result); 
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <img
        src={profileImage}
        alt="Profile Image"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        onClick={() => fileInputRef.current.click()}
      />

      <input
        type="file"
        id="file-input"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default UserProfile;
