import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ setPatients, patients, patient })  => {

  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [sintoms, setSintoms] = useState('')
  const [error, setError] = useState(false)

  useEffect( () => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSintoms(patient.sintoms)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    if([name, owner,email, date, sintoms].includes('')) {
      setError(true)
      return
    }
    if (patient.id) {
      const auxPatient = patients.map( patientState => {
        if (patientState.id === patient.id) {
          return { id: patient.id,name, owner, email, date, sintoms }
        } else {
          return patientState
        }
      })
      setPatients(auxPatient)
    } else {
      setPatients([...patients, {id: generateId(),name, owner, email, date, sintoms}])
    }

    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSintoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-3 mb-10 text-center">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

        {error && (
          <Error><p>Todos los campos son obligatorios</p></Error>
        ) }

        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input id="name" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la Mascota" 
            value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input id="owner" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" 
            value={owner} onChange={(e) => setOwner(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email Contacto"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Fecha alta</label>
          <input id="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" placeholder="Fecha de alta" 
            value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="sintoms" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <textarea id="sintoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"
            value={sintoms} onChange={(e) => setSintoms(e.target.value)}  />
        </div>

        <input type="submit" value={ patient.id ? 'Editar Paciente' : 'Agregar Nuevo Paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer
          transition-colors"/>
      </form>
    </div>
  )
}

export default Formulario
