/////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react"
import axios from "axios"
import Item from "./item"
/////////////////////////////////////////////////////////////////////////////////////////////////
const Listado = ({Reload}) => {

    const [ products,setproducts ] = useState([])
    const [ delet,setdelete ] = useState(false)

    const Load = async () => {
        const response = await axios.get("/products")
        response.status === 200 ? setproducts( response.data ) : []
    }

    const NewDelete = ()=>  setdelete( true )


    useEffect(()=>{
        Load()
    },[Reload,delet])

    return (

        <>
            {products && products.length ? (
                <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll border-gray-800 border-l-2 mt-10">
                    <h2 className="font-black text-3xl text-center">
                        Listado de Productos
                    </h2>
                    <p className=" text-lg mt-5 text-center">
                        Administra tus {""}
                        <span className="text-green-600">
                            Productos
                        </span>
                    </p>
                    {   products.map( info => ( <Item  idProduct={info.idProduct} name={info.name} description={info.description} img={info.img} price = {info.price} Delete = {NewDelete} /> ))  }


                </div>
            ) : (
                <div className="md:w-1/2 lg:w-3/5 md:h-screen mt-10">
                    <h2 className="font-black text-3xl text-center">
                        No hay productos
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando productos {""}
                        <span className="text-indigo-600 font-bold ">
                            y aparecerán en este lugar
                        </span>
                    </p>
                </div>
            )}
        </>
    )
}

export default Listado
