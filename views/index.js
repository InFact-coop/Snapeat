import {
  HOME,
  ONBOARDING,
  SECURITY_AUTH,
  SECURITY_UNAUTH,
  WELCOME,
  SIGN_UP,
  MENU,
  CATEGORY_SELECT,
  ERROR,
  SUCCESS,
  LOADING,
  FOOD_DATA,
  TERMS_AND_CONDITIONS_AUTH,
  TERMS_AND_CONDITIONS_UNAUTH,
  PRIVACY_AUTH,
  PRIVACY_UNAUTH,
  LANDING,
} from '../utils/constants'

import Home from './Home'
import Onboarding from './Onboarding'
import { SecurityAuth, SecurityUnauth } from './Security'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Menu from './Menu'
import Error from './Error'
import Loading from './Loading'
import Success from './Success'
import CategorySelect from './CategorySelect'
import FoodData from './FoodData'
import { PrivacyAuth, PrivacyUnauth } from './Privacy'
import {
  TermsAndConditionsAuth,
  TermsAndConditionsUnauth,
} from './TermsAndConditions'
import Landing from './Landing'

export default {
  [HOME]: Home,
  [ONBOARDING]: Onboarding,
  [WELCOME]: Welcome,
  [SECURITY_AUTH]: SecurityAuth,
  [SECURITY_UNAUTH]: SecurityUnauth,
  [SIGN_UP]: SignUp,
  [ERROR]: Error,
  [MENU]: Menu,
  [LOADING]: Loading,
  [SUCCESS]: Success,
  [CATEGORY_SELECT]: CategorySelect,
  [FOOD_DATA]: FoodData,
  [PRIVACY_AUTH]: PrivacyAuth,
  [PRIVACY_UNAUTH]: PrivacyUnauth,
  [TERMS_AND_CONDITIONS_AUTH]: TermsAndConditionsAuth,
  [TERMS_AND_CONDITIONS_UNAUTH]: TermsAndConditionsUnauth,
  [LANDING]: Landing,
}
