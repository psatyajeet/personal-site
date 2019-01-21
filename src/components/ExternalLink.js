import React from 'react'

export default ({ className, to, children }) => (
  <a
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.bitwiseinvestments.com/"
    href={to}
  >
    {children}
  </a>
)
