exports.sayFunction = (req, res) => {
    const keyword = req.query.keyword || "nothing";
    res.json({ message: `Ryan Manning says ${keyword}` });
};
