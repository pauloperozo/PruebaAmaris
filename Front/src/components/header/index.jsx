const Header = ({module}) => {




    return (
        <nav className="bg-white shadow-lg rounded-lg">
	<div className="max-w-6xl mx-auto px-4">
		<div className="flex justify-between">
			<div className="flex space-x-7">
				<div><img className="mx-auto h-12 w-auto mt-2"  src="logo.png" alt="Workflow"/>
				</div>
				<div className="hidden md:flex items-center space-x-1">
					<a href="/home" className={module[0]}>Inicio</a>
					<a href="/services" className={module[1]}>Servicios</a>
					<a href="/products" className={module[2]}>Productos</a>
					<a href="/sections" className={module[3]}>Secciones</a>
                    <a href="/users" className={module[4]}>Usuarios</a>
				</div>
			</div>
			<div className="hidden md:flex items-center space-x-3 ">
				<a href="/" className="py-2 px-2 font-medium text-white bg-indigo-500 rounded hover:bg-purple-400 transition duration-300">Regresar</a>
			</div>
			<div className="md:hidden flex items-center">
				<button className="outline-none mobile-menu-button">
				<svg className=" w-6 h-6 text-gray-500 hover:text-purple-500 "
					x-show="!showMenu"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
			</div>
		</div>
	</div>

</nav>



)
}

export default Header
