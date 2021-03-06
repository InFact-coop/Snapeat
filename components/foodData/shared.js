import styled from 'styled-components'
import { Field } from 'formik'

const TileContainer = styled.section.attrs({
  className: '',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  max-width: 90%;
  width: 90%;
  margin: 0 auto;
`

const InputContainer = styled.label.attrs({
  className: 'block relative cursor-pointer select-none',
})`
  width: 100%;
  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
    width: 100%;
    height: 6rem;
    border: 1px solid ${cssTheme('colors.navy')};
    border-radius: 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
  }

  /* Create a custom checkbox */
  .checkmark {
    width: 100%;
    height: 4rem;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-position: center;
    display: block;
  }
  /* When the checkbox is checked, add a blue background */
  input:checked ~ .background > .checkmark {
    background-image: url(${props => props.iconSelected});
  }

  input:checked ~ .background {
    background-color: ${cssTheme('colors.navy')};
    color: white;
  }

  input:checked .parent {
    background-color: blue;
  }
`

const CheckboxTile = ({ label, icon, iconSelected, name }) => {
  const text = label.charAt(0).toUpperCase() + label.slice(1)
  return (
    <InputContainer
      htmlFor={label}
      className="parent"
      icon={icon}
      iconSelected={iconSelected}
    >
      <Field type="checkbox" name={name} value={label} id={label} />
      <div className="background">
        <span className="checkmark" />
        <span>{text}</span>
      </div>
    </InputContainer>
  )
}

const RadioInput = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  ...props
}) => {
  return (
    <input
      name={name}
      id={id}
      type="radio"
      value={id} // could be something else for output?
      checked={id === value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  )
}

const RadioTile = ({ name, icon, iconSelected, label, id }) => {
  const text = label.charAt(0).toUpperCase() + label.slice(1)
  return (
    <InputContainer
      htmlFor={label}
      className="parent"
      icon={icon}
      iconSelected={iconSelected}
    >
      <Field name={name} label={label} component={RadioInput} id={id} />
      <div className="background">
        <span className="checkmark" />
        <span>{text}</span>
      </div>
    </InputContainer>
  )
}

const CardBackground = styled.section.attrs({
  className: 'z-10 w-screen bg-white shadow-tooltip pb-4',
})`
  border-top-left-radius: 4em;
  border-top-right-radius: 4em;
`

const Title = styled.h1.attrs({
  className: 'font-xxl text-center py-5',
})``

const FruitVegTile = styled.div`
  width: ${({ width = '190px' }) => width};
  height: 6rem;
  border: 1px solid ${cssTheme('colors.navy')};
  border-radius: 1rem;

  .checkmark {
    background-image: url(${({ icon }) => icon});
    height: 4rem;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const TagsContainer = styled.div.attrs({
  className: 'flex flex-wrap justify-around w-4/5 center m-auto',
})``

const CheckboxContainer = styled.label.attrs({
  className: 'relative cursor-pointer select-none',
})`
  input {
    display: none;
  }

  .checkmark {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${cssTheme('spacing.2')};
    padding: ${cssTheme('spacing.1')};
    padding-left: ${cssTheme('spacing.3')};
    padding-right: ${cssTheme('spacing.3')};
    border: 1px solid ${cssTheme('colors.navy')};
    border-radius: ${cssTheme('spacing.12')};

    background: white;
    color: ${cssTheme('colors.navy')};
  }

  input:checked ~ .checkmark {
    background: ${cssTheme('colors.navy')};
    color: white;
  }
`
const TagButton = ({ children }) => {
  return (
    <CheckboxContainer htmlFor={children}>
      <Field type="checkbox" name="tags" value={children} id={children} />
      <span className="checkmark">{children}</span>
    </CheckboxContainer>
  )
}

const ExamplesButton = styled.button.attrs({
  className: 'w-11/12 font-base text-center mt-4 underline block mx-auto',
})`
  color: ${cssTheme('colors.blue')};
`

export {
  Title,
  TileContainer,
  CardBackground,
  CheckboxTile,
  RadioTile,
  FruitVegTile,
  TagsContainer,
  TagButton,
  ExamplesButton,
}
