import { useLocation } from 'wouter';
import '../styles/DropdownNavBar.css'

export function DropdownNavBar({ options }) {
    const [, setLocation] = useLocation();

    const handleOptionChange = (event) => {
        const newRoute = event.target.value;
        if (newRoute !== "null") {
            setLocation(newRoute);
        }
    };

    return (
        <div className="dropdown-nav-wrapper">
            <select className='dropdown-nav' value="null" onChange={handleOptionChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}
