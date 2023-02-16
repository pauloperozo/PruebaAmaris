//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
const multer = require('multer')
const upload = multer({ dest: 'uploads/services/' })
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/services')
    const resultado = await Index()
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idService',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/services')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,upload.single('img'),async ( req, res ) => {

    /*Ajustamos el path del archivo */
    req.body.img = req.file.path
    const { Create }  = require('../controllers/services')
    const resultado = await Create( req.body )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idService',Auth,upload.single('img'),async (req, res) => {
  
    /*Ajustamos el path del archivo */
    if(req.file) req.body.img = req.file.path

    const { Update }  = require('../controllers/services')
    const data = Object.assign({ idService: req.params.idService},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idService',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/services')
    const resultado = await Delete( req.params )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////