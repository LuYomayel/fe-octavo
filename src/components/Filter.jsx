import { useState } from 'react';
function Filter( {onFilter} ) {
  const [selectedFilter, setSelectedFilter] = useState('categoria');
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    onFilter(event.target.value);
  };


  return (
    <div className="Filter">
        <h2>Filtrar por: </h2>
        <select name="filter" id="filter" value={selectedFilter} onChange={handleFilterChange}>
            <option value="categoria">Categoria</option>
            <option value="equipo">Equipo</option>
            <option value="nombre">Jugador</option>

        </select>
    </div>
  )
}

export {Filter};