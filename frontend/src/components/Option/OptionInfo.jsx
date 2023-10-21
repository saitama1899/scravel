const OptionInfo = ({ selectedOption }) => {
  return (
    <div className="pb-6 pt-8 flex justify-center gap-4">
      <div className="text-2xl rounded-full bg-gray-800 p-2">
        {selectedOption?.icon}
      </div>
      <div>
        <div className="font-semibold">{selectedOption?.web}</div>
        <p>{selectedOption?.info}</p>
      </div>
    </div>
  )
}

export default OptionInfo