import styled from 'styled-components'
import { Field } from 'formik'

import allIcon from '../../public/icons/quantities/regular/all.svg'
import allIconSelected from '../../public/icons/quantities/selected/all-selected.svg'
import halfIcon from '../../public/icons/quantities/regular/half.svg'
import halfIconSelected from '../../public/icons/quantities/selected/half-selected.svg'
import mostlyIcon from '../../public/icons/quantities/regular/mostly.svg'
import mostlyIconSelected from '../../public/icons/quantities/selected/mostly-selected.svg'
import quarterIcon from '../../public/icons/quantities/regular/quarter.svg'
import quarterIconSelected from '../../public/icons/quantities/selected/quarter-selected.svg'

import * as Steps from '.'

const RadioButton = ({
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

const ProportionButton = ({ name, icon, iconSelected, label, id }) => {
  const text = label.charAt(0).toUpperCase() + label.slice(1)
  return (
    <RadioContainer
      htmlFor={label}
      className="parent"
      icon={icon}
      iconSelected={iconSelected}
    >
      <Field name={name} label={label} component={RadioButton} id={id} />
      <div className="background">
        <span className="checkmark" />
        <span>{text}</span>
      </div>
    </RadioContainer>
  )
}

const VegetableProportion = () => {
  return (
    <CardBackground>
      <Title>You tagged Vegetables</Title>

      {/* <ProportionButton
        name="proportionVeg"
        icon={allIconSelected}
        iconSelected={allIconSelected}
        label="fruit"
      /> */}

      <IconContainer>
        <ProportionButton
          name="proportionVeg"
          label="quarter"
          id="quarter"
          icon={quarterIcon}
          iconSelected={quarterIconSelected}
        />
        <ProportionButton
          name="proportionVeg"
          label="half"
          id="half"
          icon={halfIcon}
          iconSelected={halfIconSelected}
        />

        <ProportionButton
          name="proportionVeg"
          label="mostly"
          id="mostly"
          icon={mostlyIcon}
          iconSelected={mostlyIconSelected}
        />

        <ProportionButton
          name="proportionVeg"
          label="all"
          id="all"
          icon={allIcon}
          iconSelected={allIconSelected}
        />
      </IconContainer>
    </CardBackground>
  )
}

const RadioContainer = styled.label.attrs({
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
    border: 1px solid black;
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

const CardBackground = styled.section.attrs({
  className: 'z-10 w-screen bg-white',
})`
  border-top-left-radius: 4em;
  border-top-right-radius: 4em;
`

const Title = styled.h1.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

const IconContainer = styled.section.attrs({
  className: '',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  max-width: 90%;
  margin: 0 auto;
`

VegetableProportion.componentName = Steps.VegetableProportion

export default VegetableProportion
