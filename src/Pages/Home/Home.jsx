import React from 'react';
import HomeCard from './homecard';
import './home.css'
import Student from '../../images/Student.png';
import Marks from '../../images/Marks.jpg';
import Teacher from '../../images/Teacher.jpg';

export const Home = () => {
  return (
    <div className="home-container">
     <HomeCard 

heading="Student"
path="Student"
delay={0.15}
image={Student}
/>
<HomeCard

heading="Teacher"
path="Teacher"
delay={0.25}
image={Teacher}
/>
<HomeCard
heading="Marks"
path="Marks"
delay={0.35}
image={Marks}

/>
    
    
    
    
    
    </div>
   
  )
}

