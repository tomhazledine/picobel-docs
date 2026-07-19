import Main from "./Main.js";
import Hero from "./icons/Hero.js";

// createRequire instead of a JSON import attribute: `assert` was removed
// in Node 22+ and jsssg's transpiler can't parse `with` yet — require()
// works everywhere.
import { createRequire } from "node:module";
const _package = createRequire(import.meta.url)("../../package.json");

const Home = ({ content, page, site }) => {
    return (
        <Main page={page} site={site}>
            <Hero className="home__hero-image" />
            <div className="stack--small">
                <h1 className="home__title">{page.title}</h1>
                <div className="home__meta cluster cluster--centered cluster--vertical">
                    {_package && _package.dependencies && (
                        <span className="home__meta-item">
                            Version: {_package.dependencies.picobel}
                        </span>
                    )}
                    <a
                        className="home__meta-item--ci-badge"
                        href="https://github.com/tomhazledine/picobel/actions/workflows/tests.yml"
                    >
                        <img
                            src="https://github.com/tomhazledine/picobel/actions/workflows/tests.yml/badge.svg"
                            alt="Node.js CI"
                        />
                    </a>
                    <a
                        className="home__meta-item"
                        href="https://github.com/tomhazledine/picobel"
                    >
                        GitHub
                    </a>
                </div>
            </div>
            <div
                className="stack"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Main>
    );
};

export default Home;
