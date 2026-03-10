class SiteHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Netrunner France';
    const subtitle = this.getAttribute('subtitle') || '';
    const isSubpage = !!document.querySelector('link[href^="../css/"]');
    const homeHref = isSubpage ? '../index.html' : 'index.html';
    const blogHref = isSubpage ? 'blog.html' : 'html/blog.html';

    this.innerHTML = `
      <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="${homeHref}">Netrunner France</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Ouvrir la navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="${blogHref}">Tous nos articles</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="hero-image">
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="text-white">${title}</h1>
              ${subtitle ? `<p class="lead text-white">${subtitle}</p>` : ''}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const isSubpage = !!document.querySelector('link[href^="../css/"]');
    const homeHref = isSubpage ? '../index.html' : 'index.html';
    const blogHref = isSubpage ? 'blog.html' : 'html/blog.html';

    this.innerHTML = `
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">&copy; Netrunner France</p>
          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="${homeHref}" class="nav-link px-2 text-body-secondary">Accueil</a></li>
            <li class="nav-item"><a href="${blogHref}" class="nav-link px-2 text-body-secondary">Tous nos articles</a></li>
          </ul>
        </footer>
      </div>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
