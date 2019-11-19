import FormStep from '../FormStep'
import { TextInput } from '../Input'

const PostCode = () => (
  <FormStep
    h1="Welcome to Snapeat!"
    h2="Before we start, we need a few more details"
    question="What is your postcode?"
    description="(only the start, e.g. SE1 3 or SW13 1)"
  >
    <TextInput placeholder="Your postcode..." />
  </FormStep>
)
PostCode.componentName = 'PostCode'

export default PostCode
