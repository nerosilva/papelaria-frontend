import './styles.css'
import Logo from '../../assets/img/IMG-20230804-WA0123.jpeg'
import Menu from '../../componetes/menu'



export default function Dashboard() {

  return (
    <div className="dashboard-container">
      <div className='menu'>

        <Menu />

      </div>

      <div className='Principal'>
        <h1>Pagina Principal do meu Site</h1>
        <div className='logo'>
          <img src={Logo} />
        </div>
      </div>

    </div>

  )

}