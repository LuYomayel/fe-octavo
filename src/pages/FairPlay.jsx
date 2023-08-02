import { useState, useEffect } from 'react'
import { TableScorers } from '../components/TableScorers'
import { TableHeader } from '../components/TableHeader'
import { calculateGoals } from '../utils/totalGoals'
import { Filter } from '../components/Filter'
import { Spinner } from '../components/Spinner'
import { EmptySearch } from '../components/EmptySearch'
import '../styles/FairPlay.css'
import parseFairPlay from '../utils/parseFairPlay'
import { TableFairPlay } from '../components/TableFairPlay'


export function FairPlay() {
  const [teams, setTeams] = useState([{}])
  const [loading, setLoading] = useState(true)

  const filterMain = 'categoria'

  const handleFilterHeader = async (filter) => {
    setLoading(true);
    console.log('filter', filter)
    
    const endpoint = `https://api-goleadores.handball-metropolitano.com/jugador/fairplay/${filter.division}/${filter.category}/${filter.gender}`;
    
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log('data', data)
    const teamsParsed = parseFairPlay(data);
    setTeams(teamsParsed);
    setLoading(false);
  }

  // Llamada inicial a la API
  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);

      const endpoint = 'https://api-goleadores.handball-metropolitano.com/jugador/fairplay/A/Junior/Masculino';
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log('equipos fairplay' ,data);
      const teams = parseFairPlay(data);

      setTeams(teams);
      setLoading(false)
    };

    fetchTeams();
  }, []);

  
    return (
      <>
        {loading && <Spinner/>}
        <div className="fair-play">
          <h1>FairPlay</h1>
          {/* <Filter onFilter={handleFilter}/> */}
          <TableHeader onFilterHeader={handleFilterHeader} filter={filterMain} teams={teams}/>
          {(teams.length === 0 && !loading) ?  (<EmptySearch/>) : (<TableFairPlay teams={teams}/>)}
          {/* {(scorers.length === 0 && !loading) ?  (<EmptySearch/>) : (<TableScorers scorers={scorers}/>)} */}
    
        </div>

      </>
    )
}
