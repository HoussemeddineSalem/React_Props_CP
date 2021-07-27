import React from 'react';
import Profile from './profile/profile';
import profileData from './profile/profileData';




function App() {
  return (
    <div>
    <Profile fullName ={profileData.fullName} bio={profileData.bio} profession = {profileData.profession} >
    {profileData.imgURL}
    </Profile>
    </div>
  );
}

export default App;
  