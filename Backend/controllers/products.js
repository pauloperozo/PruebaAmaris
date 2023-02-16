/////////////////////////////////////////////////////////
const Index = async () => {

    const { Product } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await Product.findAll({order: [['name', 'ASC']]})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => {             
            const { idProduct,name,description,img,price,createdAt,updatedAt } = row 
            return {
                idProduct,
                name,
                description,
                img,
                price,
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

    const { Product } = require("../services/database")
 
    try {
        const resultado = await Product.findByPk( data.idProduct ) 
        const { idProduct,name,description,img,price } = resultado 
        const respuesta = { idProduct,name,description,img,price }
        return { status:200,respuesta}   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Product } = require("../services/database")
 
    try {
        const resultado = await Product.findOrCreate({where:{ name:data.name },defaults:data})    
        if(resultado[1] == true)return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idProduct:resultado[0].idProduct } } 
        else return { status:400,respuesta: { success:false,message:"Registro ya Existente"} } 
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Product } = require("../services/database")
 
    try {
        await Product.update(data,{where:{idProduct: data.idProduct}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idProduct:data.idProduct } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Product } = require("../services/database")
 
    try {
        const resultado = await Product.destroy({where:{idProduct: data.idProduct}})     
        if( resultado == 0)return { status:400,respuesta: { success:false,message:"No Se Puede Borrar"} }   
        else return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idProduct:data.idProduct } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////