const StopButton = ({ isScraping, onClick, setIsScraping, setFeedbackMessages }) => {
  const StopIcon = () => {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10H7z"></path></svg>
    )
  }
  const btnStyle = isScraping 
    ? "text-yellow-scravel bg-blue-scravel" 
    : "text-blue-scravel/30 hover:cursor-auto bg-gray-200"

  return (
    <button
      className={`${btnStyle} transition duration-300 ease-in-out`}
      onClick={() => onClick(setIsScraping, setFeedbackMessages)}
      disabled={!isScraping}
    >
      <StopIcon />
    </button>
  )
}
export default StopButton