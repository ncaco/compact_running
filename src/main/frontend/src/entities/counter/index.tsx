import { FC } from 'react'

interface CounterProps {
  count: number
}

export const CounterEntity: FC<CounterProps> = ({ count }) => {
  return (
    <div className="counter-value">
      <span>{count}</span>
    </div>
  )
} 