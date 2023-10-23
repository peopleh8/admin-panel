import { isBrowser } from '@/utils/isBrowser'

export const calcTabWidth = (swiper: any): void => {
  if (!isBrowser()) {
    return
  }
  
  let sliderIndex = swiper.activeIndex
  const slides = swiper.slides
  const parent = swiper.el.parentElement.parentElement
  const child = slides[sliderIndex]?.children[0]
  const cssWidth = window.getComputedStyle(child, null).getPropertyValue('width')

  parent.style.width = cssWidth
}