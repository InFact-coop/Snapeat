import axios from 'axios'
import * as Yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { Input, TextInput } from '../Input'
import keepFieldCleanOnChange from '../../utils/keepFieldCleanOnChange'
import OnboardingStep from './OnboardingStep'

const validation = Yup.object().shape({
  phoneNumber: Yup.string().required(
    'You need to enter your phone number to continue',
  ),
})

const doesPhoneNumberExist = async ({ phoneNumber }) => {
  const encodedPhoneNumber = encodeURIComponent(phoneNumber)
  const res = await axios(
    `${process.env.HOST}/api/does-phonenumber-exist?phonenumber=${encodedPhoneNumber}`,
  )

  const {
    data: { phoneNumberExists },
  } = res

  return phoneNumberExists
}

const validatePhoneNumber = async value => {
  const phoneNumber = parsePhoneNumberFromString(value, 'GB')
  if (!phoneNumber) {
    return 'Please enter a complete phone number.'
  }
  if (phoneNumber.countryCallingCode !== '44') {
    return 'Please enter a valid UK number'
  }
  if (!phoneNumber.isValid()) {
    return 'Sorry, this phone number is not valid.'
  }

  const phoneNumberExists = await doesPhoneNumberExist({
    phoneNumber: phoneNumber.number,
  })

  if (phoneNumberExists) {
    return 'This phone number is already registered with SnapEat. Do you already have an account?'
  }
}

const tooltipContents = (
  <>
    <p className="mb-5">
      We need this information so we can send you regular reminders which will
      help you stick to schedule.
    </p>
    <p className="mb-5">
      By securely sharing this additional information, you will help us to make
      sure we are hearing and learning from a range of different households.
    </p>
  </>
)

const Phone = ({ setFieldValue }) => {
  return (
    <OnboardingStep
      {...{
        h1: 'Nearly there',
        h2: 'Next question:',
        question: 'What is your mobile phone number?',
        tooltipTitle: 'Why do we need this information?',
        tooltipContents,
        className: 'pb-36',
      }}
    >
      <Input
        Component={TextInput}
        name="phoneNumber"
        placeholder="e.g. 07565111222"
        onChange={keepFieldCleanOnChange(
          setFieldValue,
          'phoneNumber',
          /^\+?[0-9\b-]*$/,
        )}
        validate={validatePhoneNumber}
      />
    </OnboardingStep>
  )
}
Phone.componentName = 'Phone'
Phone.validation = validation

export default Phone
