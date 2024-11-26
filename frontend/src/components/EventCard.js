import React from 'react';
import './EventCard.css'; // Import the CSS file for styling

const EventCard = ({ title, description, date, region, category }) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{new Date(date).toDateString()}</small>
      <div className="event-details">
        <span>{region}</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default EventCard;
