import * as Yup from 'yup'
import axios from 'axios'
import { Input, TextInput } from '../Input'
import OnboardingStep from './OnboardingStep'

const validation = Yup.object().shape({
  postCode: Yup.string().required(
    'Please enter the start of your postcode to continue',
  ),
})

const isPostCodeValid = async ({ postCode }) => {
  const {
    data: { postCodeArray },
  } = await axios(
    `${process.env.HOST}/api/is-postcode-valid?postcode=${postCode}`,
  )

  if (postCodeArray === null) {
    return { error: 'Not a valid UK postcode' }
  } else if (postCode.split(' ').join('').length > 5) {
    return { error: "Please don't enter more than the start of your postcode" }
  }

  return { error: '' }
}

const validatePostCode = async value => {
  const { error } = await isPostCodeValid({ postCode: value })

  return error
}

const tooltipContents = (
  <>
    <p className="mb-5">
      SnapEat uses the start of your postcode to understand where in Lambeth and
      Southwark our snappers come from.
    </p>
    <p className="mb-5">
      The start of a postcode only tells us the general area you live in and
      nothing else.
    </p>
    <p className="mb-5">
      <span className="underline">Fun fact</span>: on average 8,200 buildings
      will have the same start to their postcode as you.
    </p>
  </>
)

const PostCode = () => (
  <OnboardingStep
    {...{
      h1: 'Welcome to SnapEat!',
      h2: 'Before we start, we need a few more details',
      question: 'What is your postcode?',
      description: '(only the start, e.g. SE1 3 or SW13 1)',
      tooltipTitle: 'Why do we need the start of your postcode?',
      tooltipContents,
    }}
  >
    <Input
      Component={TextInput}
      placeholder="Your postcode..."
      name="postCode"
      validate={validatePostCode}
    />
  </OnboardingStep>
)
PostCode.componentName = 'PostCode'
PostCode.validation = validation

export default PostCode
