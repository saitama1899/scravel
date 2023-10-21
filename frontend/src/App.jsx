import { useState } from 'react'
import OptionList from './components/Option/OptionList'
import OptionInfo from './components/Option/OptionInfo'
import FeedbackMessage from './components/FeedbackMessage'
import Header from './components/Header'
import PanelButtons from './components/Button/PanelButtons'
import options from './db/options'
import { handleOptionSelect, startScraping, cancelScraping, firstMessages } from './utils/utils'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [isScraping, setIsScraping] = useState(false)
  const [feedbackMessages, setFeedbackMessages] = useState(firstMessages)
  const [downloadLink, setDownloadLink] = useState(null)

  return (
    <div className="h-screen bg-gradient-to-r flex flex-col">
      <Header />
      <OptionInfo 
        selectedOption={selectedOption} 
      />
      <OptionList 
        onSelect={handleOptionSelect(setSelectedOption)} 
        selectedOption={selectedOption} 
        disabled={isScraping} 
      />
      <PanelButtons 
        selectedOption={selectedOption} 
        isScraping={isScraping} 
        downloadLink={downloadLink}
        setIsScraping={setIsScraping}
        setFeedbackMessages={setFeedbackMessages}
        setDownloadLink={setDownloadLink}
        startScraping={startScraping} 
        cancelScraping={cancelScraping} 
      />
      <FeedbackMessage 
        messages={feedbackMessages} 
        isScraping={isScraping} 
      />
    </div>
  )
}

export default App