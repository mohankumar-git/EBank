import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {HeaderContainer, WebsiteLogo, LogoutButton} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/ebank/login')
  }

  return (
    <HeaderContainer>
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <LogoutButton type="button" onClick={onLogout}>
        Logout
      </LogoutButton>
    </HeaderContainer>
  )
}

export default withRouter(Header)
