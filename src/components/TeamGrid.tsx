import React from 'react';
import type { TeamMember } from '../types';
import './TeamGrid.css';

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <div className="team-grid">
      {members.map((member, index) => (
        <div key={index} className="team-member">
          <div className="member-portrait">
            <img
              src={`/${member.name}.jpg`}
              alt={member.name}
              onError={(e) => {
                // Fallback to .png if .jpg doesn't exist
                (e.target as HTMLImageElement).src = `/${member.name}.png`;
              }}
            />
            <div className="member-overlay">
              <h3 className="member-name">{member.name}</h3>
              {member.role && <p className="member-role">{member.role}</p>}
              <div className="member-skills">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
