import React from 'react';

function Details({ appetizers }) {
  const { id } = useParams();
  const appetizer = appetizers.find((a) => a.id === parseInt(id));

  if (!appetizer) {
    return <div>Appetizer not found</div>;
  }

  return (
    <div>
      <h1>{appetizer.name}</h1>
      <img src={appetizer.image} alt={appetizer.name} />
      <p>{appetizer.description}</p>
    </div>
  );
}

export default Details;