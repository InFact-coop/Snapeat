import * as Yup from 'yup'
import { Input, TextInput } from '../Input'
import keepFieldCleanOnChange from '../../utils/keepFieldCleanOnChange'
import OnboardingStep from './OnboardingStep'

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

const validation = Yup.object().shape({
  numberOfChildren: Yup.string()
    .required('Please enter a number')
    .notOneOf(
      ['0', '00'],
      'You must have children under 18 to sign up to Snapeat',
    ),
})

const Children = ({ setFieldValue, values }) => (
  <OnboardingStep
    {...{
      h1: 'Great stuff!',
      h2: 'Next question:',
      question: 'How many children under 18 are there in your household?',
      tooltipTitle: 'Why do we need this information?',
      tooltipContents,
    }}
  >
    <Input
      Component={TextInput}
      placeholder="Type a number here..."
      name="numberOfChildren"
      maxLength={2}
      onChange={keepFieldCleanOnChange(
        setFieldValue,
        'numberOfChildren',
        /^[0-9\b]+$/,
      )}
      value={values.numberOfChildren}
    />
  </OnboardingStep>
)

Children.componentName = 'Children'
Children.validation = validation

export default Children
