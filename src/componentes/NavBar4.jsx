import { Link } from 'react-router-dom'
import { useState } from 'react'


const NavBar4 = () => {
  const [abierto, setAbierto] = useState('hidden')
 
  

  const xLink = 'transition ease-in-out delay-100 md:px-5 hover:text-sky-500 hover:bg-blue-100 hover:-translate-y-1 hover:scale-110'

  const xLinkChico = 'transition ease-in-out delay-100 md:px-5 hover:text-sky-500  hover:-translate-y-2 hover:scale-10 py-3 pr-2 mr-5 text-right mb-2'

  return (
    <>  
      <nav id='menu' className="flex justify-between p-3 m-auto px-0 text-lg font-bold tracking-widest md:items-center bg-slate-100 ">
        <a href=""><img src="../../imagenes/logo.jfif" className='container p-3 w-3/4' alt="" /></a>
        <div
          id='menu'
          className={'bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] md:flex flex-col items-start justify-around rounded-lg text-dark dark:text-white md:flex-row md:w-full md:py-0 md:h-[50px] md:bg-inherit md:dark:bg-primary ' + abierto} >
          <ul className='flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full'>
            <li className={xLink}><Link to='/'>Principal</Link></li>
            <li className={xLink}><Link to='/new'>Ingresar</Link></li>
            <li className={xLink}><Link to='/tabla'>Listados</Link></li>    
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar4