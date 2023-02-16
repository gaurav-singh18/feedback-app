import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext'
import AboutIconLink from "./components/AboutIconLink";
function App() {

  return (
    <FeedbackProvider>
    <BrowserRouter>
    
        <Header />
        <div className='container'>
        <Routes>
        <Route exact path='/' element={
          <>
             <FeedbackForm  />
        <FeedbackStats />
        <FeedbackList  />
          </>
        }>
        </Route>
        <Route path="/about" element={<AboutPage />}/>
        </Routes>
        </div>
        <AboutIconLink />
    </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App