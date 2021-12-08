const path = require('path');
const router = require('express').Router()

router.get("/"), function(req, res) {
    res.sendFile(path.jsoin(_dirname, "../public/view.html"));
}