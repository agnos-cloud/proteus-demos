import express from "express";
import http from "http";
import path from "path";

async function main() {
    const app = express();
    const httpServer = http.createServer(app);

    app.get("/", function(req,res) {
        res.send("Hello World");
    });

    app.get("/talstack", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/talstack.html"));
    });

    const port = 3210;

    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}`);
}

main().catch((err) => console.log(err));
