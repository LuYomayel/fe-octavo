import React, { useState } from 'react';
import { categories, gender, mayDivisions, youthDivisions } from "../utils/filters.js";
import { Dropdown } from './Dropdown.jsx';
import { Input } from './Input.jsx';
export function TableHeader({ onFilterHeader, filter, teams }) {
  const [selectedCategory, setSelectedCategory] = useState('null');
  const [selectedDivision, setSelectedDivision] = useState('null');
  const [selectedGender, setSelectedGender] = useState('null');
  const [selectedTeam, setSelectedTeam] = useState('null');
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [divisionOptions, setDivisionOptions] = useState(mayDivisions);

  const teamsOptions = teams.map((team) => ({
    value: team._id,
    label: team.nombre,
  }));

  

  const handleFilter = (event) => {
    console.log(selectedCategory, selectedDivision, selectedGender, selectedTeam, selectedPlayer);  
    onFilterHeader({
      category: selectedCategory,
      division: selectedDivision,
      gender: selectedGender,
      team: selectedTeam,
      player: selectedPlayer,
    });
  };

  return (
    <div className="table-header">
        {
          filter === "equipo" ? 
          (
            <>
              <Dropdown onChange={setSelectedTeam} options={teamsOptions} value={selectedTeam}/>
              <Dropdown onChange={setSelectedCategory} options={categories} value={selectedCategory}/>
              <Dropdown onChange={setSelectedDivision} options={divisionOptions} value={selectedDivision}/>
              <Dropdown onChange={setSelectedGender} options={gender} value={selectedGender}/>
            </>
          
          ) : filter === "nombre" ?
          (
            <Input onChange={setSelectedPlayer} value={selectedPlayer}/>
            // <input type="text" placeholder="Ingrese un jugador" value={selectedPlayer} onChange={(event) => setSelectedPlayer(event.target.value)}/>

          ) : 
          (
          <>
            <Dropdown onChange={setSelectedCategory} options={categories} value={selectedCategory}/>
            <Dropdown onChange={setSelectedDivision} options={divisionOptions} value={selectedDivision}/>
            <Dropdown onChange={setSelectedGender} options={gender} value={selectedGender} />
          </>
          )
        }
        <input type="button" value="Filtrar" className='btn' onClick={handleFilter}/>
    </div>
  );
}
