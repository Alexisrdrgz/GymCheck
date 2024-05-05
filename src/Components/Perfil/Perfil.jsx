import React from 'react'
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png'

const Perfil = () => {
  return (
    <div>
        <div style={{marginLeft:'100px'}}>
            <img src={Logo} alt="" style={{width:'200px',height:'200px'}} />
           <label style={{marginLeft:'50px'}}>Usuario</label> 
           <br></br>
           <label >Numero de usuario: 1</label> 
        </div>

        <div className='rounded-full bg-purple-200 -ml-12' style={{width:'534px', height:'514px',marginTop:'500px'}} >
        </div>


    </div>
  )
}

export default Perfil