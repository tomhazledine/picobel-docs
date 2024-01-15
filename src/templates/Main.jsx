const Main = ({ content, page, site }) => {
    return (
        <html lang="en">
            <head>
                <title>{page.title}</title>
                <meta name="description" content={page.excerpt} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="stylesheet" href={site.url + "main.css"} />
            </head>
            <body>
                <div className="wrapper">
                    <h1>{page.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    <a href={site.url}>Home</a>
                </div>
            </body>
        </html>
    );
};

export default Main;
