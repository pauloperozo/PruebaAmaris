/////////////////////////////////////////////////////////
const Index = async () => {

    const { Section } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await Section.findAll({order: [['createdAt', 'DESC']]})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => {             
            const { idSection,description,createdAt,updatedAt } = row 
            return {
                idSection,
                description,
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

    const { Section } = require("../services/database")
 
    try {
        const resultado = await Section.findByPk( data.idSection ) 
        const { idSection,description } = resultado 
        const respuesta = { idSection,description}
        return { status:200,respuesta}   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Section } = require("../services/database")
 
    try {
        const resultado = await Section.create( data )    
        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idSection:resultado.dataValues.idSection } } 
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Section } = require("../services/database")
 
    try {
        await Section.update(data,{where:{idSection: data.idSection}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idSection:data.idSection } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Section } = require("../services/database")
 
    try {
        const resultado = await Section.destroy({where:{idSection: data.idSection}})     
        if( resultado == 0)return { status:400,respuesta: { success:false,message:"No Se Puede Borrar"} }   
        else return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idSection:data.idSection } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////