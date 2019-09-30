import React, { FunctionComponent, useEffect } from 'react';
import GameBoard from './containers/GameBoard/GameBoard';
import GameStatusBoard from './containers/GameStatusBoard/GameStatusBoard';
import './App.scss';
import { useDispatch } from 'react-redux';
import GameSettings from './settings/GameSettings';
import Button from './components/Button/Button';
import GameManager from './containers/GameManager/GameManager';

const App: FunctionComponent = () => {
  const initGame = useDispatch();
  useEffect(() => {

    return () => {
    };
  }, []);

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
