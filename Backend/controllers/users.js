/////////////////////////////////////////////////////////
const Index = async () => {

    const { User,Profile } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await User.findAll({ include:Profile })
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => ({             
            idUser: row.idUser,
            idProfile: row.idProfile,
            login: row.login,
            createdAt: new moment(row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
            nameProfile: row.profile.name
        }))  
        
        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }

}
/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { User,Profile } = require("../services/database")
    const moment = require('moment')
 
    try {   
        const resultado =  await User.findOne({include:Profile,where: data })
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = {             
            idUser: resultado.dataValues.idUser,
            idProfile: resultado.dataValues.idProfile,
            login: resultado.dataValues.login,
            createdAt: new moment(resultado.dataValues.createdAt).format("YYYY-MM-DD HH:mm:ss"),
            nameProfile: resultado.dataValues.profile.name
        }

        return { status:200,respuesta:respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        const resultado = await User.findOrCreate({where:{ login:data.login },defaults:data})    
        if(resultado[1] == true)return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idUser:resultado[0].idUser } } 
        else return { status:400,respuesta: { success:false,message:"Registro ya Existente"} } 
    } 
    catch (error) {
        console.log( error )
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        await User.update(data,{where:{idUser: data.idUser}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idUser:data.idUser } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        const resultado = await User.destroy({where:{idUser: data.idUser}})     
        if( resultado == 0)return { status:400,respuesta: { success:false,message:"No Se Puede Borrar"} }   
        else return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idUser:data.idUser } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////