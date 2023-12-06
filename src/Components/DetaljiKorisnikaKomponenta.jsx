// DetaljiKorisnikaKomponenta.js
import React from "react";
import PropTypes from "prop-types";

function DetaljiKorisnikaKomponenta({ userDetails }) {
  return (
    <div>
      <h2>{userDetails.name}</h2>
      <img src={userDetails.avatar_url} alt={userDetails.name} />
      <h3>Lokacija: {userDetails.location}</h3>
      <h3>Bio: {userDetails.bio}</h3>
      <h3>Repozitoriji:</h3>
    </div>
  );
}

DetaljiKorisnikaKomponenta.propTypes = {
  userDetails: PropTypes.object.isRequired,
};

export default DetaljiKorisnikaKomponenta;
