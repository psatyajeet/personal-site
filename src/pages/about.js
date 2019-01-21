import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h3>About me</h3>
    <p>
      I live in San Francisco and am a software engineer{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.bitwiseinvestments.com/"
      >
        Bitwise Asset Management
      </a>
      .
    </p>
    <ul>
      <li>Born in India, NJ raised.</li>
      <li>Princeton '15 studied ORFE</li>
      <li>Triathlete (aspiring Ironman) , board game enthusiast</li>
    </ul>
  </Layout>
)
