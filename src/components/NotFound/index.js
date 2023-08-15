import Header from '../Header'
import {
  AppContainer,
  ResponsiveContainer,
  FailureImage,
  FailureHeading,
  FailureSubHeading,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <AppContainer>
      <ResponsiveContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
          alt="not found"
        />
        <FailureHeading>Page Not Found</FailureHeading>
        <FailureSubHeading>
          We are sorry, the page you requested could not be found.
        </FailureSubHeading>
      </ResponsiveContainer>
    </AppContainer>
  </>
)

export default NotFound
