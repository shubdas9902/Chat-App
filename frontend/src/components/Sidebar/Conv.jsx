import React from 'react'
import Conversation from './Conversation.jsx'

const Conv = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    </div>
  )
}

export default Conv