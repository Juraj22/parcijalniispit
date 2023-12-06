// FormaKomponenta.js
import React from "react";
import PropTypes from "prop-types";

function FormaKomponenta({ username, onUsernameChange, onFormSubmit }) {
  const handleSubmit = () => {
    if (username.trim() === "") {
      alert("Polje za unos korisničkog imena je prazno!");
    } else {
      onFormSubmit();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={onUsernameChange}
        placeholder="Upišite GIT korisnika"
      />
      <button className="button-72" onClick={handleSubmit}>
        Prikaži korisnika
      </button>
    </div>
  );
}

FormaKomponenta.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default FormaKomponenta;
