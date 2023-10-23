import { v4 as uuidv4 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'
import { formatDate } from '@/utils/formatDate'

const eventsReducer = createSlice({
  name: 'events',
  initialState: {
    isCreateEventModalOpen: false,
    isCreateEventNewModalOpen: false,
    isCreateEventTemplateModalOpen: false,
    isInfoModalOpen: false,
    startDate: new Date().toISOString(),
    oldEventId: '',
    newEventStart: '',
    newEventEnd: '',
    createNewStartDate: new Date().toISOString(),
    createTemplateStartDate: new Date().toISOString(),
    isOpenCreateNewDatepicker: false,
    isOpenCreateTemplateDatepicker: false,
    events: [
      {
        id: uuidv4(),
        title: 'Port Du Soleil 17:00-20:00',
        start: '2023-10-05',
        end: '2023-10-06',
      },
      {
        id: uuidv4(),
        title: 'Port Du Soleil 17:00-20:00',
        start: '2023-10-06',
        end: '2023-10-06',
      },
      {
        id: uuidv4(),
        title: 'Port Du Soleil 17:00-20:00',
        start: '2023-10-07',
        end: '2023-10-06',
      },
      {
        id: uuidv4(),
        title: 'Port Du Soleil 17:00-20:00',
        start: '2023-10-08',
        end: '2023-10-06',
      },
      {
        id: uuidv4(),
        title: 'Port Du Soleil 17:00-20:00',
        start: '2023-10-09',
        end: '2023-10-06',
      },
    ]
  },
  reducers: {
    setCreateEventModal(state, action) {
      state.isCreateEventModalOpen = action.payload
    },
    setCreateEventNewModal(state, action) {
      state.isCreateEventNewModalOpen = action.payload
    },
    setCreateEventTemplateModal(state, action) {
      state.isCreateEventTemplateModalOpen = action.payload
    },
    setInfoModalOpen(state, action) {
      state.isInfoModalOpen = action.payload
    },
    changeDate(state, action) {
      state.startDate = action.payload
    },
    changeCreateNewDate(state, action) {
      state.createNewStartDate = action.payload
    },
    changeCreateTemplateDate(state, action) {
      state.createTemplateStartDate = action.payload
    },
    setOpenCreateNewDatepicker(state, action) {
      state.isOpenCreateNewDatepicker = action.payload 
    },
    setOpenCreateTemplateDatepicker(state, action) {
      state.isOpenCreateTemplateDatepicker = action.payload
    },
    eventDrag(state, action) {
      const { publicId } = action.payload.event._def
      // const { holiday } = action.payload.event._def.extendedProps
      const { start: newStart, end: newEnd } = action.payload.event._instance.range
      const newStartFormated = formatDate(newStart)
      const newEndFormated = formatDate(newEnd)

      state.events = state.events.map(event => ({
        ...event, 
        start: event.id === publicId ? newStartFormated : event.start,
        end: event.id === publicId ? newEndFormated : event.end,
      }))
    },
    eventClick(state, action) {
      const { publicId } = action.payload.event._def
      // const { holiday } = action.payload.event._def.extendedProps

      state.oldEventId = publicId
      state.isInfoModalOpen = true
    },
    dateSelect(state, action) {
      const { startStr, endStr } = action.payload

      state.newEventStart = startStr
      state.newEventEnd = endStr
      state.isCreateEventModalOpen = true
    },
    eventResize(state, action) {
      const { publicId } = action.payload.event._def
      const { end: newEnd } = action.payload.event._instance.range

      const newEndFormated = formatDate(newEnd)

      state.events = state.events.map(event => ({
        ...event, 
        end: event.id === publicId ? newEndFormated : event.end,
      }))
    },
  }
})

export default eventsReducer.reducer
export const { 
  setCreateEventModal, 
  setCreateEventNewModal, 
  setCreateEventTemplateModal,
  setInfoModalOpen,
  changeDate, 
  changeCreateNewDate,
  changeCreateTemplateDate,
  setOpenCreateNewDatepicker,
  setOpenCreateTemplateDatepicker,
  eventDrag,
  eventClick,
  dateSelect,
  eventResize
} = eventsReducer.actions