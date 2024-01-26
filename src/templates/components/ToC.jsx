import { slugify } from "./../tools/utils.js";

const parseSlugs = items =>
    items.map(item => {
        if (typeof item === "string") {
            return {
                title: item,
                slug: slugify(item)
            };
        }

        const slug = item.slug || slugify(item.title);
        const updatedItem = {
            ...item,
            slug
        };
        if (item.children) {
            updatedItem.children = parseSlugs(item.children);
        }
        return updatedItem;
    });

const ToCItem = ({ item }) => (
    <li className="stack--small">
        <a href={`#${item.slug}`}>
            {item.title} <span className="icon icon--link" />
        </a>
        {item.children && (
            <ol className="stack--small">
                {item.children.map(item => (
                    <ToCItem item={item} key={item.slug} />
                ))}
            </ol>
        )}
    </li>
);

const ToC = ({ items, heading = "In this article" }) => {
    const itemsWithSlugs = parseSlugs(items);
    return (
        <nav className="toc">
            <h2>{heading}</h2>
            <ol>
                {itemsWithSlugs.map(item => (
                    <ToCItem item={item} key={item.slug} />
                ))}
            </ol>
        </nav>
    );
};

export default ToC;
