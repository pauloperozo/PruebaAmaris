//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/users')
    const resultado = await Index()
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idUser',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/users')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth, async ( req, res ) => {

    const { Create }  = require('../controllers/users')
    const resultado = await Create( req.body )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idUser',Auth,async (req, res) => {
   
    const { Update }  = require('../controllers/users')
    const data = Object.assign({ idUser: req.params.idUser},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idUser',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/users')
    const resultado = await Delete( req.params )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////