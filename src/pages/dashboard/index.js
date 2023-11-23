import './styles.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componetes/menu'



export default function Dashboard() {

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <h1>menu</h1>
         <Menu/>

      </div>
      <div className='Principal'>
        <h1>Pagina Principal</h1>
      </div>

    </div>

  )

}