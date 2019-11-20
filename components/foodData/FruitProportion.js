import allIcon from '../../public/icons/quantities/regular/all.svg'
import allIconSelected from '../../public/icons/quantities/selected/all-selected.svg'
import halfIcon from '../../public/icons/quantities/regular/half.svg'
import halfIconSelected from '../../public/icons/quantities/selected/half-selected.svg'
import mostlyIcon from '../../public/icons/quantities/regular/mostly.svg'
import mostlyIconSelected from '../../public/icons/quantities/selected/mostly-selected.svg'
import quarterIcon from '../../public/icons/quantities/regular/quarter.svg'
import quarterIconSelected from '../../public/icons/quantities/selected/quarter-selected.svg'
import fruitIcon from '../../public/icons/categories/regular/fruit_icn.svg'

import {
  Title,
  CardBackground,
  RadioTile,
  TileContainer,
  FruitVegTile,
} from './shared'

import * as Steps from '.'

const FruitProportion = () => {
  return (
    <CardBackground>
      <Title>You tagged Fruit</Title>

      <FruitVegTile
        className="flex flex-col justify-center space-between mx-auto mb-5"
        icon={fruitIcon}
      >
        <div className="checkmark" />
        <p className="w-full text-center">Fruit</p>
      </FruitVegTile>

      <Title className="w-11/12 mx-auto">
        Roughly, how much of the plate is fruit?
      </Title>
      <TileContainer>
        <RadioTile
          name="proportionFruit"
          label="quarter"
          id="quarter"
          icon={quarterIcon}
          iconSelected={quarterIconSelected}
        />
        <RadioTile
          name="proportionFruit"
          label="half"
          id="half"
          icon={halfIcon}
          iconSelected={halfIconSelected}
        />

        <RadioTile
          name="proportionFruit"
          label="mostly"
          id="mostly"
          icon={mostlyIcon}
          iconSelected={mostlyIconSelected}
        />

        <RadioTile
          name="proportionFruit"
          label="all"
          id="all"
          icon={allIcon}
          iconSelected={allIconSelected}
        />
      </TileContainer>
    </CardBackground>
  )
}

FruitProportion.componentName = Steps.FruitProportion

export default FruitProportion
