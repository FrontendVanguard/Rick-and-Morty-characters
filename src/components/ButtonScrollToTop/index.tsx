import React, { useEffect, useState } from 'react'

import { ScrollContainer } from './styles'

export const ButtonScrollToTop: React.FC = () => {
  const [isVisible, setisVisible] = useState(false)

  const onScroll = (): void => {
    setisVisible(window.pageYOffset > 200)
  }

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isVisible ? (
    <ScrollContainer onClick={scrollToTop}>
      <span>^ Go up</span>
    </ScrollContainer>
  ) : null
}
