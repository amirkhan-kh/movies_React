import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error("Error", error);
      });
  }, []);

  const handleCardClick = (show) => {
    navigate('/auth', { state: { show } });
  };

  return (
    <div className='body'>
      <h1>TV Shows</h1>
      <div className="wrapper">
      <div className="card-container">
        {shows.map(show => (
          <div key={show.id} className="card">
            <img src={show.image ? show.image.medium : 'placeholder_image_url'} alt={show.name} />
            <h2>{show.name}</h2>
            <p>{show.summary ? show.summary.replace(/<[^>]+>/g, '').slice(0, 100) : 'Is Not Defined'}...</p>
            <button onClick={() => handleCardClick(show)}>Show More</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
