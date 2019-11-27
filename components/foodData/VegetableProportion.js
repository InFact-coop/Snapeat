import allIcon from '../../public/icons/quantities/regular/all.svg'
import allIconSelected from '../../public/icons/quantities/selected/all-selected.svg'
import halfIcon from '../../public/icons/quantities/regular/half.svg'
import halfIconSelected from '../../public/icons/quantities/selected/half-selected.svg'
import mostlyIcon from '../../public/icons/quantities/regular/mostly.svg'
import mostlyIconSelected from '../../public/icons/quantities/selected/mostly-selected.svg'
import quarterIcon from '../../public/icons/quantities/regular/quarter.svg'
import quarterIconSelected from '../../public/icons/quantities/selected/quarter-selected.svg'
import vegIcon from '../../public/icons/categories/regular/vegan.svg'

import ProportionExamples from '../ProportionExamples'

import {
  Title,
  CardBackground,
  RadioTile,
  TileContainer,
  FruitVegTile,
} from './shared'

import * as Steps from '.'

const VegetableProportion = ({ toggleExamples, showExamples }) => {
  return showExamples ? (
    <ProportionExamples
      toggleExamples={toggleExamples}
      showExamples={showExamples}
    />
  ) : (
    <CardBackground>
      <Title>You tagged Vegetables</Title>
      <FruitVegTile
        className="flex flex-col justify-center space-between mx-auto mb-5"
        icon={vegIcon}
      >
        <div className="checkmark" />
        <p className="w-full text-center">Vegetables</p>
      </FruitVegTile>

      <Title className="w-11/12 mx-auto">
        Roughly, how much of the plate is vegetables?
      </Title>

      <TileContainer>
        <RadioTile
          name="proportionVeg"
          label="quarter"
          id="quarter"
          icon={quarterIcon}
          iconSelected={quarterIconSelected}
        />
        <RadioTile
          name="proportionVeg"
          label="half"
          id="half"
          icon={halfIcon}
          iconSelected={halfIconSelected}
        />

        <RadioTile
          name="proportionVeg"
          label="mostly"
          id="mostly"
          icon={mostlyIcon}
          iconSelected={mostlyIconSelected}
        />

        <RadioTile
          name="proportionVeg"
          label="all"
          id="all"
          icon={allIcon}
          iconSelected={allIconSelected}
        />
      </TileContainer>
      <button onClick={toggleExamples}>Show examples</button>
    </CardBackground>
  )
}

VegetableProportion.componentName = Steps.VegetableProportion

export default VegetableProportion
