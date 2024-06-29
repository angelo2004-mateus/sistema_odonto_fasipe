import { useEffect, useState } from 'react'
import './ListarPacientes.scss'
import axios from 'axios'

const ListarPacientes = () => {

    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/paciente/todos_pacientes')
                console.log(response)
                setPacientes(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        getAllUsers()
    }, [])
    
  return (
    <section className='container_listar_pacientes'>
        <div className='div_listagem'>

        <div className='header_container'>
            <input type="text" />
            <button>Pesquisar</button>

            <select name="" id="">
                <option value="">TODOS</option>
                <option value="">MAIS RECENTES</option>
                <option value="">ORDEM ALFABÉTICA</option>
            </select>
        </div>

            <table className='tabela_pacientes'>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Código</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((paciente, index) => (
                        <tr key={index}>
                            <td>{paciente.cpf_pac}</td>
                            <td>{paciente.nome_pac}</td>
                            <td>{paciente.cod_pac}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default ListarPacientes
