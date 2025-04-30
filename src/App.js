import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QueryForm from './components/QueryForm';
import ResponseCard from './components/ResponseCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { getAutoResponse } from './services/api';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(userQuery) {
    setQuery(userQuery);
    setLoading(true);
    setError(null);

    try {
      const answer = await getAutoResponse(userQuery);
      setResponse(answer);
    } catch (err) {
      setError(err.message || 'Failed to get response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="container">
        <QueryForm onSubmit={handleSubmit} />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {response && !loading && !error && (
          <ResponseCard query={query} response={response} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;