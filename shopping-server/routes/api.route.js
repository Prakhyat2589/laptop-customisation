const router = require("express").Router();
const laptopComponents = require("../laptop-component.json");

router.get("/list", async (req, res, next) => {
  try {
    const componentlist = await laptopComponents;
    res.send(componentlist);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;
