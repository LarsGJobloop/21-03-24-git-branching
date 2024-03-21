import style from './LandingPage.module.css'
import {DisplayBears} from '../components/DisplayBears/DisplayBears'
import {ExterminateAllBearsButton} from '../components/ExterminateAllBearsButton/ExterminateAllBearsButton'
import {IncreaseBearsButton} from '../components/IncreaseBearsButton/IncreaseBearsButton'

export function LandingPage() {
  return (
    <div>
      <h1 className={style.title}>LandingPage</h1>

      <div>
        <DisplayBears />
        <IncreaseBearsButton />
        <ExterminateAllBearsButton />
      </div>

      <div>
        <DisplayBears />
        <IncreaseBearsButton />
        <ExterminateAllBearsButton />
      </div>

      <div>
        <DisplayBears />
        <IncreaseBearsButton />
        <ExterminateAllBearsButton />
      </div>

        <div>
          <DisplayBears />
          <IncreaseBearsButton />
          <ExterminateAllBearsButton />
        </div>
    </div>
  )
}