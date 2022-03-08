import React from 'react'
import Tilt from 'react-tilt';
import { TagCloud } from 'react-tagcloud'
import './SkillsCard.css'

function SkillsCard(){
  var pre='<'
  var post='/>'
  
  const data = [
    { value: 'JavaScript', count: 48 },
    { value: 'React.js', count: 40 },
    { value: 'Node.js', count: 38 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'Firebase Suite', count: 18 },
    { value: 'Play Store', count: 28 },
    { value: 'CSS3', count: 20 },
    { value: 'SASS', count: 20 },
    { value: 'Microservices', count: 30 },
    { value: 'E-commerce', count: 36 },
    { value: 'React Native', count: 45 },
    { value: 'Bootstrap', count: 20 },
    { value: 'Full-Stack', count: 24 },
    { value: 'Front-end', count: 26 },
    { value: 'Back-end', count: 26 },
    { value: 'SQL', count: 46 },
    { value: 'Realtime Database', count: 36 },
    { value: 'Firebase Hosting', count: 36 },    
    { value: 'Vercel', count: 30 },
    { value: 'GitHub', count: 30 },    
    { value: 'SCRUM', count: 30 },    
    { value: 'Mocha', count: 30 },
  ]
  const colorOptions={
    luminosity: 'bright',
    hue: 'green',
  }
  return (
    <div className="SkillsCardContainer">
      <Tilt className="skillsCard">
        <h3 className="skillsCardHeader">{pre}<span className="title">Skills</span>{post}</h3>
        <TagCloud
          className="tagCloud"
          minSize={25}
          maxSize={40}
          tags={data}
          colorOptions={colorOptions}
        />    
      </Tilt>
    </div>
  )
}

export default SkillsCard
