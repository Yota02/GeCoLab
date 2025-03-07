class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav>
          <div class="logo">
              <img src="./assets/img/logo.png" alt="GeCoLab Logo">
          </div>
          <div class="nav-links">
              <a href="../index.html" class="active">Accueil</a>
              <a href="../pages/partenaire.html">Partenaires</a>
              <a href="../pages/services.html">Services</a>
              <a href="../pages/publications.html">Publications</a>
              <a href="../pages/equipe.html">Équipe</a>
              <a href="../pages/aPropos.html">À propos</a>
              <a href="../pages/contact.html">Contact</a>
          </div>
      </nav>
      `;
    }
  }
  
  customElements.define("nav-bar", Navbar);