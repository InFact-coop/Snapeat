import * as R from 'ramda'
import R_ from '../../utils/R_'
import { RadioInput } from '../Input'
import OnboardingStep, { SubQuestion } from './OnboardingStep'

const tooltipContents = (
  <>
    <p className="mb-5">
      At the Snapeat Project we want to learn what children in Lambeth and
      Southwark are eating when they are at home.
    </p>
    <p className="mb-5">
      By securely sharing this additional information, you will help us to make
      sure we are hearing and learning from a range of different households.
    </p>
  </>
)

const AgeComponent = (_, i) => (
  <div key={`age-${i}`} className="mb-5">
    <SubQuestion className="mb-4">Age range — Child {i + 1}</SubQuestion>

    <RadioInput name={`age-${i}`} id={`age-${i}-0-4`} value="0-4">
      0 - 4
    </RadioInput>
    <RadioInput name={`age-${i}`} id={`age-${i}-5-8`} value="5-8">
      5 - 8
    </RadioInput>
    <RadioInput name={`age-${i}`} id={`age-${i}-9-12`} value="9-12">
      9 - 12
    </RadioInput>
    <RadioInput name={`age-${i}`} id={`age-${i}-13-15`} value="13-15">
      13 - 15
    </RadioInput>
    <RadioInput name={`age-${i}`} id={`age-${i}-16-18`} value="16-18">
      16 - 18
    </RadioInput>
  </div>
)

const ageQuestions = R.pipe(
  parseInt,
  numberOfChildren => [...Array(numberOfChildren)],
  R_.mapIndexed(AgeComponent),
)

const Ages = ({ values: { numberOfChildren } }) => (
  <OnboardingStep
    {...{
      h1: 'Awesome.',
      h2: 'Next question:',
      question: 'How old are your kids?',
      tooltipTitle: 'Why do we need this information?',
      tooltipContents,
      className: 'pb-36',
    }}
  >
    {ageQuestions(numberOfChildren)}
  </OnboardingStep>
)

Ages.componentName = 'Ages'

export default Ages
