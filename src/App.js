import React, { useEffect, useState } from "react";
import Routes from "./Routes";
//import config from "./config";
import { useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";
import Footer from "./containers/Footer";
import Navbar from 'react-bootstrap/Navbar'

function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  //const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');
  const [groupName, setGroupName ] = useState('');;

  useEffect(() => {
  function loadUser() {
      return Auth.currentAuthenticatedUser({bypassCache:true});
    }

    async function onLoad() {
      try {
        const user = await loadUser();
        const { attributes } = user;
        //Array of group names
        const groupName = user.signInUserSession.accessToken.payload["cognito:groups"];
        //setUser(user.attributes);
        setUsername(user.username);
        // console.log(groupName);
        // console.log(user);
        // console.log(attributes.email);
        if(groupName){
          setGroupName(groupName[0]);
          console.log(groupName);
        }
        await Auth.currentSession();
        userHasAuthenticated(true);
        //console.log(`Load additional settings for user 1: ${user.username}`);
      }
      catch(e) {
        console.log(e);
        if (e !== 'not authenticated') {
          onError(e);
        }
      }
    
      setIsAuthenticating(false);
    }
    onLoad();
  }, []);

  

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    history.push("/login");
  }
  
  return (
    !isAuthenticating && (
      // container
      <div className="App">
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={require('./images/favicon.ico')}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              
              NewAgeFitness
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/classes">Classes</Nav.Link>
                <Nav.Link href="/trainer">Instructor</Nav.Link>
                {groupName.length > 0 &&
                  <Nav.Link href="/admin">Admin</Nav.Link>
                }
              </Nav>
              {isAuthenticated ? (
                <Nav pullRight>
                  <Nav.Link href="">Hello {username}</Nav.Link>
                  <Nav.Link href="/settings">Settings</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
              ) : (
                  <Nav pullRight>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
                  </Nav>
                )}
            </Navbar.Collapse>
            {/* <Navbar.Collapse>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <NavItem>Hello {username}</NavItem>
                  <LinkContainer to="/settings">
                    <NavItem>Settings</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse> */}
          </Navbar>
        </>
        <AppContext.Provider
          value={{ isAuthenticated, userHasAuthenticated }}
        >
          <Routes />
          <Footer />
        </AppContext.Provider>
      </div>
    )
  );

}

export default App;