////////////////////////////////////////////////////////////////////////////
import axios from "axios"
////////////////////////////////////////////////////////////////////////////
const Item = ( prop ) => {

    const handleDelete = async (idService) => {
        
        try {
            const response = await axios.delete(`/services/${idService}`)
            if( response.status === 200)
            {
                prop.Delete( true )
            }
            
        } catch (error) { alert("Error Enviando Publicacion")}
    
    }


    return (
        <div className="container mt-5 mx-auto p-4 md:p-0">
            <div className="shadow-lg flex flex-wrap rounded-lg w-full lg:w-4/5 mx-auto bg-purple-100">
                <div
                    className=" bg-cover bg-bottom border rounded-lg w-full md:w-1/3 h-auto  relative"
                    style={{ backgroundImage: `url( ${localStorage.getItem("baseURL")}/${prop.img})` }}
                ></div>

                <div className="w-full md:w-2/3 rounded-r bg-gradient-to-r bg-gradient from-purple-100 to-purple-300 bg-purple-300">
                    <div className=" h-full mx-auto px-6 md:px-0 rounded-lg md:pt-6 md:-ml-2 relative">
                        <div className="bg-white p-6 rounded-lg shadow-slate-800 shadow-lg mr-2">
                            <div className="flex items-baseline">
                                <span className="bg-indigo-200 text-indigo-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    {prop.name}
                                </span>
                            </div>
                            <div className="mt-1">
                                {new Intl.NumberFormat('es-CO').format(prop.price)}
                                <span className="text-gray-600 text-sm">
                                    {" "}
                                    /COP [ {prop.period} / <strong>{prop.unit}</strong> ] 
                                </span>
                            </div>

                            <h4 className="mt-1 text-xl font-medium leading-tight ">
                                {prop.description}
                            </h4>

                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">
                                    ¿Desea realizar cambios?
                                </span>
                            </div>
                            <div className="p-4 border-t border-b border-sky-900 text-xs text-gray-700">
                                <button type="button" className="bg-purple-500 hover:bg-purple-400 border-b-4 border-purple-700 hover:border-purple-500 text-white text-center font-bold py-2 px-4 mr-6 rounded">
                                    EDITAR
                                </button>
                                <button type="button" className="bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center font-bold py-2 px-4 rounded" onClick={()=> handleDelete(prop.idService)} >
                                    
                                
                                    ELIMINAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item