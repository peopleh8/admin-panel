import { FC } from 'react'
import dynamic from 'next/dynamic'
import MetaData from '@/layout/Metadata'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
const Search = dynamic(() => import('@/components/UI/Search/Search'), { ssr: false })
import ChatInfo from '@/components/Chat/Chat'
import styles from '@/styles/Messages.module.scss'

const Messages: FC = () => {
  return (
    <div className={styles.messages}>
      <MetaData title='Messages' />
      <SectionTitle leavel={1}>Messages</SectionTitle>
      <Search />
      <ChatInfo />
    </div>
  )
}

export default Messages