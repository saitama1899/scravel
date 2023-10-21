import { useRef, useEffect } from 'react'
import Spinner from './Loading/Spinner'

const FeedbackMessage = ({ messages, isScraping }) => {
  const container = useRef(null)
  const color = {
    start: 'text-blue-300',
    error: 'text-red-500',
    success: 'text-green-400',
    info: 'text-blue-300',
  }
  useEffect(() => {
    container.current.scrollTop = container?.current?.scrollHeight
  }, [messages])
  
  return (
    <div className="flex flex-col bg-blue-scravel flex-grow mt-4 p-4 overflow-y-auto" ref={container}>
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`flex items-center gap-2 ${color[message?.type]} transform transition-all duration-300 ease-out opacity-0 translate-y-4 animate-slideIn`}
        >
          <b>{message?.time}</b>
          {message?.text}
          { isScraping && index === messages?.length - 1 && <Spinner />}
        </div>
      ))}
    </div>
  )
}

export default FeedbackMessage;
