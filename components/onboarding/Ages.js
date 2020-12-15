import { useEffect } from 'react'
import * as Yup from 'yup'
import { FieldArray, Field } from 'formik'
import * as R from 'ramda'
import R_ from '../../utils/R_'
import createArrayOfLength from '../../utils/createArrayOfLength'

import { NEXT_NOT_ATTEMPTED } from '../../utils/constants'

import { RadioInput } from '../Input'
import OnboardingStep, { SubQuestion } from './OnboardingStep'

const validation = Yup.object().shape({
  ages: Yup.array().of(
    Yup.string().test(
      'childs-age-selected',
      "Please make sure you have selected your child's age",
      value => !!value,
    ),
  ),
})

const tooltipContents = (
  <>
    <p className="mb-5">
      At the SnapEat Project we want to learn what children in Lambeth and
      Southwark are eating when they are at home.
    </p>
    <p className="mb-5">
      By securely sharing this additional information, you will help us to make
      sure we are hearing and learning from a range of different households.
    </p>
  </>
)

const AgesError = ({ name }) => (
  <Field
    name={name}
    render={({ meta: { value, error }, form: { status } }) =>
      value || status === NEXT_NOT_ATTEMPTED ? null : (
        <div className="error text-red">{error}</div>
      )
    }
  />
)

const AgeComponent = (_, i) => {
  return (
    <div key={`ages.${i}`} className="mb-5 w-full">
      <SubQuestion className="mb-4">Age range — Child {i + 1}</SubQuestion>

      <RadioInput name={`ages.${i}`} id={`ages.${i}-0-4`} value="0-4">
        0 - 4
      </RadioInput>
      <RadioInput name={`ages.${i}`} id={`ages.${i}-5-8`} value="5-8">
        5 - 8
      </RadioInput>
      <RadioInput name={`ages.${i}`} id={`ages.${i}-9-12`} value="9-12">
        9 - 12
      </RadioInput>
      <RadioInput name={`ages.${i}`} id={`ages.${i}-13-15`} value="13-15">
        13 - 15
      </RadioInput>
      <RadioInput name={`ages.${i}`} id={`ages.${i}-16-18`} value="16-18">
        16 - 18
      </RadioInput>
      <AgesError name={`ages.${i}`} />
    </div>
  )
}

const childrenQuestions = R.pipe(
  createArrayOfLength,
  R_.mapIndexed(AgeComponent),
)

const Ages = ({ values: { numberOfChildren }, setFieldValue }) => {
  useEffect(() => {
    setFieldValue('ages', createArrayOfLength(numberOfChildren))
  }, [])

  return (
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
      <FieldArray
        name="ages"
        render={() => childrenQuestions(numberOfChildren)}
      />
    </OnboardingStep>
  )
}

Ages.componentName = 'Ages'
Ages.validation = validation

export default Ages
