/////////////////////////////////////////////////////////
const Index = async () => {

    const { Service } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await Service.findAll({order: [['name', 'ASC']]})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => {             
            const { idService,name,description,img,price,period,unit,createdAt,updatedAt } = row 
            return {
                idService,
                name,
                description,
                img,
                price,
                period,
                unit,
                createdAt:new moment(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                updatedAt:new moment(updatedAt).format("YYYY-MM-DD HH:mm:ss")
            } 
        })

        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }

}
/////////////////////////////////////////////////////////
const Read = async ( data ) => {

    const { Service } = require("../services/database")
 
    try {
        const resultado = await Service.findByPk( data.idService ) 
        const { idService,name,description,img,price,period,unit } = resultado 
        const respuesta = { idService,name,description,img,price,period,unit }
        return { status:200,respuesta}   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Service } = require("../services/database")
 
    try {
        const resultado = await Service.findOrCreate({where:{ name:data.name },defaults:data})    
        if(resultado[1] == true)return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idService:resultado[0].idService } } 
        else return { status:400,respuesta: { success:false,message:"Registro ya Existente"} } 
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Service } = require("../services/database")
 
    try {
        await Service.update(data,{where:{idService: data.idService}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idService:data.idService } }   
    } 
    catch (error) {
        console.log( error )
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Service } = require("../services/database")
 
    try {
        const resultado = await Service.destroy({where:{idService: data.idService}})     
        if( resultado == 0)return { status:400,respuesta: { success:false,message:"No Se Puede Borrar"} }   
        else return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idService:data.idService } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////