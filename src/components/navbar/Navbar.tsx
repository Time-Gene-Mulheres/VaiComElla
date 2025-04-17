import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="w-full flex justify-center py-4  bg-pink-400 text-black"> 
                 		  
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold"> Vai com Ella </Link>

                    <div className='flex gap-4'>
                    <Link to='/sobrenos' className="text-2xl font-bold">Sobre nós </Link>
                      
                        <Link to='/nossoaplicativo' className="text-2xl font-bold">Nosso aplicativo</Link>
                        
                    </div>
                </div>
            </div>
       
    )
}

export default Navbar



