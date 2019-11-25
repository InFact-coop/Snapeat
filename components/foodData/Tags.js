import FoodDataStep from './FoodDataStep'

import { TagButton, TagsContainer } from './shared'

import * as Steps from '.'

const tagNames = [
  '#takeaway',
  '#fried',
  '#fresh',
  '#madefromscratch',
  '#readymeal',
  '#quickandeasy',
  '#homecooked',
  '#healthy',
  '#frozen',
  '#vegan',
  '#vegetarian',
  '#kidsfavourite',
]

const Tags = () => (
  <FoodDataStep h1="How would you describe their meal?">
    <TagsContainer>
      {tagNames.map(tag => (
        <TagButton key={tag}>{tag}</TagButton>
      ))}
    </TagsContainer>
  </FoodDataStep>
)

Tags.componentName = Steps.Tags

export default Tags
