import {useBearStore} from '../../stores/bearStore'

export function IncreaseBearsButton() {
  const increasePopulation = useBearStore((store) => store.increasePopulation)

  return (
    <button onClick={increasePopulation}>Increase Population</button>
  )
}
