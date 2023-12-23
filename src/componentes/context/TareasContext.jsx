import { createContext, useContext, useState } from 'react'
import { ListarTareas, BorrarTareas, CrearTareas, ListarUnaTarea, EditaTarea, ToogleTaskDoneRec, ListarInactivos } from '../../api/tareas.api'
// import { Alert } from '@mui/material'



export const TareasContext = createContext()



////////////////////para traer todo el listado

export const TareasContextProv = ({ children }) => {
    const [tareas, setTareas] = useState([])

    async function TraerTareas() {
        const respuesta = await ListarTareas()
        setTareas(respuesta.data)
    }


    // async function listarBorrados() {
    //     const respuesta = await ListarInactivos()
        
    //     setTareas(respuesta.data)
    // }


    const listarBorrados = async () => {
        try {
          const respuesta = await ListarInactivos()
            setTareas(respuesta.data)
        } catch (error) {
            console.log(error)
        }
    }


    ///////////////para borrar un registro
    const borrarTarea = async (idpaciente) => {
        try {

            const respuesta = await BorrarTareas(idpaciente)

            setTareas(tareas.filter(tarea => tarea.idpaciente !== idpaciente))

        } catch (error) {
            console.log(error)
        }
    }

    /////////////////////////////Crear un registro
    const crearRegistro = async (tarea) => {
        try {
            const response = await CrearTareas(tarea)
        } catch (error) {
            console.error(error)
        }
    }

    ///////////////Editar un registro
    const editarRegisto = async (idpaciente) => {
        try {
            const respuesta = await ListarUnaTarea(idpaciente)
            return respuesta.data
        } catch (error) {
            console.log(error)
        }
    }

    ///////////////Editar tarea

    const modificaRegistro = async (idpaciente, nuevosCampos) => {
        try {
            const respuesta = await EditaTarea(idpaciente, nuevosCampos)
            // console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }



    return <TareasContext.Provider value={{ tareas, TraerTareas, borrarTarea, crearRegistro, editarRegisto, modificaRegistro, listarBorrados }}>
        {children}
    </TareasContext.Provider>
}