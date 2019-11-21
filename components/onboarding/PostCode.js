import { TextInput } from '../Input'
import OnboardingStep from './OnboardingStep'

const tooltipContents = (
  <>
    <p className="mb-5">
      Snapeat uses the start of your postcode to understand where in Lambeth and
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
      h1: 'Welcome to Snapeat!',
      h2: 'Before we start, we need a few more details',
      question: 'What is your postcode?',
      description: '(only the start, e.g. SE1 3 or SW13 1)',
      tooltipTitle: 'Why do we need the start of your postcode?',
      tooltipContents,
    }}
  >
    <TextInput placeholder="Your postcode..." name="postCode" />
  </OnboardingStep>
)
PostCode.componentName = 'PostCode'

export default PostCode
