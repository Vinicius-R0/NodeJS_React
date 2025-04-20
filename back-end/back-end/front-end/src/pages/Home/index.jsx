import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    
    return(
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-2xl font-bold mb-10 text-center text-blue-900">Bem-vindo ao sistema de gerenciamento de usuários!</h1>
            <div>
            <p className="text-center text-gray-700">Este sistema permite que você cadastre, edite e visualize usuários.</p>
            <p className="text-center text-gray-700">Use o menu para navegar entre as páginas.</p>
            </div>
            
            <div>
                <h2 className="text-xl font-bold text-blue-900">Funcionalidades:</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Cadastro de usuários</li> 
                    <li>Edição de usuários</li>
                    <li>Listagem de usuários</li>
                    <li>Logout</li>
                </ul>
            </div>

           <div>
            <p className="text-center text-gray-700">Se você tiver alguma dúvida, entre em contato com o suporte.</p>

            <p className="text-center text-gray-700">Obrigado por usar nosso sistema!</p>
        </div>

            <div className="flex gap-5 mt-10">
                <a href="/login" className="bg-blue-900 text-white rounded-md p-2">Login</a>
                <a href="/cadastro" className="bg-blue-900 text-white rounded-md p-2">Cadastro</a>
                <a href="/listar-usuarios" className="bg-blue-900 text-white rounded-md p-2">Listar Usuários</a>
        </div>
        </div>
    )
}
export default Home;