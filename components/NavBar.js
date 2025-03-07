class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav>
          <div class="logo">
              <img src="./assets/img/logo.png" alt="GeCoLab Logo">
          </div>
          <div class="nav-links">
              <a href="../index.html" class="active">Accueil</a>
              <a href="./partenaire.html">Partenaires</a>
              <a href="./services.html">Services</a>
              <a href="./publications.html">Publications</a>
              <a href="./equipe.html">Équipe</a>
              <a href="./aPropos.html">À propos</a>
              <a href="./contact.html">Contact</a>
          </div>
      </nav>
      `;
    }
  }
  
  customElements.define("nav-bar", Navbar);