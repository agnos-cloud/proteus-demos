import express from "express";
import http from "http";
import path from "path";

async function main() {
    const app = express();
    const httpServer = http.createServer(app);

    app.get("/", function(req,res) {
        res.send("Hello World");
    });

    app.get("/dom-man", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/dom-man.html"));
    });

    app.get("/momo", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/momo.html"));
    });

    app.get("/namari", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/index.html"));
    });
    app.get("/namari/css/animate.css", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/css/animate.css"));
    });
    app.get("/namari/css/font-awesome.min.css", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/css/font-awesome.min.css"));
    });
    app.get("/namari/css/namari-color.css", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/css/namari-color.css"));
    });
    app.get("/namari/css/style.css", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/css/style.css"));
    });
    // fonts
    app.get("/namari/fonts/fontawesome-webfont.ttf?v=4.7.0", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/fonts/fontawesome-webfont.ttf"));
    });
    app.get("/namari/fonts/fontawesome-webfont.woff2?v=4.7.0", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/fonts/fontawesome-webfont.woff2"));
    });
    app.get("/namari/fonts/fontawesome-webfont.woff?v=4.7.0", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/fonts/fontawesome-webfont.woff"));
    });
    // images
    app.get("/namari/images/dancer.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/dancer.jpg"));
    });
    app.get("/namari/images/favicon.ico", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/favicon.ico"));
    });
    app.get("/namari/images/logo.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/logo.png"));
    });
    app.get("/namari/images/logo-2.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/logo-2.png"));
    });
    app.get("/namari/images/banner-images/banner-image-1.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/banner-images/banner-image-1.jpg"));
    });

    app.get("/namari/images/company-images/company-logo1.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo1.png"));
    });
    app.get("/namari/images/company-images/company-logo2.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo2.png"));
    });
    app.get("/namari/images/company-images/company-logo3.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo3.png"));
    });
    app.get("/namari/images/company-images/company-logo4.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo4.png"));
    });
    app.get("/namari/images/company-images/company-logo5.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo5.png"));
    });
    app.get("/namari/images/company-images/company-logo6.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo6.png"));
    });
    app.get("/namari/images/company-images/company-logo7.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo7.png"));
    });
    app.get("/namari/images/company-images/company-logo8.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo8.png"));
    });
    app.get("/namari/images/company-images/company-logo9.png", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/company-images/company-logo9.png"));
    });

    app.get("/namari/images/gallery-images/gallery-image-1.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/gallery-images/gallery-image-1.jpg"));
    });
    app.get("/namari/images/gallery-images/gallery-image-2.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/gallery-images/gallery-image-2.jpg"));
    });
    app.get("/namari/images/gallery-images/gallery-image-3.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/gallery-images/gallery-image-3.jpg"));
    });
    app.get("/namari/images/gallery-images/gallery-image-4.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/gallery-images/gallery-image-4.jpg"));
    });
    app.get("/namari/images/gallery-images/gallery-image-5.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/gallery-images/gallery-image-5.jpg"));
    });
    app.get("/namari/images/gallery-images/gallery-image-6.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/gallery-images/gallery-image-6.jpg"));
    });
    app.get("/namari/images/user-images/user-1.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/user-images/user-1.jpg"));
    });
    app.get("/namari/images/user-images/user-2.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/user-images/user-2.jpg"));
    });
    app.get("/namari/images/user-images/user-3.jpg", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/images/user-images/user-3.jpg"));
    });
    // js
    app.get("/namari/js/featherlight.gallery.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/featherlight.gallery.min.js"));
    });
    app.get("/namari/js/featherlight.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/featherlight.min.js"));
    });
    app.get("/namari/js/images-loaded.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/images-loaded.min.js"));
    });
    app.get("/namari/js/jquery.1.8.3.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/jquery.1.8.3.min.js"));
    });
    app.get("/namari/js/jquery.easing.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/jquery.easing.min.js"));
    });
    app.get("/namari/js/jquery.enllax.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/jquery.enllax.min.js"));
    });
    app.get("/namari/js/jquery.scrollUp.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/jquery.scrollUp.min.js"));
    });
    app.get("/namari/js/jquery.stickyNavbar.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/jquery.stickyNavbar.min.js"));
    });
    app.get("/namari/js/jquery.waypoints.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/jquery.waypoints.min.js"));
    });
    app.get("/namari/js/lightbox.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/lightbox.min.js"));
    });
    app.get("/namari/js/site.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/site.js"));
    });
    app.get("/namari/js/wow.min.js", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/namari/js/wow.min.js"));
    });

    app.get("/talstack", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/talstack.html"));
    });

    const port = 3210;

    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}`);
}

main().catch((err) => console.log(err));
