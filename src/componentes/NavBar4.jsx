import { Link } from 'react-router-dom'
import { useState } from 'react'


const NavBar4 = () => {
  const [abierto, setAbierto] = useState('hidden')
  const [open, setOpen] = useState(false)
  // const [activos, setActivos] =useState(true)
let activos = false
  

  const xLink = 'transition ease-in-out delay-100 md:px-5 hover:text-sky-500 hover:bg-blue-100 hover:-translate-y-1 hover:scale-110'

  const xLinkChico = 'transition ease-in-out delay-100 md:px-5 hover:text-sky-500  hover:-translate-y-2 hover:scale-10 py-3 pr-2 mr-5 text-right mb-2'

  return (
    <>
      {/* <SideBar/> */}
      {/* <header className="container-fluid bg-primary d-flex justify-content-center">
<p className="bg-indigo-500">hdhdhhdh</p>
    </header> */}

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light "> */}
      {/* <div className="container-fluid "> */}
      <nav id='menu' className="flex justify-between p-3 m-auto px-0 text-lg font-bold tracking-widest md:items-center bg-slate-100 ">
        <a href=""><img src="../../imagenes/logo.jfif" className='container p-3 w-3/4' alt="" /></a>
        <div
          id='menu'
          className={'bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] md:flex flex-col items-start justify-around rounded-lg text-dark dark:text-white md:flex-row md:w-full md:py-0 md:h-[50px] md:bg-inherit md:dark:bg-primary ' + abierto} >
          <ul className='flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full'>
            <li className={xLink}><Link to='/'>Principal</Link></li>
            <li className={xLink}><Link to='/new'>Ingresar</Link></li>
            <li className={xLink}><Link to='/tabla'>Listados</Link></li>
            {/* <li className={xLink} onClick={() => activos=false}><Link to='/tablainac'>Tabla</Link></li> */}
          </ul>
          {/* <button id='darkButton'>
            <img src="../../imagenes/moon-stars-fill.svg " className='text-sky-600' alt="" />
          </button> */}


        </div>
        {/* <button id='menuButton' className='absolute top-10 right-12 md:hidden  ' onClick={() => setOpen(true)}>
          <img src={abierto != 'hidden' ? "../../imagenes/x-square-fill.svg" : "../../imagenes/list.svg"} alt="" />
        </button> */}
      </nav>


      {/* <div className={`${!open && 'hidden'} bg-gray-700/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div> */}



      {/* lateral */}


      {/* <div className={`${!open && 'hidden'} bg-gray-500/20 min-h-screen w-full fixed top-0 left-0 right-10 backdrop-blur-sm`} onClick={() => setOpen(false)}></div> */}

      {/* <div className={`${open ? 'w-60 ' : 'w-0 '}bg-cyan-200  absolute inset-y-0 right-0 transition-all  duration-300 h-full`}> */}
        {/* <div className={`${!open && 'hidden '} pt-3`}> */}
          {/* <button className='m-5'>
            <img src="../../imagenes/x-square-fill.svg" alt="" onClick={() => setOpen(false)} />
          </button> */}
          {/* <ul className='flex h-5/6 flex-col justify-around md:flex-col md:justify-center w-full'>
            <li className=' md:px-5 hover:text-sky-500   py-3 pr-0 mr-1 text-right '>
              <button className='m-5'>
                <img src="../../imagenes/x-square-fill.svg" alt="" onClick={() => setOpen(false)} />
              </button>
            </li>
            <li className={xLinkChico} onClick={() => setOpen(false)}><Link to='/'>Principal</Link></li>
            <li className={xLinkChico} onClick={() => setOpen(false)}><Link to='/new'>Ingresar</Link></li>
            <li className={xLinkChico} onClick={() => setOpen(false)}><Link to='/tabla'>Tabla</Link></li>
            <li className={xLinkChico} onClick={() => setOpen(false)}><Link to='/agenda'>Agenda</Link></li>
          </ul> */}
        {/* </div> */}
      {/* </div> */}



      {/* <a className="navbar-brand" href="#">
            <span className='bg-neutral-400'></span> 
            <span className='text-primary fs-5 fw-bold'></span> 
            <span className='text-primary fs-5 fw-bold'> </span>
            <span className='text-primary fs-5 fw-bold'></span> 
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Principal</a>
                <Link to='/'>Principal</Link>
              </li>

              <li className="nav-item">
               
                <Link to='/new'>Ingresar</Link>
              </li>
              <li className="nav-item">
                <Link to='/tabla'>Tabla de registros</Link>
              </li>

              <li className="nav-item">
                <a ><Link to='/agenda'>Agenda</Link></a>
                
              </li>

            </ul> */}
      {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
      {/* </div> */}
      {/* </div> */}
      {/* </nav> */}
    </>
  )
}

export default NavBar4