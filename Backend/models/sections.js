/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {TEXT,UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('section',{
        idSection: { type: UUID,defaultValue:UUIDV4,primaryKey: true},
        description:{ type:TEXT }
    })
   
}
/////////////////////////////////////////////////////////////