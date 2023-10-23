import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { SchedulePositions } from '@/types/profileTypes'
import { daysOfWeek } from '@/constants/daysOfWeek'

const profileReducer = createSlice({
  name: 'profile',
  initialState: {
    isAuth: true,
    isOpenGreet: false,
    isEditable: false,
    isAddModalOpen: false,
    isRemoveModalOpen: false,
    isLogoutModalOpen: false,
    photoes: [
      {
        id: uuidv4(),
        path: '/assets/images/gallery-1.png'
      },
      {
        id: uuidv4(),
        path: '/assets/images/gallery-1.png'
      },
      {
        id: uuidv4(),
        path: '/assets/images/gallery-1.png'
      },
      {
        id: uuidv4(),
        path: '/assets/images/gallery-1.png'
      },
    ],
    uploadPhotoes: [
      {
        id: uuidv4(),
        path: ''
      },
      {
        id: uuidv4(),
        path: ''
      },
      {
        id: uuidv4(),
        path: ''
      },
      {
        id: uuidv4(),
        path: ''
      },
    ],
    schedule: [
      {
        id: uuidv4(),
        name: daysOfWeek[0],
        start: '16:00',
        end: '20:00',
      },
      {
        id: uuidv4(),
        name: daysOfWeek[1],
        start: '16:00',
        end: '20:00',
      },
      {
        id: uuidv4(),
        name: daysOfWeek[2],
        start: '16:00',
        end: '20:00',
      },
      {
        id: uuidv4(),
        name: daysOfWeek[3],
        start: '16:00',
        end: '20:00',
      },
      {
        id: uuidv4(),
        name: daysOfWeek[4],
        start: '16:00',
        end: '20:00',
      },
      {
        id: uuidv4(),
        name: daysOfWeek[5],
        start: '16:00',
        end: '20:00',
      },
      {
        id: uuidv4(),
        name: daysOfWeek[6],
        start: '16:00',
        end: '20:00',
      },
    ],
    selectedSchedule: {
      id: '',
      name: '',
      start: '',
      end: '',
    },
    missingSchedule: [{
      id: '',
      day: '',
      isActive: false
    }],
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload
    },
    setOpenGreet(state, action) {
      state.isOpenGreet = action.payload
    },
    setEditable(state, action) {
      state.isEditable = action.payload
    },
    setAddModalOpen(state, action) {
      state.isAddModalOpen = action.payload
    },
    setRemoveModalOpen(state, action) {
      state.isRemoveModalOpen = action.payload
    },
    setLogoutModal(state, action) {
      state.isLogoutModalOpen = action.payload
    },
    changeSchedule(state, action) {
      const { payload } = action

      state.schedule = state.schedule.map(item => ({
        ...item,
        start: (item.id === payload.id && payload.position === SchedulePositions.Start) ? payload.value : item.start,
        end: (item.id === payload.id && payload.position === SchedulePositions.End) ? payload.value : item.end 
      }))
    },
    removeSchedule(state, action) {
      state.schedule = state.schedule.filter(item => (item.id !== action.payload))
    },
    addPhoto(state, action) {
      const { id, imageURL } = action.payload

      state.photoes = state.photoes.map(photo => ({
        ...photo,
        path: photo.id === id ? imageURL : photo.path
      }))
    },
    removePhoto(state, action) {
      state.photoes = state.photoes.map(item => ({
        ...item,
        path: item.id === action.payload ? '' : item.path
      }))
    },
    addUploadPhoto(state, action) {
      const { id, imageURL } = action.payload

      state.uploadPhotoes = state.uploadPhotoes.map(photo => ({
        ...photo,
        path: photo.id === id ? imageURL : photo.path
      }))
    },
    removeUploadPhoto(state, action) {
      state.uploadPhotoes = state.uploadPhotoes.map(item => ({
        ...item,
        path: item.id === action.payload ? '' : item.path
      }))
    },
    setMissingSchedule(state) {
      state.missingSchedule = daysOfWeek.filter(day => !state.schedule.some(item => item.name === day)).map(day => ({
        id: uuidv4(),
        day,
        isActive: false,
      }))
    },
    selectMissingSchedule(state, action) {
      state.missingSchedule = state.missingSchedule.map(day => ({
        ...day,
        isActive: day.id === action.payload
      }))
    },
    addMissingShedule(state, action) {
      const activeEl = state.missingSchedule.find(item => item.isActive)
      const { start, end } = action.payload

      if (activeEl) {
        state.schedule = [
          ...state.schedule, 
          { id: uuidv4(), name: activeEl?.day, start, end, }
        ]
        state.schedule.sort((a, b) => daysOfWeek.indexOf(a.name) - daysOfWeek.indexOf(b.name))
      }
    },
    setSelectedSchedule(state, action) {
      const selectedEl = state.schedule.filter(item => item.id === action.payload)[0]

      state.selectedSchedule = selectedEl
    }
  }
})

export default profileReducer.reducer
export const { 
  setAuth,
  setOpenGreet,
  setEditable, 
  setAddModalOpen,
  setRemoveModalOpen,
  setLogoutModal,
  changeSchedule, 
  removeSchedule,
  removePhoto,
  addPhoto,
  addUploadPhoto,
  removeUploadPhoto,
  setMissingSchedule,
  selectMissingSchedule,
  addMissingShedule,
  setSelectedSchedule
} = profileReducer.actions