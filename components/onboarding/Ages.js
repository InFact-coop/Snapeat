import { useEffect } from 'react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import * as R from 'ramda'
import R_ from '../../utils/R_'
import createArrayOfLength from '../../utils/createArrayOfLength'

import { RadioInput, Error } from '../Input'
import OnboardingStep, { SubQuestion } from './OnboardingStep'

const initValidation = length =>
  Yup.object().shape({
    ages: Yup.lazy(() =>
      Yup.array()
        .required("Please make sure you have selected your children's ages")
        .min(
          length,
          'Please check you have selected ages for all of your children',
        )
        .max(
          length,
          'Please check you have selected ages for all of your children',
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
    </div>
  )
}

const childrenQuestions = R.pipe(
  createArrayOfLength,
  R_.mapIndexed(AgeComponent),
)

const Ages = ({ values: { numberOfChildren }, setValidationSchema }) => {
  useEffect(() => {
    const validation = initValidation(numberOfChildren)
    if (!Ages.validationInitialised) {
      Ages.validationInitialised = true
      setValidationSchema(validation)
    }
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
        render={() => (
          <>
            <Error name="ages" className="text-center mb-5" />
            {childrenQuestions(numberOfChildren)}
          </>
        )}
      />
    </OnboardingStep>
  )
}

Ages.componentName = 'Ages'
Ages.validationInitialised = false

export default Ages
