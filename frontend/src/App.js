import './App.css'
import Home from './pages/Home'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BASE_URL } from './constants/constants';

function App() {
  const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
  })

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </div>
  );
}

export default App;
