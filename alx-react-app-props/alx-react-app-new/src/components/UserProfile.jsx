// src/components/UserProfile.jsx

import React from 'react';

const UserProfile = (props) => {
  return (
   
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
  {/* Style the name (h2) */}
  <h2 style={{ color: 'blue', fontSize: '24px', margin: '0' }}>{props.name}</h2>

  {/* Style the age section (paragraph) */}
  <p style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
    Age: 
    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>{props.age}</span>
  </p>

  {/* Style the bio section (paragraph) */}
  <p style={{ fontSize: '16px', margin: '5px 0' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
