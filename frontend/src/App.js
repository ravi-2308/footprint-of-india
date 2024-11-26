import React from 'react'; // Import React
import './App.css'; // Import existing styles
import logo from './logo.svg'; // Keep the existing logo import
import EventCard from './components/EventCard'; // Import the EventCard component
import './styles.css';


function App() {
  // Sample event data
  const events = [
    {
      title: 'Republic Day',
      description: 'India became a republic on this day.',
      date: '1950-01-26',
      region: 'National',
      category: 'Political',
    },
    {
      title: 'Independence Day',
      description: 'India gained independence.',
      date: '1947-08-15',
      region: 'National',
      category: 'Historical',
    },
  ];

  return (
    <div className="App">
      {/* Existing header content */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* New section for event cards */}
      <div className="App-events">
        <h1>Upcoming Events</h1>
        <div className="events-container">
          {events.map((event, index) => (
            <EventCard
              key={index} // Use a unique key for each component
              title={event.title}
              description={event.description}
              date={event.date}
              region={event.region}
              category={event.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
