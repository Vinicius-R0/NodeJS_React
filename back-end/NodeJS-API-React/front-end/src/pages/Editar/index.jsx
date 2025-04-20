import React from "react";
import api from "/services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditarUsuarios() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate()
  const [loading , setLoading] = useState(true)
  //funcao para carregar os dados do usuario
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await api.get(`/listar-usuarios/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const clients = data.data.client
        setName(clients.name)
        setEmail(clients.email)
        setLoading(false)
        console.log('Dados do Usuario carrgado com sucesso', clients.client)
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar os dados do usuário")
      }
    }

    loadUsers()
  }, [id]);

  //função para editar os dados do usuario
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.put(`/editar-usuarios/${id}`, {
        name: name,
        email: email,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      alert("Usuário editado com sucesso!")
      navigate('/listar-usuarios')
      
    } catch (error) {
      console.error(error);
      if(error.response.data.message === 403) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao editar o usuário")
      }
    }


  }
  return (
    <div className="mx-auto max-w-sm mt-10 p-5 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-10 text-center text-blue-900">Editar Usuario</h1>
      
      {loading ? ( 
        <p className="text-center text-blue-900">Carregando...</p>
      ) : (
     
        <form className="flex flex-col items-center gap-3.5"
          onSubmit={handleSubmit}>

          <input type="text"
            placeholder="Nome"
            className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0"
            value={name}
            onChange={(event) => setName(event.target.value)} />

          <input type="email"
            placeholder="Email"
            className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />

          <button className="mb-6 mt-10 rounded-md bg-blue-900 text-white h-15 w-full"
            type="Submit">Salvar</button>
            <button onClick={()=>{window.location.href = '/listar-usuarios'}}>Voltar</button>
        </form>
       )}
    </div>
  );
}


export default EditarUsuarios;