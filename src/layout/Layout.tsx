import { FC } from 'react'
import { ChildProp } from '@/types/commonTypes'
import { leagueSpartan } from '@/fonts/fonts'
import Sidebar from '@/components/Sidebar/Sidebar'
import Modal from '@/components/UI/Modal/Modal'
import CreateEvent from '@/components/CreateEvent/CreateEvent'
import CreateEventNew from '@/components/CreateEvent/CreateEventNew'
import CreateEventTemplate from '@/components/CreateEvent/CreateEventTemplate'
import AddSchedule from '@/components/AddSchedule/AddSchedule'
import Logout from '@/components/Logout/Logout'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { 
  setCreateEventModal, 
  setCreateEventNewModal, 
  setCreateEventTemplateModal,
  setInfoModalOpen
} from '@/store/reducers/eventsReducer'
import { 
  setAddModalOpen,
  setRemoveModalOpen, 
  setLogoutModal 
} from '@/store/reducers/profileReducer'
import RemoveSchedule from '@/components/RemoveSchedule/RemoveSchedule'
import InfoEvent from '@/components/InfoEvent/InfoEvent'
import Greet from '@/components/Greet/Greet'

const Layout: FC<ChildProp> = ({ children }) => {
  const {
    isCreateEventModalOpen, 
    isCreateEventNewModalOpen, 
    isCreateEventTemplateModalOpen,
    isInfoModalOpen
  } = useTypedSelector(state => state.events)
  const {
    isAuth,
    isOpenGreet,
    isAddModalOpen,
    isRemoveModalOpen,
    isLogoutModalOpen
  } = useTypedSelector(state => state.profile)

  return (
    <div className={`wrapper ${leagueSpartan.className} ${!isAuth ? 'no-pad' : ''}`}>
      { isAuth && (
        <>
          { isOpenGreet && <Greet /> }
          <Modal 
            isOpen={isCreateEventModalOpen}
            setOpen={setCreateEventModal}
          >
            <CreateEvent />
          </Modal>
          <Modal 
            isOpen={isCreateEventNewModalOpen}
            setOpen={setCreateEventNewModal}
          >
            <CreateEventNew />
          </Modal>
          <Modal 
            isOpen={isCreateEventTemplateModalOpen}
            setOpen={setCreateEventTemplateModal}
          >
            <CreateEventTemplate />
          </Modal>
          <Modal
            isOpen={isInfoModalOpen}
            setOpen={setInfoModalOpen}
          >
            <InfoEvent />  
          </Modal>
          <Modal 
            isOpen={isAddModalOpen}
            setOpen={setAddModalOpen}
            centered
          >
            <AddSchedule />
          </Modal>
          <Modal 
            isOpen={isRemoveModalOpen}
            setOpen={setRemoveModalOpen}
            centered
          >
            <RemoveSchedule />
          </Modal>
          <Modal 
            isOpen={isLogoutModalOpen}
            setOpen={setLogoutModal}
            centered
          >
            <Logout />
          </Modal>
          <Sidebar 
            isOpen={[
              isOpenGreet,
              isCreateEventModalOpen, 
              isCreateEventNewModalOpen, 
              isCreateEventTemplateModalOpen, 
              isAddModalOpen,
              isRemoveModalOpen,
              isLogoutModalOpen,
              isInfoModalOpen
            ]}
          />
        </>
      ) }
      <main 
        className='main'
      >
        {children}
      </main>
    </div>
  )
}

export default Layout