import { useEffect, useState } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    if(localStorage.getItem('patients')) {
      setPatients(JSON.parse(localStorage.getItem('patients')))
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
    setPatients(patients.filter(patientState => patientState.id !== id))
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario patients={patients} patient={patient} setPatients= {setPatients} />
        <ListadoPacientes patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
