import { Field } from 'formik'

import { Card, H1 } from './FoodDataStep'
const Categories = () => {
  return (
    <Card>
      <H1>What&apos;s on their plate?</H1>
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
    </Card>
  )
}
Categories.componentName = 'Categories'

export default Categories
