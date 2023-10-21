import options from '../../db/options'

const OptionList = ({ onSelect, selectedOption, disabled }) => {
  const optionStyle = "px-4 py-2 min-w-[150px] cursor-pointer text-center transition duration-300 ease-in-out"
  const selectedStyle = "bg-yellow-scravel hover:bg-yellow-scravel"
  const noneSelectedStyle = disabled 
    ? "text-blue-scravel/30 hover:cursor-progress bg-gray-200" 
    : "bg-gray-300 hover:bg-yellow-scravel/40"

  return (
    <div className='flex gap-6 flex-row flex-wrap justify-center px-4 py-4 border-b-gray-800 text-sm'>
      {options.map((option, index) => (
        <div 
          key={option.web + option.type} 
          className={`
            ${optionStyle} 
            ${option === selectedOption 
              ? selectedStyle 
              : noneSelectedStyle
            }
          `}
          onClick={() => !disabled && onSelect(option)}
        >
          <span className='font-medium'>
            {option.web}
          </span> - {option.type}
        </div>
      ))}
    </div>
  )
}

export default OptionList
