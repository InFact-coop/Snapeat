import styled from 'styled-components'
import { Field } from 'formik'

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

const Categories = () => {
  return (
    <CardBackground>
      <Title>What&apos;s on their plate?</Title>
      <label htmlFor="fruit">
        <Field type="checkbox" name="categories" value="fruit" id="fruit" />
        Fruit
      </label>
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
