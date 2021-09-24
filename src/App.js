import { useQuery } from '@apollo/client';
import React from 'react';
import GetAllPeople from './components/GetAllPeople/GetAllPeople';
import { LOAD_ALL_PEOPLE } from './components/utils/queries';

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
      <GetAllPeople loading={loading} error={error} getPeople={getPeople} />
    </div>
  );
}

export default App;
