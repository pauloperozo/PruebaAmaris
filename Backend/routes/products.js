//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
const multer = require('multer')
const upload = multer({ dest: 'uploads/products/' })

//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/products')
    const resultado = await Index()
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idProduct',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/products')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,upload.single('img'),async ( req, res ) => {

    console.log( req.body )
    console.log(req.file)

    /*Ajustamos el path del archivo */
    req.body.img = req.file.path
    const { Create }  = require('../controllers/products')
    const resultado = await Create( req.body )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idProduct',Auth,upload.single('img'),async (req, res) => {
 
    /*Ajustamos el path del archivo */
    if(req.file) req.body.img = req.file.path

    const { Update }  = require('../controllers/products')
    const data = Object.assign({ idProduct: req.params.idProduct},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idProduct',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/products')
    const resultado = await Delete( req.params )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////