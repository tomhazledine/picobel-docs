import Main from "./Main.js";

const Home = ({ content, page, site }) => {
    return (
        <Main page={page} site={site}>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Main>
    );
};

export default Home;
