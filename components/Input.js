import styled from 'styled-components'
import { Field, ErrorMessage } from 'formik'

const TextInput = styled(Field).attrs(({ placeholder, name, ...attrs }) => ({
  className: 'bg-lightgray w-full border-b-2 border-navy',
  type: 'text',
  name,
  placeholder,
  ...attrs,
}))``

const RadioLabel = styled.label.attrs({
  className: 'ml-2d5',
})``

const Radio = styled(Field).attrs(({ name, ...attrs }) => ({
  type: 'radio',
  id: name,
  name,
  ...attrs,
}))``

const RadioInput = ({ name, children, id, ...attrs }) => (
  <div className="mb-2d5">
    <Radio name={name} id={id} {...attrs} />
    <RadioLabel htmlFor={id}>{children}</RadioLabel>
  </div>
)

const ErrorContainer = styled.div.attrs({
  className: 'text-red',
})``

const Error = ({ name }) => (
  <ErrorMessage
    name={name}
    render={msg => <ErrorContainer>{msg}</ErrorContainer>}
  />
)

const Input = ({ Component, ...attrs }) => (
  <div>
    <Component {...attrs} />
    <Error name={attrs.name} />
  </div>
)

export { Input, TextInput, RadioInput, Error }
