import {useBearStore} from '../../stores/bearStore'

export function DisplayBears() {
  const bears = useBearStore((store) => store.bears)

  return (
    <div>Bear Count: {bears}</div>
  )
}
