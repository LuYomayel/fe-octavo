import { useState } from 'react';
import '../styles/Table.css';
function TableFairPlay({ teams }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;
    const items = [...teams]
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
                        <th>Equipo</th>
                        <th>Amarillas</th>
                        <th>2 min</th>
                        <th>Rojas</th>
                        <th>Azules</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsToShow.map((team) => (
                        <tr key={team.id}>
                        <td>{team.id}</td>
                        <td>{team.teamName}</td>
                        <td>{team.yellowCards}</td>
                        <td>{team.twoMin}</td>
                        <td>{team.redCards}</td>
                        <td>{team.blueCards}</td>
                        <td>{team.totalScore}</td>
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

export { TableFairPlay }