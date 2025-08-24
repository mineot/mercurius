import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

window.addEventListener('resize', () => {
  const overlay = document.querySelector(
    '.component-layout-header-sidebar-overlay',
  );
  const sidebar = document.querySelector('.component-layout-header-sidebar');
  overlay?.classList.remove('open');
  sidebar?.classList.remove('open');
});

type NavLinkProps = {
  enable: number;
  text: string;
  icon: string;
  routeLink: string;
};

function NavLink(props: NavLinkProps) {
  const { t } = useTranslation();

  if (props.enable !== 1) {
    return;
  }

  return (
    <li>
      <Link to={props.routeLink}>
        <i className={props.icon}></i>
        <span>{t(props.text)}</span>
      </Link>
    </li>
  );
}

function NavLinks() {
  const enableArticles = +import.meta.env.VITE_WEBSITE_ENABLE_ARTICLES;
  const enableBlog = +import.meta.env.VITE_WEBSITE_ENABLE_BLOG;
  const enableProjects = +import.meta.env.VITE_WEBSITE_ENABLE_PROJECTS;
  const enableServices = +import.meta.env.VITE_WEBSITE_ENABLE_SERVICES;
  const enableContact = +import.meta.env.VITE_WEBSITE_ENABLE_CONTACT;

  return (
    <ul>
      <NavLink
        enable={enableArticles}
        text="articles"
        icon="bi bi-file-earmark-richtext-fill"
        routeLink="/articles"
      />

      <NavLink
        enable={enableBlog}
        text="blog"
        icon="bi bi-file-code-fill"
        routeLink="/blog"
      />

      <NavLink
        enable={enableProjects}
        text="projects"
        icon="bi bi-pc-display"
        routeLink="/projects"
      />

      <NavLink
        enable={enableServices}
        text="services"
        icon="bi bi-tools"
        routeLink="/services"
      />

      <NavLink
        enable={enableContact}
        text="contact"
        icon="bi bi-envelope-paper-fill"
        routeLink="/contact"
      />
    </ul>
  );
}

function openSidebar() {
  const overlay = document.querySelector(
    '.component-layout-header-sidebar-overlay',
  );
  const sidebar = document.querySelector('.component-layout-header-sidebar');
  overlay?.classList.toggle('open');
  sidebar?.classList.toggle('open');
}

export function Header() {
  const title = import.meta.env.VITE_WEBSITE_TITLE;
  const urlImage = import.meta.env.VITE_WEBSITE_IMAGE;

  return (
    <>
      <header className="component-layout-header">
        <section className="clh-sc1">
          <img className="clh-sc1-img1" src={urlImage} alt="clh-img1" />
          <Link className="clh-sc1-a1" to="/">
            {title}
          </Link>
        </section>
        <nav className="clh-nav1">
          <NavLinks />
          <i className="clh-nav1-list1 bi bi-list" onClick={openSidebar}></i>
        </nav>
      </header>
      <div
        className="component-layout-header-sidebar-overlay"
        onClick={openSidebar}
      ></div>
      <aside className="component-layout-header-sidebar">
        <NavLinks />
      </aside>
    </>
  );
}
