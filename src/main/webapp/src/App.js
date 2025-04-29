import './App.css';
import {useEffect, useState} from 'react';
import { useAuth } from "react-oidc-context";

function App() {
const auth = useAuth();
const [data1, setData1] = useState(null);
const [data2, setData2] = useState(null);
const [data3, setData3] = useState(null);

  useEffect(() => {
        (async () => {
            try {
                const token = auth.user?.access_token;
                const response = await fetch("http://localhost:9090/api/hello", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData1(await response.json());
            } catch (e) {
                console.error(e);
            }
        })();
    }, [auth]);
     useEffect(() => {
        (async () => {
            try {
                const token = auth.user?.access_token;
                const response = await fetch("http://localhost:9090/api/edit/help", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData2(await response.json());
            } catch (e) {
                console.error(e);
            }
        })();
    }, [auth]);
     useEffect(() => {
        (async () => {
            try {
                const token = auth.user?.access_token;
                const response = await fetch("http://localhost:9090/api/user/bye", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData3(await response.json());
            } catch (e) {
                console.error(e);
            }
        })();
    }, [auth]);

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
            <pre>{data1 ? JSON.stringify(data1, null, 2) : "Oops... caused " }</pre>
            <pre>{data2 ? JSON.stringify(data2, null, 2) : "Oops...  caused" }</pre>
            <pre>{data3 ? JSON.stringify(data3, null, 2) : "Oops...  caused" }</pre>
            <button onClick={() => void auth.signoutRedirect()}>Log out</button>
         </div>
         );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}


export default App;
