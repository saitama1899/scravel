const DownloadButton = ({ downloadLink, selectedOption }) => {
  const DownloadIcon = () => {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path></svg>
    )
  }
  const handleDownload = (downloadLink) => {
    // if (downloadLink) {
    //   const link = document.createElement('a')
    //   link.href = downloadLink
    //   link.setAttribute('download', `data-${selectedOption.id}.xlsx`)
    //   document.body.appendChild(link)
    //   link.click()
    //   console.log(link)
    // }
  }
  const btnStyle = downloadLink 
    ? "text-yellow-scravel bg-blue-scravel" 
    : "text-blue-scravel/30 hover:cursor-not-allowed bg-gray-200"

  return (
    <button 
      onClick={() => handleDownload(downloadLink)}
      disabled={!downloadLink} 
      className={`${btnStyle} text-lg flex gap-2 items-center ml-6 px-4 transition duration-300 ease-in-out`}
    >
      <b>Descargar</b>
      <span className='text-2xl'><DownloadIcon /></span>
    </button>
  )
}

export default DownloadButton