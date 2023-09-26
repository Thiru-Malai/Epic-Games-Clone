// src/components/GameList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from './components/actions/gameActions';

const GameList = () => {
  const dispatch = useDispatch();
  const { loading, games, error } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="game-list">
      <h2>Games List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* <ul> */}
        {games.map((game) => (
          // <li key={game.id}>
          <>
          <span>
            <img width={300} height={400} src={game.coverImageUrl} alt={game.title} />
            <span><h3>{game.title}</h3></span>
            <span> <p>{game.description}</p></span>
            </span>
          {/* // </li> */}
          </>
        ))}
      {/* </ul> */}
    </div>
  );
};

export default GameList;
