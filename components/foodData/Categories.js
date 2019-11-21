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

import { Title, CardBackground, CheckboxTile, TileContainer } from './shared'

import * as Steps from '.'

const Categories = () => {
  return (
    <CardBackground>
      <Title>What&apos;s on their plate?</Title>

      <TileContainer>
        <CheckboxTile
          label={FRUIT}
          name="categories"
          icon={fruitIcon}
          iconSelected={fruitIconSelected}
        />

        <CheckboxTile
          label={VEGETABLES}
          name="categories"
          icon={vegIcon}
          iconSelected={vegIconSelected}
        />

        <CheckboxTile
          label={MEAT}
          name="categories"
          icon={meatIcon}
          iconSelected={meatIconSelected}
        />

        <CheckboxTile
          label={FISH}
          name="categories"
          icon={fishIcon}
          iconSelected={fishIconSelected}
        />

        <CheckboxTile
          label={DAIRY}
          name="categories"
          icon={dairyIcon}
          iconSelected={dairyIconSelected}
        />

        <CheckboxTile
          label={EGG}
          name="categories"
          icon={eggIcon}
          iconSelected={eggIconSelected}
        />

        <CheckboxTile
          label={PASTA}
          name="categories"
          icon={pastaIcon}
          iconSelected={pastaIconSelected}
        />

        <CheckboxTile
          label={RICE}
          name="categories"
          icon={riceIcon}
          iconSelected={riceIconSelected}
        />

        <CheckboxTile
          label={POTATO}
          name="categories"
          icon={potatoIcon}
          iconSelected={potatoIconSelected}
        />

        <CheckboxTile
          label={BREAD}
          name="categories"
          icon={breadIcon}
          iconSelected={breadIconSelected}
        />

        <CheckboxTile
          label={NUTS}
          name="categories"
          icon={nutsIcon}
          iconSelected={nutsIconSelected}
        />

        <CheckboxTile
          label={DESSERT}
          name="categories"
          icon={dessertIcon}
          iconSelected={dessertIconSelected}
        />

        <CheckboxTile
          label={OIL}
          name="categories"
          icon={oilIcon}
          iconSelected={oilIconSelected}
        />

        <CheckboxTile
          label={BUTTER}
          name="categories"
          icon={butterIcon}
          iconSelected={butterIconSelected}
        />

        <CheckboxTile
          label={WATER}
          name="categories"
          icon={waterIcon}
          iconSelected={waterIconSelected}
        />

        <CheckboxTile
          label={FIZZY_DRINK}
          name="categories"
          icon={fizzyDrinkIcon}
          iconSelected={fizzyDrinkIconSelected}
        />
      </TileContainer>
    </CardBackground>
  )
}

Categories.componentName = Steps.Categories

export default Categories
