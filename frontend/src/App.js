import React from 'react'
import {connect} from 'react-redux'
import {Image, Icon, Button} from 'semantic-ui-react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import styles from './App.module.scss'

import {
  HomePage,
  LoginRedirectPage,
  LogoutPage,
  NotFoundPage,
  SettingsPage,
  TrackEditor,
  TrackPage,
  TracksPage,
  UploadPage,
} from 'pages'
import {Avatar, LoginButton} from 'components'

const App = connect((state) => ({login: state.login}))(function App({login}) {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <div className={styles.App}>
        <header className={styles.headline}>
          <div className={styles.header}>
            <div className={styles.pageTitle}>
              <Link to="/">OpenBikeSensor</Link>
            </div>
            <nav className={styles.menu}>
              <ul>
                {login && (
                  <li>
                    <Link to="/upload">
                      <Button compact color="green">
                        <Icon name="cloud upload" />
                        Upload
                      </Button>
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/tracks">Tracks</Link>
                </li>
                <li>
                  <a href="https://openbikesensor.org/" target="_blank" rel="noreferrer">
                    About
                  </a>
                </li>
                {login ? (
                  <>
                    <li>
                      <Link to="/settings">
                        <Avatar user={login} />
                      </Link>
                    </li>
                    <li>
                      <Button as={Link} to="/logout" compact>
                        Logout
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <LoginButton as="a" compact />
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </header>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/tracks" exact>
            <TracksPage />
          </Route>
          <Route path="/my/tracks" exact>
            <TracksPage privateTracks />
          </Route>
          <Route path={`/tracks/:slug`} exact>
            <TrackPage />
          </Route>
          <Route path={`/tracks/:slug/edit`} exact>
            <TrackEditor />
          </Route>
          <Route path="/redirect" exact>
            <LoginRedirectPage />
          </Route>
          <Route path="/logout" exact>
            <LogoutPage />
          </Route>
          {login && (
            <>
              <Route path="/upload" exact>
                <UploadPage />
              </Route>
              <Route path="/settings" exact>
                <SettingsPage />
              </Route>
            </>
          )}
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
})

export default App
