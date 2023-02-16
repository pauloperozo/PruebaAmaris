//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
const fs     = require("fs")
const path   = require("path")
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:dir/:file',async (req, res)=>{

    const { dir, file } = req.params
    const img_path  = path.join(__dirname,'../',"uploads",dir, file) 
    if(! fs.existsSync( img_path ) ) return res.status(404).end()
    const img = fs.readFileSync(img_path)
    res.append("Content-Type","image/jpeg")
    res.send(img)

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////