import styled from 'styled-components'
import { Field } from 'formik'

const TextInput = styled(Field).attrs(({ placeholder, name, ...attrs }) => ({
  className: 'bg-lightgray w-full border-b-2 border-navy',
  type: 'text',
  name,
  placeholder,
  ...attrs,
}))``

export { TextInput }
