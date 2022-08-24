import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5)
  const elementToAnimate = useRef<any>(null)

  const timeline = useRef(gsap.timeline())

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, maxCount))
  }

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
      })
      .pause()
  }, [])

  useEffect(() => {
    // if (counter < maxCount) return

    // console.log(
    //   '%cCounter reached max value!',
    //   'color: red; font-weight: bold;'
    // )

    timeline.current.play(0)
  }, [counter])

  return {
    counter,
    elementToAnimate,
    handleClick,
  }
}
