import HomePage from './HomePage/Home';
import QuizPage from './QuizPage/QuizPage';
import AboutPage from './AboutPage/About';
import CoursesPage from './CoursesPage/Courses';
import ContactPage from './ContactPage/Contact'
import ResultPage from './ResultPage/ResultPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Quiz" element={<QuizPage />} />
            <Route path="/Result" element={<ResultPage />} />
        </Routes>
        </BrowserRouter>

    );
}
export default App;
