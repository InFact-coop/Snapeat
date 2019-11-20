import {
  HOME,
  ONBOARDING,
  WELCOME,
  SIGN_UP,
  MENU,
  FOOD_DATA,
} from '../utils/constants'
import Home from './Home'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Menu from './Menu'
import FoodData from './FoodData'

export default {
  [HOME]: Home,
  [ONBOARDING]: Onboarding,
  [WELCOME]: Welcome,
  [SIGN_UP]: SignUp,
  [MENU]: Menu,
  [FOOD_DATA]: FoodData,
}
