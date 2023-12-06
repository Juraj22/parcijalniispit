// ListaRepozitorijaKomponenta.js
import React from "react";
import PropTypes from "prop-types";

function ListaRepozitorijaKomponenta({ userRepos }) {
  return (
    <ul>
      {userRepos.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}

ListaRepozitorijaKomponenta.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default ListaRepozitorijaKomponenta;
