import axios from 'axios'

export const getCurrentTime = () => {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `[${hours}:${minutes}]`
}

export const firstMessages = [
  {
    type: 'info',
    time: getCurrentTime(),
    text: 'Bienvenido a la aplicación de scraping'
  },
  {
    type: 'info',
    time: getCurrentTime(),
    text: 'Selecciona una opción para comenzar'
  }
]

export const handleOptionSelect = (setSelectedOption) => (option) => {
  setSelectedOption(option)
}

export const startScraping = async (setIsScraping, setFeedbackMessages, selectedOption, setDownloadLink) => {
  setIsScraping(true)
  setFeedbackMessages(prevMessages => [
    ...prevMessages,
    {
      type: 'start',
      time: getCurrentTime(),
      text: `Scraping de ${selectedOption.web} en proceso`
    }
  ])

  try {
    const response = await axios.post(`http://localhost:5000/api/scraping/test`, {
      webID: selectedOption.id,
    })

    const url = window.URL.createObjectURL(new Blob([response.data]))
    setDownloadLink(url)

    setFeedbackMessages(prevMessages => [
      ...prevMessages,
      {
        type: 'success',
        time: getCurrentTime(),
        text: `Scraping de ${selectedOption.web} completado. ${JSON.stringify(response.data)}`
      }
    ])
  } catch (error) {
    setFeedbackMessages(prevMessages => [
      ...prevMessages,
      {
        type: 'error',
        time: getCurrentTime(),
        text: `Error durante el scraping de ${selectedOption.web}: ${error.message}`
      }
    ])
  } finally {
    setIsScraping(false)
  }
}

export const cancelScraping = (setIsScraping, setFeedbackMessages) => {
  setIsScraping(false)
  setFeedbackMessages(prevMessages => [
    ...prevMessages, 
    {
      type: 'error',
      time: getCurrentTime(),
      text: `Operación cancelada por el usuario`
    }
  ])
  //  Cancelar el proceso de scraping en el backend
}
