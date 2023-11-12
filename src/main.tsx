import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Providers from 'src/Providers/index.tsx'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

root.render(
  <Providers>
    <App />
  </Providers>,
)
