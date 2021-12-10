const Paciente = ({patient, setPatient, deletePatient}) => {
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{patient.name}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{patient.owner}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{patient.email}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{patient.date}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{patient.sintoms}</span></p>

      <div className="flex justify-between py-2">
        <button type="button" onClick={() => setPatient(patient)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase">Editar</button>
        <button onClick={() => deletePatient(patient.id)} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase">Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente