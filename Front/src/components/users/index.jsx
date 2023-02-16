//////////////////////////////////////////////////////////////////////////
import { useState } from "react"
import Formulario from "./formulario"
import Listado from "./listado"
//////////////////////////////////////////////////////////////////////////
const UserModule = ( ) => {
    
    const[ state,setstate ] = useState( false )
    const NewSave = ( value ) => setstate( value )

    return(
        <div className="md:flex">
            <Formulario NewSave={NewSave} />
            <Listado Reload={state}/>
        </div>
    )
}
/////////////////////////////////////
export default UserModule
/////////////////////////////////////