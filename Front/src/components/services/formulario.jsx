///////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import axios from "axios"
///////////////////////////////////////////////////////////////////////////////////
const Formulario = ({NewSave}) => {
  
    const handleSubmit = async ( event ) => {
        
        event.preventDefault()       
        const form = new FormData( event.currentTarget )
        
        try {
            const response = await axios.post("/services",form, { headers: { 'Content-Type': 'multipart/form-data' } } )
            if( response.status === 200)
            {
                NewSave( true )
                event.target.reset()
            }
            
        } catch (error) { alert("Error Enviando Publicacion") }

    }
 
    return (
        <div className="md:w-1/2 lg:w-2/5 py-10 px-5">
            <h2 className=" font-black text-3xl text-center">
                Gestión de Servicios
            </h2>
            <p className=" text-lg mt-5 text-center">
                Añade Servicios y {""}
                <span className="text-indigo-600">Administralos</span>
            </p>
            <form onSubmit={handleSubmit} enctype="multipart/form-date"
                className="bg-white border-white shadow-slate-800 shadow rounded-lg ml-5 mr-5 mt-5 py-10 px-5 mb-10"
            >
          
                <div className="shadow">
                    <div className="flex items-center bg-gray-200 rounded-t-lg border-slate-500 border-b">
                        <label
                            htmlFor="nombre"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="nombre"
                            placeholder="Nombre del Servicio"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />

                    </div>
                    <div className="flex items-center bg-gray-200 border-slate-500 border-b">
                        <label
                            htmlFor="descripcion"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Descripción
                        </label>
                        <input
                            type="text"
                            name="description"
                            id="descripcion"
                            placeholder="Descripcion del Servicio"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />
                    </div>

                    <div className="flex items-center bg-gray-200 border-slate-500 border-b">
                        <label
                            htmlFor="precio"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Precio
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="precio"
                            placeholder="Precio del Servicio"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />

                    </div>

                    <div className="flex items-center bg-gray-200 border-slate-500 border-b">
                        <label
                            htmlFor="precio"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Periodo
                        </label>
                        <input
                            type="number"
                            name="period"
                            id="precio"
                            placeholder="Precio del Producto"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />

                    </div>

                    <div className="flex items-center bg-gray-200 border-slate-500 border-b">
                        <label
                            htmlFor="precio"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            unidad
                        </label>
                        <input
                            type="text"
                            name="unit"
                            id="precio"
                            placeholder="dias/semanas/meses/años"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-400  outline-none text-black overflow-ellipsis overflow-hidden"
                            required
                        />

                    </div>


                    
                    <div className="flex items-center bg-gray-200 rounded-b-lg border-slate-500 mb-10">
                        <label
                            htmlFor="imagen"
                            className=" block text-gray-700 uppercase font-bold w-20 text-right mr-14 p-4"
                        >
                            Imagen
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            name="img"
                            id="imagen"
                            placeholder="Imagen del Producto"
                            required
                            className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-purple-300 file:text-gray-700
                        hover:file:bg-violet-100
                      "
                        />
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
