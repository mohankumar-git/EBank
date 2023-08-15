import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  ResponsiveContainer,
  DigitalCardContainer,
  Heading,
  DigitalCard,
} from './styledComponents'
import Header from '../Header'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <AppContainer>
      <ResponsiveContainer>
        <Header />
        <DigitalCardContainer>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <DigitalCard
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </DigitalCardContainer>
      </ResponsiveContainer>
    </AppContainer>
  )
}

export default Home
