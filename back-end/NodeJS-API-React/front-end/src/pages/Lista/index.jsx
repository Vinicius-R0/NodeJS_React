import React from 'react';
import api from '/services/api';
import { useEffect, useState } from 'react';//
import { useNavigate } from 'react-router-dom';

function ListarUsuarios() {
  //useState para colocar os dados que vem do backend na tela
  //colocar valor de setUsers dentro de users
  //setUsers: função que atualiza o estado
  const [client, setClient] = useState()
  const navigate = useNavigate()

  //Vai ser chamado toda vezz que essa tela carregar (chamar loadusers)
  useEffect(() => {
    async function loadUsers() {
      const { data: { clients } } = await api.get('/listar-usuarios', {
        // headers.authorization: token
        //colocando o token no header da requisição
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      //colocando array de clients dentro do setUsers
      //setUsers: função que atualiza o estado
      setClient(clients)

    }
    loadUsers()
  }
  , [])


  return (

   
    

    //colocando os dados que vem do backend na tela
    <div className="max-w-2xl mx-auto mt-20 bg-white border-2 border-blue-900 p-10 rounded-lg shadow-neutral-300 shadow-lg flex flex-col items-center gap-5  ">

    {/*perfil do usuario logado colocando o nome do usuario logado na tela*/}
    <h1></h1>
   


      <h2 className='text-3xl text-blue-900 font-bold'>Listar Usuarios</h2>
      <ul className='flex flex-wrap gap-5'>
        {/* Aqui você pode fazer um map para listar os usuarios que estão dentro do array de clients */}

        {/* client é o array que vem do backend, e client_user é cada elemento desse array */}

        {/* client_user é um objeto que tem os dados do usuario */}

        {/* client_user.id é o id do usuario que nao pode ser repetido
        entamos usamos como uma key */}

        {/*client && pra fazer verificação se tiver dados em client
        if(client && client.length > 0) { 
            client.map((client_user)=>(
            *************
        ))}*/}

        {client && client.length > 0 && client.map((client_user) => (
          <li className='bg-blue-100 min-w-70 p-5 rounded-lg shadow-lg flex flex-col gap-3'
          key={client_user.id}>
            <p className='font-bold'>ID: {client_user.id}</p>
            <p>Nome: {client_user.name}</p>
            <p>Email: {client_user.email}</p>
            <button className='bg-blue-900 text-white rounded-md p-2 mt-5'
       onClick={()=>navigate(`/editar-usuarios/${client_user.id}`)}>Editar</button>
          </li>
          
        ))}
      </ul>
        
     
      <button className='bg-blue-900 text-white rounded-md p-2 mt-5' onClick={() => { 
        localStorage.removeItem('token')
        if(!localStorage.getItem('token')) {
          alert("Logout realizado com sucesso!")
          window.location.href = '/'
        }
      }}
       >Logout</button>

       

    </div>
  )
}

export default ListarUsuarios;