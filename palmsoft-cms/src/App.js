import './index.css';
import './builder-settings';
import React, { Component } from 'react';
import { NotFound } from './components/NotFound'
import '@builder.io/widgets';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Footer } from './components/Footer';
import { CatchAll } from './pages/CatchAll';
import Headbar from './components/HeadBar/Headbar';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ContentForm } from './components/ContentForm/ContentForm';
import { LandingHeader } from './components/LandingBlock/LandingBlock';
import { Builder, BuilderComponent } from '@builder.io/sdk';
import ContentTable from './components/ContentTable/ContentTable';
import AccountTable from './components/UserAdmin/AccountTable';


export default class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             isLoggedIn: false,
             token: '',
             userCred: ''
        }

        this.handleAccess = this.handleAccess.bind(this);
        this.handleCredentials = this.handleCredentials.bind(this);
    }

    //method to manage user session information
    handleAccess(token) {
        this.setState({
            isLoggedIn: true,
            token: token
        });
    }

    //method to manage user session information
    handleCredentials(user){
        this.setState({
            userCred: user
        });
    }

    
    
    render() {

        const { isLoggedIn, token, user } = this.state;

        return(
            <Router>
                <div className="Container" style={{minHeight: 'calc(100vh - 150px)'}}>
                <>
                {Builder.isPreviewing || Builder.isEditing
                    ? (
                    <>
                       <> </>
                    </>
                    )
                    : <Route render={(props) => (
                        <Headbar {...props}
                        loggedInStatus={isLoggedIn}
                        handleAccess={this.handleAccess}
                        handleCredentials={this.handleCredentials}
                        token={token}
                        />
                    )}
                />
                }
                </>                
                        <Route exact path="/" render={(props) => (
                            <>
                                {isLoggedIn
                                    ? (<> <Searchbar /> <CatchAll {...props} /> </>)
                                    : (<LandingHeader />)
                                } 
                            </> 
                            )}
                        />
                        <Route path="/user/signup" render={(props) => (
   
                                <CatchAll {...props} />
                            )}
                        />
                        <Route path="/curation" render={(props) => (
                                <>
                                <CatchAll {...props} />
                                <ContentForm {...props} 
                                loggedInStatus={isLoggedIn} 
                                token={token}/>

                                </>
                            )}
                        />
                        <Route path="/about" render={(props) => (

                                <CatchAll {...props}/>
                            )}
                        />
                        <Route path="/library" render={(props) => (
 
                                <>  <Searchbar />
                                    <CatchAll {...props} />
                                    <ContentTable {...props} 
                                        loggedInStatus={isLoggedIn} 
                                        token={token} 
                                        user={user}
                                    /> 
                                </>
                            )}
                        />
                        <Route path="/account" render={(props) => (
 
                            <>  
                                <CatchAll {...props} />
                                <AccountTable {...props} 
                                    loggedInStatus={isLoggedIn} 
                                    token={token} 
                                    user={user}
                                /> 
                            </>
                            )}
                        />
                        <Route path="/content/" render={(props) => (
 
                            <>  <Searchbar />
                                <CatchAll {...props} />
                            </>
                            )}
                        />
                   
                </div>
                <Footer />
            </Router>
        )
    }
}

