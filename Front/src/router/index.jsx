/////////////////////////////////////
import { useEffect } from "react"
import axios from "axios"
/////////////////////////////////////
const Index = ( ) => {

    /*Iniciar la App Cargar la url del Backend */
    useEffect(()=> {

      localStorage.setItem("baseURL",`http://localhost:3000`)
      localStorage.removeItem("token")
      localStorage.removeItem("idUser")

    },[])

    const handleSubmit = async ( event ) => {
      event.preventDefault()
      
      const form = { 
        login: event.target.login.value,
        password: event.target.password.value
      }

      event.target.reset()

      try {
        const response = await axios.post(`${localStorage.getItem("baseURL")}/auth/login`,form)      
        if( response.status === 200)
        {
            /*Set Token IdUser y Redir */
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("idUser",response.data.idUser)
            window.location.href = "/home"
        }
      } 
      catch (error) { alert("Credenciales Invalidas")}

  }        
  

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
		<div className="max-w-md w-full space-y-8 bg-gray-50 shadow-slate-800 shadow rounded-lg py-10 px-5">
			<div>
				<img className="mx-auto h-12 w-auto"  src="logo.png" alt="Workflow"/>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Ingresa a tu cuenta
				</h2>
			</div>
			<form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
				<input type="hidden" name="remember" value="True"/>
				<div className="rounded-md shadow-sm -space-y-px">
					<div>
						<label for="email-address" className="sr-only">Username</label>
						<input id="email-address" name="login" type="text" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Username"/>
					</div>
					<div>
						<label for="password" className="sr-only">Password</label>
						<input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Password"/>
					</div>
				</div>
				<div>
					<button type="submit" className="group font-black relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
							<svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
								<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
							</svg>
						</span>
						Login
					</button>
				</div>
			</form>
		</div>
	</div>
  )

}
/////////////////////////////////////
export default Index
/////////////////////////////////////