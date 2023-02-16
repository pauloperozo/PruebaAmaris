/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {STRING,INTEGER,TEXT,DECIMAL, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('service',{
        idService: { type: UUID,defaultValue:UUIDV4,primaryKey: true},
        name:{ type:STRING },
        description:{ type:TEXT },
        img:{ type:STRING },
        price:{ type:DECIMAL(10,2) },
        period:{ type:INTEGER },
        unit: { type:STRING }
    })
   
}
/////////////////////////////////////////////////////////////