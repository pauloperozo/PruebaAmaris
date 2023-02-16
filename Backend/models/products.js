/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {STRING,DECIMAL,TEXT,UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('product',{
        idProduct: { type: UUID,defaultValue:UUIDV4,primaryKey: true},
        name:{ type:STRING },
        description:{ type:TEXT },
        img:{ type:STRING },
        price:{ type:DECIMAL(10,2) }
    })
   
}
/////////////////////////////////////////////////////////////