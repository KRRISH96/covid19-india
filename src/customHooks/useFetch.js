import React from 'react';

/**
 * @param url url to fetch data from.
 */
export function useFetch(url) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let didCancelFetch = false;

    // Resets the response and errors on subsequent calls
    setResponse(null);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const responseJson = await res.json();

        if (!didCancelFetch) {
          setResponse(responseJson);
        }
      } catch (err) {
        setError(err || 'Something went wrong!');
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      didCancelFetch = true;
    };
  }, [url]);

  return { response, error, loading };
}
