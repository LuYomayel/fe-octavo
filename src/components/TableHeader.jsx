import { useEffect, useState } from 'react';
import { categories, gender, mayDivisions, youthDivisions } from "../utils/filters.js";
import { Dropdown } from './Dropdown.jsx';
import { Input } from './Input.jsx';
import '../styles/Table.css';
export function TableHeader({ onFilterHeader, filter, teams }) {
  const [selectedCategory, setSelectedCategory] = useState('null');
  const [selectedDivision, setSelectedDivision] = useState('null');
  const [selectedGender, setSelectedGender] = useState('null');
  const [selectedTeam, setSelectedTeam] = useState('null');
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [divisionOptions, setDivisionOptions] = useState(mayDivisions);
  const [emptyFilter, setEmptyFilter] = useState(false);

  const teamsOptions = teams.map((team) => ({
    value: team._id,
    label: team.nombre,
  }));

  const onChangeCategory = (event) => {
    setSelectedCategory(event);
    console.log(event);
    if(event === 'Mayores') {
      setDivisionOptions(mayDivisions);
    } else {
      setDivisionOptions(youthDivisions);
    }
  };

  const handleFilter = () => {
    if(filter === 'equipo') {
      if(selectedTeam === 'null') {
        setEmptyFilter(true);
        return;
      }
    } else if(filter === 'nombre') {
      if(selectedPlayer === '') {
        setEmptyFilter(true);
        return;
      }
    } else {
      if(selectedCategory === 'null' || selectedDivision === 'null' || selectedGender === 'null') {
        setEmptyFilter(true);
        return;
      }
    }
    console.log('Buscandoo', selectedCategory, selectedDivision, selectedGender, selectedTeam, selectedPlayer)
    onFilterHeader({
      category: selectedCategory,
      division: selectedDivision,
      gender: selectedGender,
      team: selectedTeam,
      player: selectedPlayer,
    });
  };

  useEffect(() => {
    if(emptyFilter) {
      setTimeout(() => {
        setEmptyFilter(false);
      }
      , 3000);
    }
  }, [emptyFilter]);

  return (
    <div className="container-flex">
      

      <div className="table-header">
          {
            filter === "equipo" ? 
            (
              <>
                <Dropdown onChange={setSelectedTeam} options={teamsOptions} value={selectedTeam}/>
                <Dropdown onChange={onChangeCategory} options={categories} value={selectedCategory}/>
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
              <Dropdown onChange={onChangeCategory} options={categories} value={selectedCategory}/>
              <Dropdown onChange={setSelectedDivision} options={divisionOptions} value={selectedDivision}/>
              <Dropdown onChange={setSelectedGender} options={gender} value={selectedGender} />
            </>
            )
        }
        <input type="button" value="Filtrar" className='btn' onClick={handleFilter}/>
      </div>
      {emptyFilter && <div className="empty-filter">*Debe completar todos los filtros</div>}
      
    </div>
  );
}
