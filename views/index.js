import {
  HOME,
  ONBOARDING,
  WELCOME,
  SIGN_UP,
  MENU,
  CATEGORY_SELECT,
  ERROR,
  SUCCESS,
  LOADING,
  FOOD_DATA,
  PRIVACY,
} from '../utils/constants'

import Home from './Home'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Menu from './Menu'
import Error from './Error'
import Loading from './Loading'
import Success from './Success'
import CategorySelect from './CategorySelect'
import FoodData from './FoodData'
import Privacy from './Privacy'

export default {
  [HOME]: Home,
  [ONBOARDING]: Onboarding,
  [WELCOME]: Welcome,
  [SIGN_UP]: SignUp,
  [ERROR]: Error,
  [MENU]: Menu,
  [LOADING]: Loading,
  [SUCCESS]: Success,
  [CATEGORY_SELECT]: CategorySelect,
  [FOOD_DATA]: FoodData,
  [PRIVACY]: Privacy,
}
