import picobel from "picobel";

const homepageExamples = [
    {
        node: document.querySelector("#example-01"),
        theme: "default"
    },
    {
        node: document.querySelector("#example-02"),
        theme: "example",
        components: ["playPause", "timer", "duration", "progress"]
    },
    {
        node: document.querySelector("#example-03"),
        theme: "itunes"
    },
    {
        node: document.querySelector("#example-04"),
        theme: "comic-sans-ftw",
        components: [
            [
                ["title", "artist"],
                ["timer", "progress", "duration"]
            ],
            "playPause",
            "mute"
        ]
    }
];

homepageExamples.forEach(example => {
    if (!example.node) return;
    picobel({
        theme: example.theme,
        components: example.components || false,
        context: example.node
    });
});
