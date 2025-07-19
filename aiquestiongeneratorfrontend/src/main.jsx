import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AIQuestionContext } from './QuestionContextAPI/AIQuestionContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AIQuestionContext>
    <App />
  </AIQuestionContext>
  </BrowserRouter>
  ,
)
