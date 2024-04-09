export { PageShell }

import React from 'react'
import { PageContextProvider } from './usePageContext'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from './Link'
import type { PageContext } from 'vike/types'
import './css/index.css'
import './PageShell.css'

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content">
        {children}
      </div>
    </div>
  )
}
