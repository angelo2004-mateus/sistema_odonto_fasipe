import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import { TbSmartHome } from "react-icons/tb";
import { TbCalendarDot } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";

import ProfileInfoForNavbar from "../components/ProfileInfoForNavbar";
import { useState } from "react";
import ShowNameLink from "../components/ShowNameLink";

const Navbar = () => {
  const [nameLink, setNameLink] = useState("");

  const showNameLink = (name) => {
     console.log('teste')
  };

  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="profile_container">
          {/* <ProfileInfoForNavbar /> */}
        </div>

        <nav>
          <NavLink
            to="/"
            onMouseEnter={() => showNameLink("Home")}
            onMouseLeave={() => showNameLink("")}
          >
            <TbSmartHome /> Dashboard
            {nameLink === "Home" && (
              <ShowNameLink nameLink={nameLink} name="Home" />
            )}
          </NavLink>

          <NavLink
            to="/agenda"
            onMouseEnter={() => showNameLink("Agenda")}
            onMouseLeave={() => showNameLink("")}
          >
            <TbCalendarDot /> Agenda
            {nameLink === "Agenda" && (
              <ShowNameLink nameLink={nameLink} name="Agenda" />
            )}
          </NavLink>

          <NavLink
            to="/paciente/cadastro"
            onMouseEnter={() => showNameLink("Cadastro de Paciente")}
            onMouseLeave={() => showNameLink("")}
          >
            <LuUsers /> Pacientes
            {nameLink === "Cadastro de Paciente" && (
              <ShowNameLink nameLink={nameLink} name="Cadastro de Paciente" />
            )}
          </NavLink>

          <NavLink
            to="/profissionais"
            onMouseEnter={() => showNameLink("Profissionais")}
            onMouseLeave={() => showNameLink("")}
          >
            <TbHealthRecognition /> Profissionais
            {nameLink === "Profissionais" && (
              <ShowNameLink nameLink={nameLink} name="Profissionais" />
            )}
          </NavLink>

          <NavLink
            to="/anamnese/listar"
          >
            <TbHealthRecognition /> Anamnese
            {nameLink === "Anamnese" && (
              <ShowNameLink nameLink={nameLink} name="Anamnese" />
            )}
          </NavLink>
          
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
