import styled from 'styled-components'
import { Field } from 'formik'

import fruitIcon from '../../public/icons/categories/regular/fruit_icn.svg'
import fruitIconSelected from '../../public/icons/categories/selected/fruit_icn-white.svg'

const CardBackground = styled.section.attrs({
  className: 'z-10 absolute w-screen bg-white',
})`
  top: 40%;
  height: 20rem;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
`

const Title = styled.h1.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

const CheckboxContainer = styled.label.attrs({
  className: 'block relative cursor-pointer select-none',
})`
  width: 40%;
  height: 30%;
  border: 1px solid black;
  border-radius: 1rem;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    width: 100%;
    height: 3rem;
    background-image: url(${fruitIcon});
    background-repeat: no-repeat;
    background-position: center;
    display: block;
  }
  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: darkblue;

    background-image: url(${fruitIconSelected});
  }
`

const CategoryButton = ({ name }) => {
  const text = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <CheckboxContainer htmlFor={name}>
      <Field type="checkbox" name="categories" value={name} id={name} />
      <span className="checkmark" />
      {text}
    </CheckboxContainer>
  )
}

const Categories = () => {
  return (
    <CardBackground>
      <Title>What&apos;s on their plate?</Title>

      <CategoryButton name="fruit" />

      <label htmlFor="vegetables">
        <Field
          type="checkbox"
          name="categories"
          value="vegetables"
          id="vegetables"
        />
        Vegetables
      </label>
      <label htmlFor="meat">
        <Field type="checkbox" name="categories" value="meat" id="meat" />
        Meat
      </label>
      <label htmlFor="fish">
        <Field type="checkbox" name="categories" value="fish" id="fish" />
        Fish/Seafood
      </label>
      <label htmlFor="dairy">
        <Field type="checkbox" name="categories" value="dairy" id="dairy" />
        Dairy
      </label>
      <label htmlFor="egg">
        <Field type="checkbox" name="categories" value="egg" id="egg" />
        Egg
      </label>
      <label htmlFor="pasta">
        <Field type="checkbox" name="categories" value="pasta" id="pasta" />
        Pasta
      </label>
      <label htmlFor="rice">
        <Field type="checkbox" name="categories" value="rice" id="rice" />
        Rice
      </label>
      <label htmlFor="potatoes">
        <Field
          type="checkbox"
          name="categories"
          value="potatoes"
          id="potatoes"
        />
        Potatoes
      </label>
      <label htmlFor="bread">
        <Field type="checkbox" name="categories" value="bread" id="bread" />
        Bread
      </label>
      <label htmlFor="nuts">
        <Field type="checkbox" name="categories" value="nuts" id="nuts" />
        Nuts
      </label>
      <label htmlFor="desert">
        <Field type="checkbox" name="categories" value="desert" id="desert" />
        Desert
      </label>
      <label htmlFor="oil">
        <Field type="checkbox" name="categories" value="oil" id="oil" />
        Oil
      </label>
      <label htmlFor="butter">
        <Field type="checkbox" name="categories" value="butter" id="butter" />
        Butter
      </label>
      <label htmlFor="water">
        <Field type="checkbox" name="categories" value="water" id="water" />
        Water
      </label>
      <label htmlFor="fizzy-drink">
        <Field
          type="checkbox"
          name="categories"
          value="fizzy-drink"
          id="fizzy-drink"
        />
        Fizzy Drink
      </label>
    </CardBackground>
  )
}
Categories.componentName = 'Categories'

export default Categories
