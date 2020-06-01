import React from 'react';
import List from './List.js';
import './App.css';

//for each list in props.store.lists, render a LIST in div with props header and cards

//.cards and .header?   ****key!
function App(props) {
  let myLists = props.store.lists;
  const listsArr = myLists.map( list  => (
      <List 
        key = {list.id}
        header={list.header}
        cards= {list.cardIds.map(cardId =>
            props.store.allCards[cardId]
          )}
      ></List>
    )
  );
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {listsArr}
      </div>
    </main>
  );
}

export default App;