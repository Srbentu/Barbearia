import { useContext } from 'react'
import ContextoUsuario from '../context/ContextoUsuario'

const useUsuario = () => useContext(ContextoUsuario)
export default useUsuario
