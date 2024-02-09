import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import Logo from "./icons/Logo.js";

const Main = ({ page, site, children }) => {
    const menuPages = site.allPages
        .filter(_page => !_page.frontmatter.excludeFromMenu)
        .map(_page => ({
            title:
                _page.frontmatter.title === "Picobel"
                    ? "Home"
                    : _page.frontmatter.menuTitle
                    ? _page.frontmatter.menuTitle
                    : _page.frontmatter.title,
            url: _page.url,
            priority: _page.frontmatter.menuPriority,
            current: _page.url === page.url,
            menuGroup: _page.frontmatter.menuGroup
        }))
        .sort((a, b) => {
            if (a.title === "Home") return -1;
            if (b.title === "Home") return 1;
            return a.priority - b.priority;
        });
    return (
        <html lang="en">
            <head>
                <title>{page.title}</title>
                <meta name="description" content={page.excerpt} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="stylesheet" href="/picobel-showcase.main.css" />
                <meta property="og:url" content={site.url + page.url} />
                <meta property="og:title" content={page.title} />
                <meta
                    property="og:image"
                    content={
                        page.ogImage ? page.ogImage : "/images/hero-og.png"
                    }
                />
                <meta
                    name="description"
                    content={
                        page.description ? page.description : site.description
                    }
                />
                <meta
                    property="og:description"
                    content={
                        page.description ? page.description : site.description
                    }
                />
            </head>
            <body className="outer">
                <aside className="sidebar">
                    <a href="/" className="sidebar__home-link">
                        <Logo className="sidebar__home-link-logo" />
                        <span className="hidden--visually">{site.title}</span>
                    </a>
                    <input
                        className="sidebar__menu-checkbox"
                        type="checkbox"
                        id="show-menu"
                    />
                    <label
                        className="sidebar__toggle"
                        htmlFor="show-menu"
                        tabIndex="0"
                    >
                        <span className="hidden--visually">Show Menu</span>
                    </label>
                    <label className="sidebar__mask" htmlFor="show-menu">
                        <span className="hidden--visually">Hide Menu</span>
                    </label>
                    <div className="sidebar__inner">
                        <div className="sidebar__scrollable stack">
                            <Header title={site.title} />
                            <Menu
                                pages={menuPages}
                                sections={false}
                                current={page.url}
                            />
                            <label
                                className="sidebar__toggle--inner"
                                htmlFor="show-menu"
                                tabIndex="0"
                            >
                                <span className="hidden--visually">
                                    Hide Menu
                                </span>
                            </label>
                        </div>
                    </div>
                </aside>
                <main className="main">
                    <div className="container stack">{children}</div>
                </main>
                <script src="/picobel-showcase.app.js"></script>
                <script
                    defer
                    data-domain="picobel.tomhazledine.com"
                    src="https://plausible.io/js/script.js"
                ></script>
            </body>
        </html>
    );
};

export default Main;
