import { useState, useEffect } from 'react';
import { calculateGoals } from '../utils/totalGoals';
function TableScorers({ scorers }) {
    const [filter, setFilter] = useState('')
    

    return (
        <div className='table-container'>

            <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Jugador</th>
                    <th>Equipo</th>
                    <th>Goles</th>
                    <th>PJ</th>
                    <th>PG</th>
                </tr>
            </thead>
            <tbody>
                {scorers.map((scorer, index) => (
                    <tr key={scorer._id}>
                    <td>{index + 1}</td>
                    <td>{scorer.name}</td>
                    <td>{scorer.team}</td>
                    <td>{scorer.goals}</td>
                    <td>{scorer.totalMatches}</td>
                    <td>{scorer.average}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export { TableScorers }