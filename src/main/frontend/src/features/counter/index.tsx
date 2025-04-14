import { useState } from 'react'
import { CounterEntity } from '@entities/counter'
import { Button } from '@shared/ui/button'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1)

  return (
    <div className="counter">
      <CounterEntity count={count} />
      <div className="card">
        <Button onClick={increment}>count is {count}</Button>
        <p>
          Edit <code>src/features/counter/index.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
} 