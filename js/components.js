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
