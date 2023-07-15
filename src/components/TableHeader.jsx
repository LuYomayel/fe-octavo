import React, { useState } from 'react';
import { categories, gender, mayDivisions, youthDivisions } from "../utils/filters.js";

export function TableHeader({ onFilterHeader, filter, teams }) {
  const [selectedCategory, setSelectedCategory] = useState('null');
  const [selectedDivision, setSelectedDivision] = useState('null');
  const [selectedGender, setSelectedGender] = useState('null');
  const [selectedTeam, setSelectedTeam] = useState('null');
  const [selectedPlayer, setSelectedPlayer] = useState('null');

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleFilter = () => {
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
      <div>
        {
          filter === "equipo" ? 
          (
            <>
            <select name="team" id="team" value={selectedTeam} onChange={handleTeamChange}>
              {teams.map((team) => (
                <option value={team._id}>{team.nombre}</option>
              ))}
            </select>
              <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                  {categories.map((category) => (
                    <option value={category.value}>{category.name}</option>
                  ))}
                </select><select name="divisions" id="divisions" value={selectedDivision} onChange={handleDivisionChange}>
                  {selectedCategory === "Mayores" ? (
                    mayDivisions.map((division) => (
                      <option value={division.value}>{division.name}</option>
                    ))
                  ) : (
                    youthDivisions.map((division) => (
                      <option value={division.value}>{division.name}</option>
                    ))
                  )}
                </select><select name="gender" id="gender" value={selectedGender} onChange={handleGenderChange}>
                  {gender.map((gender) => (
                    <option value={gender.value}>{gender.name}</option>
                  ))}
                </select></>
          
          ) : filter === "jugador" ?
          (
            <input type="text" placeholder="Ingrese un jugador" value={selectedPlayer} onChange={(event) => setSelectedPlayer(event.target.value)}/>

          ) : 
          (
          <>
            <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map((category) => (
                  <option value={category.value}>{category.name}</option>
              ))}
            </select>
            <select name="divisions" id="divisions" value={selectedDivision} onChange={handleDivisionChange}>
              {selectedCategory === "Mayores" ? (
                mayDivisions.map((division) => (
                  <option value={division.value}>{division.name}</option>
                ))
              ) : (
                youthDivisions.map((division) => (
                  <option value={division.value}>{division.name}</option>
                ))
                )}
            </select><select name="gender" id="gender" value={selectedGender} onChange={handleGenderChange}>
              {gender.map((gender) => (
                <option value={gender.value}>{gender.name}</option>
              ))}
            </select>
          </>
          )

          
        }


        

        <input type="button" value="Filtrar" onClick={handleFilter}/>
      </div>
    </div>
  );
}
