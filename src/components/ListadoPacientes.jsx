import Paciente from './Paciente'

const ListadoPacientes = ({patients, setPatient, deletePatient})  => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen w-full overflow-y-auto">


      {patients && patients.length > 0 ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-3 mb-10 text-center" >Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
          {patients.map(patient => <Paciente key={patient.id} patient={patient} setPatient={setPatient} deletePatient={deletePatient} />)}
        </>
       ) : (
         <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-xl mt-3 mb-10 text-center" >Comienza agregando pacientes <span className="text-indigo-600 font-bold">y apareceran  en este lugar</span></p>
         </>
       )}      
    </div>
  )

}

export default ListadoPacientes