import './CardDashboard.scss'

const CardDashboard = ({ icon, nameCard, data, additional_info, color }) => {
  return (
    <div className='card_dashboard' 
    style={{backgroundColor: color}}>
      <p>{icon} {nameCard}</p>
      <h2>{data}</h2>
      <p>{additional_info}</p>
    </div>
  )
}

export default CardDashboard
