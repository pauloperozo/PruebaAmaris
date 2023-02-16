///////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import axios from "axios"
///////////////////////////////////////////////////////////////////////////////////
const Formulario = ({NewSave}) => {
  
    const handleSubmit = async ( event ) => {
        
        event.preventDefault()       
         
        const form = { 
            login: event.target.login.value, 
            password:event.target.password.value,
            idProfile:event.target.idProfile.value 
        }
        
        try {
            const response = await axios.post("/users",form)
            if( response.status === 200)
            {
                NewSave( true )
                event.target.reset()
            }
            
        } catch (error) { alert("Error Enviando Publicacion") }

    }
 
    const [profiles,setprofiles ] =  useState([])

    const LoadProfiles = async () => {
        const response = await axios.get("/profiles")
        if(response.status === 200)setprofiles( response.data)
    }




    useEffect(()=>{
        LoadProfiles()
    },[])


    return (
        <div className="md:w-1/2 lg:w-2/5 py-10 px-5">
            <h2 className=" font-black text-3xl text-center">
                Gestión de Usuarios
            </h2>
            <p className=" text-lg mt-5 text-center">
                Añade Usuarios y {""}
                <span className="text-indigo-600">Administralos</span>
            </p>
            <form onSubmit={handleSubmit}
                className="bg-white border-white shadow-slate-800 shadow rounded-lg ml-5 mr-5 mt-5 py-10 px-5 mb-10"
            >
          
                <div className="shadow">
                    <div className="flex items-center bg-gray-200 rounded-t-lg border-slate-500 border-b">
                        <label
                            htmlFor="nombre"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Login
                        </label>
                        <input
                            type="text"
                            name="login"
                            id="nombre"
                            placeholder="Login"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />

                    </div>
                    <div className="flex items-center bg-gray-200 border-slate-500 border-b">
                        <label
                            htmlFor="descripcion"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            id="descripcion"
                            placeholder="Password"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />
                    </div>

                    <div className="flex items-center bg-gray-200 border-slate-500 border-b">
                        <label
                            htmlFor="Perfil"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Perfil
                        </label>
                        <select id="idProfile" name="idProfile">
                        {   profiles.map( info => ( <option value={info.idProfile}>{info.name}</option> ))  }


                        </select>
                    </div>


                </div>
                <input
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-500 border-b-4 border-purple-700 hover:border-purple-500 text-white text-center py-2 px-4 rounded block w-full font-bold shadow"
                />
                
            </form>
        </div>
    )
}

export default Formulario
