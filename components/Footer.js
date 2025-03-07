class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>GeCoLab</h3>
                <p>Innovons ensemble pour un avenir meilleur.</p>
            </div>
            <div class="footer-section">
                <h4>Liens utiles</h4>
                <ul>
                    <li><a href="./pages/aPropos.html">À propos</a></li>
                    <li><a href="./pages/services.html">Services</a></li>
                    <li><a href="./pages/contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Suivez-nous</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com" target="_blank">
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook">
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter">
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn">
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 GeCoLab. Tous droits réservés.</p>
        </div>
      </footer>
      `;
    }
  }
  
  customElements.define("footer-bar", Footer);
  