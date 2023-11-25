import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componetes/menu'



export default function Listausuario() {

  const dados=[
          
            {id:1,nome:"Nero",email:"Jaldevan2014@gmail.com"},
            {id:2,nome:"Silva",email:"Nerinho0007@gmail.com"},
            {id:3,nome:"Caue",email:"Cauenero007@gmail.com"},
               
  ]

  return (
    <div className="dashboard-container">
      <div className='menu'>

        <Menu />

      </div>
      <div className='Principal'>
        <h1>lista de Usuario</h1>
        <table border={1}>
          <tr>

            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th></th>

          </tr>
          {
             dados. map((usu)=>{
              return(
                <tr key={usu.toString}>
                  <td>{usu.id}</td>
                  <td>{usu.nome}</td>
                  <td>{usu.email}</td>

                </tr>
              )
             })

          }


        </table>
      </div>

    </div>

  )

}