require('atomify')({
    js: {
        entry: "app/js/index.js"
    },
    css: {
        entry: "app/css/index.less",
        assets: {
            dest: "dist/",
            prefix: "./"
        }
    },
}, function () {
    console.log("Done!");
});
