import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import CreateEventGeneral from '@/components/CreateEvent/CreateEventGeneral'
import CreateEventNew from '@/components/CreateEvent/CreateEventNew'
import CreateEventTemplate from '@/components/CreateEvent/CreateEventTemplate'
import { calcTabWidth } from '@/utils/calcTabWidth'
import styles from '@/components/CreateEvent/CreateEvent.module.scss'
import 'swiper/css'
import 'swiper/css/effect-fade'

const CreateEvent: FC = () => {
  const tab = useRef<any>(null)
  
  const createNewHandler = () => {
    tab.current.swiper.slideTo(1)
  }

  const createTemplateHandler = () => {
    tab.current.swiper.slideTo(2)
  }

  return (
    <div className={styles.create}>
      <Swiper
        modules={ [EffectFade] }
        ref={tab}
        className='tab-slider'
        spaceBetween={0}
        slidesPerView={'auto'}
        autoHeight={true}
        allowTouchMove={false}
        speed={500}
        effect='fade'
        onInit={calcTabWidth}
        onSlideChange={calcTabWidth}
      >
        <SwiperSlide>
          <CreateEventGeneral
            createNewHandler={createNewHandler}
            createTemplateHandler={createTemplateHandler}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CreateEventNew />
        </SwiperSlide>
        <SwiperSlide>
          <CreateEventTemplate />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CreateEvent