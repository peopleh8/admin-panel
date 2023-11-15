import { FC } from 'react'
import { useRouter } from 'next/router' 
import dynamic from 'next/dynamic'
import MetaData from '@/layout/Metadata'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
const Search = dynamic(() => import('@/components/UI/Search/Search'), { ssr: false })
import ChatInfo from '@/components/Chat/Chat'
import styles from '@/styles/Messages.module.scss'

const Chat: FC = () => {
  const { query } = useRouter()

  return (
    <div className={styles.messages}>
      <MetaData title={`Chat - ${query.id}`} />
      <SectionTitle leavel={1}>Chat - {query.id}</SectionTitle>
      <Search />
      <ChatInfo />
    </div>
  )
}

export default Chat