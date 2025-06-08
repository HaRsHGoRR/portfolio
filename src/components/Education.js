import React from 'react';
import './style.css';

const Education = () => {
  const educationData = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institution: 'Gujarat Technological University',
      gpa: '7.9 CGPA',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Best Project Award for Final Year Project',
        'Active member of Computer Science Society'
      ]
    },
    {
      year: '2019 - 2021',
      degree: 'Higher Secondary Certificate',
      field: 'Science Stream (PCM)',
      institution: 'Gujarat Secondary Education Board',
      gpa: '94%',
      achievements: [
        'Top 5% in Mathematics',
        'Science Olympiad Qualifier',
        'School Programming Club Leader'
      ]
    },
    {
      year: '2018 - 2019',
      degree: 'Secondary School Certificate',
      field: 'All Subjects',
      institution: 'Gujarat Secondary Education Board',
      gpa: '92%',
      achievements: [
        'School Topper in Mathematics',
        'Perfect Attendance Award',
        'Student Council Representative'
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="text-gradient-tertiary">My Education Journey</h2>
      
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 1 ? 'right' : 'left'}`}>
            <div className="timeline-content cyber-card">
              <div className="timeline-date">{item.year}</div>
              <h3>{item.degree}</h3>
              <h4>{item.field}</h4>
              <div className="institution">{item.institution}</div>
              <div className="gpa">Grade: <span>{item.gpa}</span></div>
              
              <div className="achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills gained through education */}
      <div className="education-skills">
        <h3>Technical Skills Acquired</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Web Technologies</h4>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Tools & Platforms</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
