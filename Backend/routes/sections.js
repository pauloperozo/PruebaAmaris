//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/sections')
    const resultado = await Index()
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idSection',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/sections')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,async ( req, res ) => {

    const { Create }  = require('../controllers/sections')
    const resultado = await Create( req.body )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idSection',Auth,async (req, res) => {
 
    const { Update }  = require('../controllers/sections')
    const data = Object.assign({ idSection: req.params.idSection},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idSection',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/sections')
    const resultado = await Delete( req.params )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////