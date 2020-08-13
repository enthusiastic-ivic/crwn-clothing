import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-action';

class App extends React.Component{

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      const userRef = await createUserProfileDocument(userAuth);
      const {setCurrentUser} = this.props;
      if(userAuth){
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        });
      }else{
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
