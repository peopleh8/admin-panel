import { FC } from 'react'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import EventBtns from '@/components/EventBtns/EventBtns'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { 
  setCreateEventNewModal, 
  setCreateEventTemplateModal 
} from '@/store/reducers/eventsReducer'
import styles from '@/components/Dashboard/Controls/Controls.module.scss'

const Controls: FC = () => {
  const dispatch = useTypedDispatch()

  const createNewHandler = () => {
    dispatch(setCreateEventNewModal(true))
  }

  const createTemplateHandler = () => {
    dispatch(setCreateEventTemplateModal(true))
  }
  
  return (
    <div className={styles.controls}>
      <SectionTitle leavel={3}>Create Event</SectionTitle>
      <EventBtns
        createNewHandler={createNewHandler}
        createTemplateHandler={createTemplateHandler}
      />
    </div>
  )
}

export default Controls