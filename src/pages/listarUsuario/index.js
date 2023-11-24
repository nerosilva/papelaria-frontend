import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componetes/menu'



export default function Listausuario() {

  return (
    <div className="dashboard-container">
      <div className='menu'>

         <Menu />

      </div>
      <div className='Principal'>
        <h1>lista de Usuario</h1>
      </div>

    </div>

  )

}