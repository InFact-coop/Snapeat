import styled from 'styled-components'

import {
  FRUIT,
  VEGETABLES,
  MEAT,
  FISH,
  DAIRY,
  EGG,
  PASTA,
  RICE,
  POTATO,
  BREAD,
  NUTS,
  DESSERT,
  OIL,
  BUTTER,
  WATER,
  FIZZY_DRINK,
} from '../../utils/constants'

import fruitIcon from '../../public/icons/categories/regular/fruit_icn.svg'
import vegIcon from '../../public/icons/categories/regular/vegan.svg'
import meatIcon from '../../public/icons/categories/regular/meat.svg'
import fishIcon from '../../public/icons/categories/regular/fish.svg'
import dairyIcon from '../../public/icons/categories/regular/dairy.svg'
import eggIcon from '../../public/icons/categories/regular/egg.svg'
import pastaIcon from '../../public/icons/categories/regular/pasta.svg'
import riceIcon from '../../public/icons/categories/regular/rice.svg'
import potatoIcon from '../../public/icons/categories/regular/potato.svg'
import breadIcon from '../../public/icons/categories/regular/bread.svg'
import nutsIcon from '../../public/icons/categories/regular/nuts.svg'
import dessertIcon from '../../public/icons/categories/regular/dessert.svg'
import oilIcon from '../../public/icons/categories/regular/oil.svg'
import butterIcon from '../../public/icons/categories/regular/butter.svg'
import waterIcon from '../../public/icons/categories/regular/water.svg'
import fizzyDrinkIcon from '../../public/icons/categories/regular/fizzy-drink.svg'

import allIcon from '../../public/icons/quantities/regular/all.svg'
import halfIcon from '../../public/icons/quantities/regular/half.svg'
import mostlyIcon from '../../public/icons/quantities/regular/mostly.svg'
import quarterIcon from '../../public/icons/quantities/regular/quarter.svg'

import * as Steps from '.'

import {
  TagButton,
  CardBackground,
  Title,
  FruitVegTile,
  TileContainer,
} from './shared'

const categoryIcons = {
  [FRUIT]: fruitIcon,
  [VEGETABLES]: vegIcon,
  [MEAT]: meatIcon,
  [FISH]: fishIcon,
  [DAIRY]: dairyIcon,
  [EGG]: eggIcon,
  [PASTA]: pastaIcon,
  [RICE]: riceIcon,
  [POTATO]: potatoIcon,
  [BREAD]: breadIcon,
  [NUTS]: nutsIcon,
  [DESSERT]: dessertIcon,
  [OIL]: oilIcon,
  [BUTTER]: butterIcon,
  [WATER]: waterIcon,
  [FIZZY_DRINK]: fizzyDrinkIcon,
}

const proportionIcons = {
  all: allIcon,
  half: halfIcon,
  mostly: mostlyIcon,
  quarter: quarterIcon,
}

const CategoryTile = ({ category, updatePage }) => (
  <button
    className="w-full"
    onClick={() => {
      updatePage('Categories')
    }}
  >
    <FruitVegTile
      className="flex flex-col justify-center space-between mx-auto mb-5"
      icon={categoryIcons[category]}
      width="100%"
    >
      <div className="checkmark" />
      <p className="w-full text-center">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
    </FruitVegTile>
  </button>
)

const TagsContainer = styled.div.attrs({
  className: 'flex flex-wrap justify-around w-4/5 center m-auto',
})``

const FruitVegProportion = ({ proportion, category, updatePage }) => {
  const page = category === 'fruit' ? 'FruitProportion' : 'VegetableProportion'
  return (
    <>
      <Title>Roughly, the amount of {category} on the plate was:</Title>
      <button
        className="w-full"
        onClick={() => {
          updatePage(page)
        }}
      >
        <FruitVegTile
          className="flex flex-col justify-center space-between mx-auto mb-5"
          icon={proportionIcons[proportion]}
        >
          <div className="checkmark" />
          <p className="w-full text-center">
            {proportion.charAt(0).toUpperCase() + proportion.slice(1)}
          </p>
        </FruitVegTile>
      </button>
    </>
  )
}

const Results = ({ values, updatePage }) => {
  const { categories, proportionFruit, proportionVeg, tags } = values

  return (
    <CardBackground className="flex flex-col items-center">
      <Title className="w-11/12 mt-6">
        In summary, tonight&apos;s meal was composed of
      </Title>

      <TileContainer>
        {categories.map(category => (
          <CategoryTile
            category={category}
            key={category}
            updatePage={updatePage}
          />
        ))}
      </TileContainer>
      {proportionVeg && (
        <FruitVegProportion
          proportion={proportionVeg}
          category="vegetables"
          updatePage={updatePage}
        />
      )}
      {proportionFruit && (
        <FruitVegProportion
          proportion={proportionFruit}
          category="fruit"
          updatePage={updatePage}
        />
      )}
      <Title>and it was:</Title>
      <TagsContainer>
        {tags.map(tag => (
          <button
            onClick={() => {
              updatePage('Tags')
            }}
            key={tag}
          >
            <TagButton>{tag}</TagButton>
          </button>
        ))}
      </TagsContainer>
    </CardBackground>
  )
}

Results.componentName = Steps.Results

export default Results
