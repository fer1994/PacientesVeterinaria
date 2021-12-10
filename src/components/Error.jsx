const Error = ({children}) => {
  return (
    <div className="bg-red-600 text-white p-3 text-center font-bold mb-3 uppercase rounded-md">
      {children}
    </div>
  )
}

export default Error