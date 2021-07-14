import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data({endpoint, opts}) {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_MAIN_URL}${endpoint}`, opts);
  const title = endpoint[0].toUpperCase() + endpoint.slice(1);

  const showData = (data) => {
    let result = [];
    for (let key in data) {
      result.push(`${key} : ${data[key]}`)
    }
    return result;
  }

  return (
    <div className="component">
      <div className="component-title">{title}-block</div>
      <div className="component-result">
        {error && error}
        {loading ? (
          <div className="loader"></div>
        ) : (
          data && showData(data)
        )}
      </div>
    </div>
  )
}
