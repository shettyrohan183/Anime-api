import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Anime from './components/Anime';
import Sanime from "./components/Sanime";
const propTypes = {};
const defaultProps = {};

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <div>
          <Routes>
            <Route exact path="/" element={<Anime />} />
            <Route exact path="/sanime" element={<Sanime />} />
          </Routes>
          </div>
        </Router>
    </>
  );
}
export default App;


