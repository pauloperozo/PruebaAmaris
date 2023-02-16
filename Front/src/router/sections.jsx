import Header from "../components/header"
/////////////////////////////////////
const Sections = ( ) => {
    
    const module = [
        "py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300",
        "py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300",
        "py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300",
        "py-4 px-2 text-purple-500 border-b-4 border-purple-500 font-semibold",
        "py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
    ]

    return(
        <div className="container mx-auto mt-5">
           <Header module={module} />
           <hr></hr>
           <img src="trabajando.png"/>
        </div>
    )

}
/////////////////////////////////////
export default Sections
/////////////////////////////////////