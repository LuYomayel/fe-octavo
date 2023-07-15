import { useState, useEffect } from 'react'
import { TableScorers } from './components/TableScorers'
import { TableHeader } from './components/TableHeader'
import { calculateGoals } from './utils/totalGoals'
import { Filter } from './components/Filter'
import './App.css'
import { getEndpointScorers } from './utils/getEndpointScorers'

function App() {
  const [scorers, setScorers] = useState([])
  const [filterMain, setFilter] = useState('categoria')
  const [teams, setTeams] = useState([{}])
    
  const handleFilter = async (filter) => {
    console.log(filter);
    setFilter(filter);
  }

  const handleFilterHeader = async (filter) => {
    console.log(filter, filterMain);
    const endpoint = getEndpointScorers(filter, filterMain);
    if (endpoint === '') {
      return;
    }
    const response = await fetch(endpoint);
    const data = await response.json();
    const goalsPerPlayer = calculateGoals(data.goleadores);
    setScorers(goalsPerPlayer);
  }

  // Llamada inicial a la API
  useEffect(() => {

    const fetchTeams = async () => {
      const endpoint = 'https://api-goleadores.handball-metropolitano.com/equipo';
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log('equipos' ,data)
      setTeams(data);
    };

  fetchTeams();

    handleFilterHeader({
      division: 'B',
      category: 'Junior',
      gender: 'Masculino',
    });


  }, []);

  return (
    <div className="App">
      <h1>Goleadores</h1>
      
      <Filter onFilter={handleFilter}/>
      <TableHeader onFilterHeader={handleFilterHeader} filter={filterMain} teams={teams}/>
      <TableScorers scorers={scorers}/>

    </div>
  )
}

export default App
