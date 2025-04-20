import React from "react";
import { Link, useNavigate} from "react-router-dom";
import {useRef} from "react";
import api from "/services/api";

function Cadastro() {
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

   async function handleSubmit(event){
        event.preventDefault();

        try{
        //Aqui você pode fazer a requisição para o backend
       await api.post('/cadastro', {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        alert("Cadastro realizado com sucesso!")
        navigate('/login')
        } catch (error){
            console.error(error);
            alert("Erro ao realizar o cadastro")
        }
       
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

  return (
    <div className="mx-auto max-w-sm mt-10 p-5 border border-gray-300 rounded-lg shadow-md">

      <h1 className="text-2xl font-bold mb-10 text-center text-blue-900">Cadastro</h1>

      <form className="flex flex-col items-center gap-3.5" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0" />
        
        <input ref={emailRef} type="email" placeholder="Email" className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0"/>

        <input ref={passwordRef} type="password" placeholder="Password" className="mb-6  focus:outline-none border-b-1 border-gray-400 w-full py-1 px-3 placeholder:px-0"/>

        <button className="mb-6 mt-10 rounded-md bg-blue-900 text-white h-15 w-full "
        >Cadastre-se</button>

      </form>

      <Link to='/login' className="text-blue-800 block text-center font-bold underline ">Já tem uma conta? Faça login</Link>
      </div>
  )
}
export default Cadastro;