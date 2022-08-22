import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const MAX_COUNT = 10

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5)

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, MAX_COUNT))
  }

  useEffect(() => {
    if (counter < MAX_COUNT) return

    console.log(
      '%cCounter reached max value!',
      'color: red; font-weight: bold;'
    )

    gsap.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
      gsap.to('h2', { y: 0, duration: 1, ease: 'bounce.out' })
    })
  }, [counter])

  return (
    <>
      <h1>CounterEffect</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
