import styled from 'styled-components'
import { Field } from 'formik'

import fruitIcon from '../../public/icons/categories/regular/fruit_icn.svg'
import fruitIconSelected from '../../public/icons/categories/selected/fruit_icn-white.svg'

const CategoryButton = ({ name, icon, iconSelected }) => {
  const text = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <CheckboxContainer
      htmlFor={name}
      className="parent"
      icon={icon}
      iconSelected={iconSelected}
    >
      <Field type="checkbox" name="categories" value={name} id={name} />
      <div className="background">
        <span className="checkmark" />
        <span>{text}</span>
      </div>
    </CheckboxContainer>
  )
}

const Proportions = () => {
  return (
    <CardBackground>
      <Title>What&apos;s on their plate?</Title>

      <IconContainer>
        <CategoryButton
          name="fruit"
          icon={fruitIcon}
          iconSelected={fruitIconSelected}
        />
      </IconContainer>
    </CardBackground>
  )
}

const CheckboxContainer = styled.label.attrs({
  className: 'block relative cursor-pointer select-none',
})`
  width: 9rem;
  margin: 0.3rem;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
    width: 9rem;
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
    height: 3rem;
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
  className: 'z-10 absolute w-screen bg-white h-full',
})`
  top: 40%;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
`

const Title = styled.h1.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

const IconContainer = styled.section.attrs({
  className: 'flex flex-row w-full flex-wrap justify-center',
})``

Proportions.componentName = 'Proportions'

export default Proportions
