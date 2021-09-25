import { useQuery } from '@apollo/client';
import React from 'react';
import GetAllPeople from './components/GetAllPeople/GetAllPeople';
import { LOAD_ALL_PEOPLE } from './components/utils/queries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Character from './components/Character/Character';
import Navbar from './components/Navbar/Navbar';

function App() {
  const { loading, error, data } = useQuery(LOAD_ALL_PEOPLE);
    
  const getData = () => {
    if(data) {
      const people = data.allPeople.people;
      return people;
    } else {
      return data;
    }
  }

  const getPeople = getData();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="body">
          <div className="body__left">
            <GetAllPeople loading={loading} error={error} getPeople={getPeople} />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="body__responsive">
                <GetAllPeople loading={loading} error={error} getPeople={getPeople} />
              </div>
            </Route>
            {
              getPeople && getPeople.map(character => (
                <Route exact path={`/${character.name}`} key={character.id}>
                  <Character getPeople={character} />
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
