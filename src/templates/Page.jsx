import Main from "./Main.js";

const Page = ({ content, page, site }) => {
    return (
        <Main page={page} site={site}>
            <h1>{page.title}</h1>
            <div
                className="stack"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Main>
    );
};

export default Page;
