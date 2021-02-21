
import './App.css';
import NavBar from './components/navbar';
import HomeContent from './components/homeContent';
import Footer from './components/footer';
import WelcomePage from './components/welcome';
import PlayGround from './components/playground';
import Authenticated from './components/authenticated';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
function App() {
    //export default function App() {


    return (
        <Router>

            <div className="App">

                <NavBar />
                <Switch>
                    <Route path="/lorem/">
                  
                        <HomeContent title="Lorem Ipsum"/>
                    
                    </Route>
                    <Route path="/forms/">
                  
                        <PlayGround title="Forms Page"/>
                  
                    </Route>
                    <Route path="/">
                        
                        <WelcomePage title="Homme Page"/>
                        
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )

}
export default App

