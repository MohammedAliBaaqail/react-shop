import React , {useState} from 'react';
import './App.scss';
import { BrowserRouter , Routes, Route ,Link  } from 'react-router-dom';
import Error from './pages/error/error.componant';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (

    <>
    
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
          <Routes>        
            <Route path="/" element={ <HomePage /> } />
            <Route path="/shop" element={ <ShopPage /> } />
            <Route path="signin" element={ <AuthenticationPage /> } />
            <Route path="*" element={ <Error /> } />
          </Routes>
      </BrowserRouter>
   </>
   );
  }
}

export default App;
