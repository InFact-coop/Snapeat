import { TAG_ARRAY } from '../../utils/constants'
import FoodDataStep from './FoodDataStep'

import { TagButton, TagsContainer } from './shared'

import * as Steps from '.'

const Tags = () => (
  <FoodDataStep h1="How would you describe their meal?">
    <TagsContainer>
      {TAG_ARRAY.map(tag => (
        <TagButton key={tag}>{tag}</TagButton>
      ))}
    </TagsContainer>
  </FoodDataStep>
)

Tags.componentName = Steps.Tags

export default Tags
