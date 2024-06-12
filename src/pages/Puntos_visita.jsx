import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import header from '../../header';
import { useState, useEffect, useRef } from 'react';

export default function Puntos_visita() {

    const search = useRef();
    const buscarCiudad = useRef();
    const buscarDepartamento = useRef();
    const [visita, setVisita] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [activo, setActivo] = useState(true);
    const [titulo, setTitulo] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [departamento, setDepartamento] = useState("");

    useEffect(() => {
        axios.get(`${apiUrl}ciudades`, header()).then((res) => {
            setCiudades(res.data.response);
        })
    }, [])

    useEffect(() => {
        axios.get(`${apiUrl}departamentos`, header()).then((res) => {
            setDepartamentos(res.data.response);
        })
    }, [])

    useEffect(() => {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        axios.get(`${apiUrl}puntosVisita?estado=${activo}&titulo_actividad=${titulo}&ciudad=${ciudad}&departamento=${departamento}`, headers)
            .then((res) => {
                setVisita(res.data.response);
            })
            .catch((err) => console.log(err));
    }, [activo, titulo, ciudad, departamento]);

    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PUNTOS DE VISITA </h1>
            <main className="flex flex-col">

                <Search visible={true} puntos={true} activo={activo} setActivo={setActivo} search={search} setTitulo={setTitulo} ciudades={ciudades} ciudad={buscarCiudad} setCiudad={setCiudad} departamento={buscarDepartamento} departamentos={departamentos} setDepartamento={setDepartamento} />
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[12.5%]'> ID Actividad </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Titulo De Actividad</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Descripcion De La Actividad</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Departamento</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Ciudad</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Estado </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Fecha Creacion </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Fecha Modificacion </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {visita.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.id_actividad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.titulo_actividad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.descripcion_actividad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.nombre_departamento}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.nombre_ciudad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.estado ? "ACTIVO" : "INACTIVO"}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.fecha_creacion}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.fecha_modificacion}</td>
                                </tr>
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}