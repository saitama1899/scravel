const PlayButton = ({ selectedOption, isScraping, onClick, setIsScraping, setFeedbackMessages, setDownloadLink }) => {
  const PlayIcon = () => {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 6v12l10-6z"></path></svg>
    )
  }
  const btnStyle = isScraping 
    ? "text-blue-scravel/30 hover:cursor-progress bg-gray-200" 
    : "text-yellow-scravel bg-blue-scravel"
  
  return (
    <button
      className={`${btnStyle} transition duration-300 ease-in-out`}
      onClick={() => onClick(setIsScraping, setFeedbackMessages, selectedOption, setDownloadLink)}
      disabled={isScraping || !selectedOption}
    >
      <PlayIcon />
    </button>
  )
}

export default PlayButton