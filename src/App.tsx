import React, { FunctionComponent, useEffect } from 'react';
import GameBoard from './containers/GameBoard/GameBoard';
import GameStatusBoard from './containers/GameStatusBoard/GameStatusBoard';
import './App.scss';
import { useDispatch } from 'react-redux';
import GameSettings from './settings/GameSettings';
import Button from './components/Button/Button';

const App: FunctionComponent = () => {
  const initStore = useDispatch();
  useEffect(() => {

    return () => {
    };
  }, [])

  function intiAction() {
    initStore({ type: 'INIT_LEVEL', payload: new GameSettings() });
  }

  return (
    <div className='App'>
      <h1>MEMO GAME</h1>
      <Button btnText='Start game' onClickAction={intiAction} />
      <div className='content'>
        <GameBoard />
        <GameStatusBoard />
      </div>
    </div>
  );
}

export default App;
