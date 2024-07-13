import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import { TbSmartHome } from "react-icons/tb";
import { TbCalendarDot } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";

const Navbar = () => {

  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="profile_container">
          {/* <ProfileInfoForNavbar /> */}
        </div>

        <nav>
          <NavLink to="/">
            <TbSmartHome /> Dashboard
          </NavLink>

          <NavLink to="/agenda">
            <TbCalendarDot /> Agenda
          </NavLink>

          <NavLink to="/paciente/cadastro">
            <LuUsers /> Pacientes
          </NavLink>
          
          <NavLink to="/anamnese/listar">
            <TbHealthRecognition /> Anamnese
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
