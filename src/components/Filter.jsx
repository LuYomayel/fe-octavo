import { useState } from 'react';
import { Dropdown } from './Dropdown';
function Filter( {onFilter} ) {
  const [selectedFilter, setSelectedFilter] = useState('categoria');

  const handleChangeFilter = (event) => {
    setSelectedFilter(event)
    onFilter(event);
  }

  return (
    <div className="filter">
        <h2>Filtrar por: </h2>
        <Dropdown 
          onChange={handleChangeFilter} 
          options={[
            {value: 'categoria', label: 'Categoria'}, 
            {value: 'equipo', label: 'Equipo'}, 
            {value: 'nombre', label: 'Jugador'}]
          }
          value={selectedFilter}
        />
    </div>
  )
}

export {Filter};