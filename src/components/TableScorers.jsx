import { useState, useEffect } from 'react';
import '../styles/Table.css';
function TableScorers({ scorers }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const items = [...scorers]
    const itemsToShow = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
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
                    {itemsToShow.map((scorer) => (
                        <tr key={scorer._id}>
                        <td>{scorer.position}</td>
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
            <div className="pagination">
                <button className="pagination-button" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}> &lt;&lt;&lt; </button>
                <button className="pagination-button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> &lt; </button>
                <label htmlFor="" className="current-page">{currentPage}</label>
                <button className="pagination-button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>&gt;</button>
                <button className="pagination-button" onClick={() => setCurrentPage(Math.ceil(items.length / itemsPerPage))} disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>&gt;&gt;&gt;</button>
            </div>

        </>
    );
}

export { TableScorers }