import * as esbuild from "esbuild";
import readline from "readline";

const parseArgs = rawArgs => {
    const [a, b, ...relevant] = rawArgs;
    return relevant
        .map(arg => {
            const [key, value] = arg.split("=");
            return { [key.replace(/-/g, "")]: value || true };
        })
        .reduce((args, arg) => ({ ...args, ...arg }), {});
};

const args = parseArgs(process.argv);

const appName = "picobel-showcase";

const config = {
    entryPoints: ["src/js/app.js", "src/styles/main.css"],
    entryNames: `${appName}.[name]`,
    bundle: true,
    outdir: `build`,
    minify: args.mode !== "development",
    treeShaking: args.mode !== "development",
    // outfile: `build/${AppName}.[name].js`,
    loader: { ".js": "jsx", ".scss": "css" },
    external: [
        "*.eot",
        "*.eot?#iefix",
        "*.woff",
        "*.woff2",
        "*.ttf",
        "*.svg"
        // Add other file extensions as needed
    ]
};

if (args.mode === "development") {
    // Development mode
    let ctx = await esbuild.context(config);

    await ctx.watch();
    console.log("watching...");

    console.log(`Press "q" to exit`);
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", async (str, key) => {
        if (key.name === "q") {
            await ctx.dispose();
            console.log("stopped watching");
            process.exit();
        }
    });

    // await new Promise(r => setTimeout(r, 10 * 1000));
    // await ctx.dispose();
    // console.log("stopped watching");
} else {
    // Production mode
    await esbuild.build(config);
}
