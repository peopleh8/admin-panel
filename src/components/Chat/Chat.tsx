import { FC } from 'react'
import ChatBlock from '@/components/Chat/ChatBlock'
import ChatMenu from '@/components/Chat/ChatMenu'
// import ChatGreen from '@/components/Chat/ChatGreen'
import styles from '@/components/Chat/Chat.module.scss'

const Chat: FC = () => {
  return (
    <div className={styles.chat}>
      <ChatMenu />
      <ChatBlock />
      {/* <ChatGreen /> */}
    </div>
  )
}

export default Chat