import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { initAnalytics } from './lib/analytics'
import { pageFromPath } from './routes'

initAnalytics()

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <App initialPage={pageFromPath(window.location.pathname)} />
  </React.StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
