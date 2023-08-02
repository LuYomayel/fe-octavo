import { useState, useEffect } from 'react'
import { TableScorers } from '../components/TableScorers'
import { TableHeader } from '../components/TableHeader'
import { calculateGoals } from '../utils/totalGoals'
import { Filter } from '../components/Filter'
import { Spinner } from '../components/Spinner'
import { EmptySearch } from '../components/EmptySearch'
import '../styles/TopScorer.css'
import { getEndpointScorers } from '../utils/getEndpointScorers'


export function TopScorers() {
  const [scorers, setScorers] = useState([])
  const [filterMain, setFilter] = useState('categoria')
  const [teams, setTeams] = useState([{}])
  const [loading, setLoading] = useState(true)

  const handleFilter = async (filter) => {
    console.log(filter);
    setFilter(filter);
  }

  const handleFilterHeader = async (filter) => {
    setLoading(true);
    const endpoint = getEndpointScorers(filter, filterMain);
    if (endpoint === '') {
      return;
    }
    const response = await fetch(endpoint);
    const data = await response.json();
    const goalsPerPlayer = calculateGoals(data.goleadores);
    setScorers(goalsPerPlayer);
    console.log('goleadores', goalsPerPlayer.length)
    setLoading(false);
  }

  // Llamada inicial a la API
  useEffect(() => {

    const fetchTeams = async () => {
      const endpoint = 'https://api-goleadores.handball-metropolitano.com/equipo';
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log('equipos' ,data);
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
      <>
        {loading && <Spinner/>}
        <div className="top-scorers">
          <h1>Goleadores</h1>
          
          <Filter onFilter={handleFilter}/>
          <TableHeader onFilterHeader={handleFilterHeader} filter={filterMain} teams={teams}/>
          {(scorers.length === 0 && !loading) ?  (<EmptySearch/>) : (<TableScorers scorers={scorers}/>)}
          {/* {(scorers.length === 0 && !loading) ?  (<EmptySearch/>) : (<TableScorers scorers={scorers}/>)} */}
    
        </div>

      </>
    )
}
