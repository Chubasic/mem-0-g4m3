import React, { FunctionComponent, useEffect } from 'react';
import GameBoard from './containers/GameBoard/GameBoard';
import GameStatusBoard from './containers/GameStatusBoard/GameStatusBoard';
import './App.scss';
import { useDispatch } from 'react-redux';
import GameSettings from './settings/GameSettings';

const App: FunctionComponent = () => {
  const initStore = useDispatch();
  useEffect(() => {

    return () => {
    };
  }, [])

  return (
    <div className='App'>
      <h1>MEMO GAME</h1>
      <button onClick={() => { initStore({ type: 'INIT_LEVEL', payload: new GameSettings() }) }}>Start game</button>
      <div className='content'>
        <GameBoard />
        <GameStatusBoard />
      </div>
    </div>
  );
}

export default App;
