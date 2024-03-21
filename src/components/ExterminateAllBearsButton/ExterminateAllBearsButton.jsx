import {useBearStore} from '../../stores/bearStore'

export function ExterminateAllBearsButton() {
  const exterminateAllBears = useBearStore((store) => store.exterminateAllBears)

  return (
    <button onClick={exterminateAllBears}>Increase Population</button>
  )
}
