import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import { TbSmartHome } from "react-icons/tb";
import { TbCalendarDot } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";
import { TbDental } from "react-icons/tb";
import ProfileInfoForNavbar from '../components/ProfileInfoForNavbar';

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='navbar'> 
            <div className='profile_container'>
               <h2 className='logo'>Odon<span>tologia</span> <TbDental /></h2> 

               <ProfileInfoForNavbar />
            </div>
            
            <nav>
                <NavLink to="/" activeClassName="active">
                    <TbSmartHome /> Início</NavLink>

                <NavLink to="/sla">
                    <TbCalendarDot /> Agenda</NavLink>

                <NavLink to="/paciente/cadastro">
                    <LuUsers /> Pacientes</NavLink>
                    
                <NavLink to="/teste">
                    <TbHealthRecognition /> Profissional</NavLink>
         </nav>
       </div>
    </div>
  )
}

export default Navbar
