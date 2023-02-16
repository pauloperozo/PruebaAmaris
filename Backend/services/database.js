const Sequelize = require("sequelize")

const { SERVICES,HOST,USER,PASSWORD,DATABASE } = process.env

/* Instanciar la Conexion*/
const sequelize = new Sequelize(DATABASE,USER,PASSWORD,{
    host:HOST,
    dialect:SERVICES,
    timezone: "-05:00"
})

/* Validar Conexion */
sequelize.authenticate().then( ( succes ) => console.log("**** Conectado Correctamente **** "), error  => {
    console.error(error) 
    process.exit(0)
})

/* Cargar Los Modelos */

/* Productos */
const ProductModel = require("../models/products")
const Product = ProductModel( sequelize )

/* Servicios */
const ServiceModel = require("../models/services")
const Service = ServiceModel( sequelize )

/* Secciones */
const SectionModel = require("../models/sections")
const Section = SectionModel( sequelize )

/* Usuarios */
const UserModel = require("../models/users")
const User = UserModel( sequelize )

/* Perfiles */
const ProfileModel = require("../models/profiles")
const Profile = ProfileModel( sequelize )

/*Relaciones */
User.hasOne(Profile,{ sourceKey:"idProfile",foreignKey:"idProfile"})
Profile.hasMany(User,{ sourceKey:"idProfile",foreignKey:"idProfile"})

/*Sincronizamos Database */
sequelize.sync({ alter: true, force: false }).then( async response =>{

    /* LLenar Con Valores De Defectos */
    const users = await User.count()
    const profiles = await Profile.count()

    if(profiles == 0 && users == 0)
    {
        const { idProfile } = await Profile.create({name:"Administrador"})
                              await Profile.create({name:"Editor"})
                              await Profile.create({name:"Lector"})

        User.create({login:"admin",password:"123",idProfile})
    }

}).catch( error => {

    console.error( error )
    process.exit(0)
    
})

module.exports = { sequelize,Product,Service,Section,User,Profile }