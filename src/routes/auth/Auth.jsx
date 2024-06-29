import { useLocation } from 'react-router-dom';
import '../home/Home.css'
import '../../componets/nav/Nav.css'
const Auth = () => {
  const location = useLocation();
  const { show } = location.state;

  return (
    <div className="body">
      <div className="container">
    <div className='contain'>
      <h1>{show.name}</h1>
      <img src={show.image.original} alt={show.name} />
      <div className="divInfo">
      <p>{show.summary}</p>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Premiered: {show.premiered}</p>
      <p>Rating:{show.rating.average} </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Auth;
