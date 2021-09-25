import { useQuery } from '@apollo/client';
import React from 'react';
import GetAllPeople from './components/GetAllPeople/GetAllPeople';
import { LOAD_ALL_PEOPLE } from './components/utils/queries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

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
  console.log(getPeople);

  return (
    <div className="App">
      <Router>
        <GetAllPeople loading={loading} error={error} getPeople={getPeople} />
        {/* <Switch>
          {
            getPeople.map(data => (
              <Route exact path={``}>

              </Route>
            ))
          }
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
