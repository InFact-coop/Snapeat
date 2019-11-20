import styled from 'styled-components'
import { Field } from 'formik'

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

// import clicked and unclicked variants of all icons
import fruitIcon from '../../public/icons/categories/regular/fruit_icn.svg'
import fruitIconSelected from '../../public/icons/categories/selected/fruit_icn-white.svg'
import vegIcon from '../../public/icons/categories/regular/vegan.svg'
import vegIconSelected from '../../public/icons/categories/selected/vegs-white.svg'
import meatIcon from '../../public/icons/categories/regular/meat.svg'
import meatIconSelected from '../../public/icons/categories/selected/meat-white.svg'
import fishIcon from '../../public/icons/categories/regular/fish.svg'
import fishIconSelected from '../../public/icons/categories/selected/fish-white.svg'
import dairyIcon from '../../public/icons/categories/regular/dairy.svg'
import dairyIconSelected from '../../public/icons/categories/selected/dairy-white.svg'
import eggIcon from '../../public/icons/categories/regular/egg.svg'
import eggIconSelected from '../../public/icons/categories/selected/egg-white.svg'
import pastaIcon from '../../public/icons/categories/regular/pasta.svg'
import pastaIconSelected from '../../public/icons/categories/selected/pasta-white.svg'
import riceIcon from '../../public/icons/categories/regular/rice.svg'
import riceIconSelected from '../../public/icons/categories/selected/rice-white.svg'
import potatoIcon from '../../public/icons/categories/regular/potato.svg'
import potatoIconSelected from '../../public/icons/categories/selected/potato-white.svg'
import breadIcon from '../../public/icons/categories/regular/bread.svg'
import breadIconSelected from '../../public/icons/categories/selected/bread-white.svg'
import nutsIcon from '../../public/icons/categories/regular/nuts.svg'
import nutsIconSelected from '../../public/icons/categories/selected/nuts-white.svg'
import dessertIcon from '../../public/icons/categories/regular/dessert.svg'
import dessertIconSelected from '../../public/icons/categories/selected/dessert-white.svg'
import oilIcon from '../../public/icons/categories/regular/oil.svg'
import oilIconSelected from '../../public/icons/categories/selected/oil-white.svg'
import butterIcon from '../../public/icons/categories/regular/butter.svg'
import butterIconSelected from '../../public/icons/categories/selected/butter.svg'
import waterIcon from '../../public/icons/categories/regular/water.svg'
import waterIconSelected from '../../public/icons/categories/selected/water-white.svg'
import fizzyDrinkIcon from '../../public/icons/categories/regular/fizzy-drink.svg'
import fizzyDrinkIconSelected from '../../public/icons/categories/selected/fizzy-drink-white.svg'

const CardBackground = styled.section.attrs({
  className: 'z-10 w-screen bg-white h-full',
})`
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
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

const CheckboxContainer = styled.label.attrs({
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

const Categories = () => {
  return (
    <CardBackground>
      <Title>What&apos;s on their plate?</Title>

      <IconContainer>
        <CategoryButton
          name={FRUIT}
          icon={fruitIcon}
          iconSelected={fruitIconSelected}
        />

        <CategoryButton
          name={VEGETABLES}
          icon={vegIcon}
          iconSelected={vegIconSelected}
        />

        <CategoryButton
          name={MEAT}
          icon={meatIcon}
          iconSelected={meatIconSelected}
        />

        <CategoryButton
          name={FISH}
          icon={fishIcon}
          iconSelected={fishIconSelected}
        />

        <CategoryButton
          name={DAIRY}
          icon={dairyIcon}
          iconSelected={dairyIconSelected}
        />

        <CategoryButton
          name={EGG}
          icon={eggIcon}
          iconSelected={eggIconSelected}
        />

        <CategoryButton
          name={PASTA}
          icon={pastaIcon}
          iconSelected={pastaIconSelected}
        />

        <CategoryButton
          name={RICE}
          icon={riceIcon}
          iconSelected={riceIconSelected}
        />

        <CategoryButton
          name={POTATO}
          icon={potatoIcon}
          iconSelected={potatoIconSelected}
        />

        <CategoryButton
          name={BREAD}
          icon={breadIcon}
          iconSelected={breadIconSelected}
        />

        <CategoryButton
          name={NUTS}
          icon={nutsIcon}
          iconSelected={nutsIconSelected}
        />

        <CategoryButton
          name={DESSERT}
          icon={dessertIcon}
          iconSelected={dessertIconSelected}
        />

        <CategoryButton
          name={OIL}
          icon={oilIcon}
          iconSelected={oilIconSelected}
        />

        <CategoryButton
          name={BUTTER}
          icon={butterIcon}
          iconSelected={butterIconSelected}
        />

        <CategoryButton
          name={WATER}
          icon={waterIcon}
          iconSelected={waterIconSelected}
        />

        <CategoryButton
          name={FIZZY_DRINK}
          icon={fizzyDrinkIcon}
          iconSelected={fizzyDrinkIconSelected}
        />
      </IconContainer>
    </CardBackground>
  )
}
Categories.componentName = 'Categories'

export default Categories
