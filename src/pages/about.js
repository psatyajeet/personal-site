import React from 'react'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/layout'

export default () => (
  <Layout title="About" description="About Me">
    <h3>About me</h3>
    <p>
      I live in San Francisco and am a software engineer at{' '}
      <ExternalLink to="https://www.bitwiseinvestments.com/">
        Bitwise Asset Management
      </ExternalLink>
      .
    </p>
    <ul>
      <li>Born in India, raised in NJ</li>
      <li>Princeton '15, studied ORFE</li>
      <li>Generally interested in fintech and healthcare tech</li>
      <li>Die-hard New York Giants, Arsenal, and Brooklyn Nets fan</li>
      <li>
        Triathlete (aspiring Ironman), board game enthusiast, recreational
        soccer and football player
      </li>
    </ul>
    Follow me on{' '}
    <ExternalLink to="https://www.strava.com/athletes/10393092">
      Strava
    </ExternalLink>
    !
  </Layout>
)
