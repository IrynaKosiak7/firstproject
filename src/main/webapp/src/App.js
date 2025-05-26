import './App.css';
import { useState} from 'react';
import { useAuth } from "react-oidc-context";

function App() {
const auth = useAuth();
const [data1, setData1] = useState(null);
const [data2, setData2] = useState(null);
const [data3, setData3] = useState(null);
const PORT_BACK = process.env.REACT_APP_BACKEND;

 switch (auth.activeNavigator) {
     case "signinSilent":
     return <div>Signing you in...</div>;
     case "signoutRedirect":
     return <div>Signing you out...</div>;
 }
 if (auth.isLoading) {
     return <div>Loading...</div>;
 }

 if (auth.error) {
   return <div>Oops... {auth.error.kind} caused {auth.error.message}</div>;
}
    if (auth.isAuthenticated) {
       return (
         <div className="App">
            <h1>API Response</h1>
                <div>
                     <button
                         type="button"
                             className="btn btn-primary"
                                 onClick={async () => {
                                    try {
                                     const token = auth.user?.access_token;
                                     const response = await fetch(PORT_BACK + "/api/hello", {
                                     method: "GET",
                                     headers: {
                                    "content-type": "application/json",
                                    "Authorization": `Bearer ${token}`,
                                     },
                                    });
                                    setData1(await response.json());
                                   } catch (e) {
                                    console.log(e);
                                 }
                               }}
                                >
                                 Say Hello!
                     </button>
                </div>
                <div>
                     <button
                         type="button"
                             className="btn btn-primary"
                                 onClick={async () => {
                                    try {
                                     const token = auth.user?.access_token;
                                     const response = await fetch(PORT_BACK + "/api/edit/help", {
                                     method: "GET",
                                     headers: {
                                    "content-type": "application/json",
                                    "Authorization": `Bearer ${token}`,
                                     },
                                    });
                                    setData2(await response.json());
                                   } catch (e) {
                                    console.log(e);
                                 }
                               }}
                                >
                                 Help!
                     </button>
                </div>
                <div>
                     <button
                         type="button"
                             className="btn btn-primary"
                                 onClick={async () => {
                                    try {
                                     const token = auth.user?.access_token;
                                     const response = await fetch(PORT_BACK + "/api/user/bye", {
                                     method: "GET",
                                     headers: {
                                    "content-type": "application/json",
                                    "Authorization": `Bearer ${token}`,
                                     },
                                    });
                                    setData3(await response.json());
                                   } catch (e) {
                                    console.log(e);
                                 }
                               }}
                                >
                                Say Bye!
                     </button>
                </div>
            <button onClick={() => void auth.signoutRedirect()}>Log out</button>
         </div>
         );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}


export default App;
