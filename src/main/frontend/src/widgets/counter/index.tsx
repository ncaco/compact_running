import { Counter } from '@features/counter'
import { Logo } from '@shared/ui/logo'

export const CounterWidget = () => {
  return (
    <div className="counter-widget">
      <Logo />
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}