import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useRef} from "react";
import api from "/services/api";

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate()

   async function handleSubmit(event){
        event.preventDefault();

        try{
        //Aqui você pode fazer a requisição para o backend
       const { data } = await api.post('/login', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        const token = data
        //Guardar o token no localStorage e chama-lo de token
        localStorage.setItem('token', token)
        console.log(token)

        alert("Login realizado com sucesso!")

        //Redirecionar para a página de listar usuarios
        navigate('/listar-usuarios')

        } catch (error){
            console.error(error);
            alert("Erro ao realizar o Login")
        }
    }

  return (
    <div className="mx-auto max-w-sm mt-10 p-5 border border-gray-300 rounded-lg shadow-md">

      <h1 className="text-2xl font-bold mb-10 text-center text-blue-900">
        Login</h1>

      <form className="flex flex-col items-center gap-3.5" onSubmit={handleSubmit}>
       
        <input ref={emailRef} type="email" placeholder="Email" className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0"/>

        <input ref={passwordRef} type="password" placeholder="Password" className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0"/>

        <button className="mb-6 mt-10 rounded-md bg-blue-900 text-white h-15 w-full ">
          Entrar</button>

      </form>

      <Link to='/cadastro' className="text-blue-800 block text-center font-bold underline ">
      Não tem uma conta? Cadastre-se</Link>
      </div>
  )
}
export default Login;