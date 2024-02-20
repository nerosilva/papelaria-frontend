import './styles.css'
import Logo from '../../assets/img/images.png'
import Menu from '../../componentes/menu'



export default function Dashboard() {

  return (
    <div className="dashboard-container">
      <div className='menu'>

        <Menu />

      </div>

      <div className='Principal'>
        <h1>Pagina Principal</h1>
        
        <div className='logo'>
          <img src={Logo} />
        </div>
      </div>

    </div>

  )

}