import picobel from "picobel";

const homepageExamples = [
    {
        node: document.querySelector("#example-01"),
        theme: "bare",
        components: ["playPause", "progress"]
    },
    {
        node: document.querySelector("#example-02"),
        theme: "default"
    },
    {
        node: document.querySelector("#example-03"),
        theme: "bare",
        components: ["playPause", "progress"]
    },
    {
        node: document.querySelector("#example-04"),
        theme: "crazy",
        components: [
            "playPause",
            "mute",
            ["title", "artist"],
            ["progress", ["timer", "duration"]]
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
