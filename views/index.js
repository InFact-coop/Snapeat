import {
  HOME,
  ONBOARDING,
  SECURITY,
  WELCOME,
  SIGN_UP,
  MENU,
  CATEGORY_SELECT,
  ERROR,
  SUCCESS,
  LOADING,
  FOOD_DATA,
  TERMS_AND_CONDITIONS,
  PRIVACY,
} from '../utils/constants'

import Home from './Home'
import Onboarding from './Onboarding'
import Security from './Security'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Menu from './Menu'
import Error from './Error'
import Loading from './Loading'
import Success from './Success'
import CategorySelect from './CategorySelect'
import FoodData from './FoodData'
import Privacy from './Privacy'
import TermsAndConditions from './TermsAndConditions'

export default {
  [HOME]: Home,
  [ONBOARDING]: Onboarding,
  [WELCOME]: Welcome,
  [SECURITY]: Security,
  [SIGN_UP]: SignUp,
  [ERROR]: Error,
  [MENU]: Menu,
  [LOADING]: Loading,
  [SUCCESS]: Success,
  [CATEGORY_SELECT]: CategorySelect,
  [FOOD_DATA]: FoodData,
  [PRIVACY]: Privacy,
  [TERMS_AND_CONDITIONS]: TermsAndConditions,
}
