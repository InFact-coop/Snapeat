import styled from 'styled-components'
import * as R from 'ramda'
import { Field, ErrorMessage } from 'formik'

import dropdown from '../public/icons/dropdown.svg'

const TextInput = styled(Field).attrs(({ placeholder, name, ...attrs }) => ({
  className: 'bg-lightgray w-full border-b-2 border-navy',
  type: 'text',
  name,
  placeholder,
  ...attrs,
}))``

const SelectInput = ({ options, placeholder, name, ...attrs }) => {
  const emptyOption = (
    <option value="" key="empty-option" disabled>
      {placeholder}
    </option>
  )

  const optionComponents = R.pipe(
    R.map(({ label, value }) => (
      <option key={`${name}-${value}`} label={label} value={value}>
        {label}
      </option>
    )),
    R.prepend(emptyOption),
  )(options)

  return <Select {...{ name, ...attrs }}>{optionComponents}</Select>
}

const Select = styled.select.attrs(({ className, ...attrs }) => {
  return {
    className: `border-b-2 border-navy block w-full
      bg-transparent text-center ${className}`,
    ...attrs,
  }
})`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${dropdown});
  background-repeat: no-repeat, repeat;
  background-position: right 0 top 50%, 0 0;
`

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

const Error = ({ name, className }) => (
  <ErrorMessage
    name={name}
    render={msg => <ErrorContainer className={className}>{msg}</ErrorContainer>}
  />
)

const Input = ({ Component, ...attrs }) => (
  <div>
    <Component {...attrs} />
    <Error name={attrs.name} />
  </div>
)

export { Input, TextInput, RadioInput, SelectInput, Error }
