import PlayButton from './PlayButton'
import StopButton from './StopButton'
import DownloadButton from './DownloadButton'

const PanelButtons = ({ selectedOption, isScraping, downloadLink, startScraping, cancelScraping, setIsScraping, setFeedbackMessages, setDownloadLink }) => {
  return (
    <div className='flex flex-row justify-center py-2 text-4xl'>
        <PlayButton 
          onClick={startScraping}
          selectedOption={selectedOption}
          isScraping={isScraping}
          setIsScraping={setIsScraping}
          setFeedbackMessages={setFeedbackMessages}
          setDownloadLink={setDownloadLink}
        />
        <StopButton 
          onClick={cancelScraping} 
          isScraping={isScraping} 
          setIsScraping={setIsScraping}
          setFeedbackMessages={setFeedbackMessages}
        />
        <DownloadButton 
          downloadLink={downloadLink}
          selectedOption={selectedOption}
        />
    </div>
  )
}

export default PanelButtons
