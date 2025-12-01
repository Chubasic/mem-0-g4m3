
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from './components/Button/Button';
import GameBoard from './containers/GameBoard/GameBoard';
import GameManager from './containers/GameManager/GameManager';
import GameStatusBoard from './containers/GameStatusBoard/GameStatusBoard';
import GameSettings from './settings/GameSettings';
import './App.scss';

const App: FunctionComponent = () => {
  const initGame = useDispatch();

  function intiAction() {
    initGame({ type: 'INIT_LEVEL', payload: new GameSettings() });
  }

  return (
    <div className='App'>
      <h1>MEMO GAME</h1>
      <Button btnText='Start game' onClickAction={intiAction} />
      <div className='content'>
        <GameManager />
        <GameBoard />
        <GameStatusBoard />
      </div>
    </div>
  );
};

export default App;
