import styled from 'styled-components'
import * as R from 'ramda'
import { Field } from 'formik'
import R_ from '../../utils/R_'

import FoodDataStep from './FoodDataStep'

import * as Steps from '.'

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
const TagsContainer = styled.div.attrs({
  className: 'flex flex-wrap justify-around w-4/5 center m-auto',
})``

const TagButton = ({ children }) => {
  return (
    <CheckboxContainer htmlFor={children}>
      <Field type="checkbox" name="tags" value={children} id={children} />
      <span className="checkmark">{children}</span>
    </CheckboxContainer>
  )
}

const tagNames = [
  'takeaway',
  'fried',
  'fresh',
  'madefromscratch',
  'readymeal',
  'quickandeasy',
  'homecooked',
  'healthy',
  'frozen',
  'vegan',
  'vegetarian',
  'kidsfavourite',
]

const tags = R.pipe(
  R.map(tag => `#${tag}`),
  R_.mapIndexed((tag, i) => <TagButton key={`tag-${i}`}>{tag}</TagButton>),
)(tagNames)

const Tags = () => (
  <FoodDataStep h1="How would you describe their meal?">
    <TagsContainer>{tags}</TagsContainer>
  </FoodDataStep>
)

Tags.componentName = Steps.Tags

export default Tags
