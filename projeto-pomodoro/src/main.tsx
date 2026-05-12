import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App>
    <h1>Aqui vai ser construído meu projeto</h1>
  </App>
</StrictMode>
)