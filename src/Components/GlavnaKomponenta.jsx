// GlavnaKomponenta.js
import React from "react";
import FormaKomponenta from "./FormaKomponenta";
import DetaljiKorisnikaKomponenta from "./DetaljiKorisnikaKomponenta";
import ListaRepozitorijaKomponenta from "./ListaRepozitorijaKomponenta";

class GlavnaKomponenta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userDetails: null,
      userRepos: [],
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleFormSubmit = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${this.state.username}`
      );
      const userDetails = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${this.state.username}/repos`
      );
      const userRepos = await reposResponse.json();

      this.setState({ userDetails, userRepos });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  resetState = () => {
    this.setState({ username: "", userDetails: null, userRepos: [] });
  };

  render() {
    return (
      <div>
        <FormaKomponenta
          username={this.state.username}
          onUsernameChange={this.handleUsernameChange}
          onFormSubmit={this.handleFormSubmit}
        />
        {this.state.userDetails && (
          <div>
            <DetaljiKorisnikaKomponenta userDetails={this.state.userDetails} />
            <ListaRepozitorijaKomponenta userRepos={this.state.userRepos} />
            <button className="button-24" onClick={this.resetState}>
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GlavnaKomponenta;
