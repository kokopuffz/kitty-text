const express = require("express");
const router = express.Router();
const db = require("../models");
require("dotenv").config();
const res = require("express/lib/response");



router.get("/", (req, res) => {
  res.render("captions/index.ejs");
});

router.get("/prompt", async (req, res) => {
  const user = res.locals.user;
  const doneCaptions = await db.caption.findAll({
    where: { userId: user.id }, 
    order: [["catpicId", "desc"]],
    include: [db.catpic],
    raw: true,
  })
  const catpics = await db.catpic.findAll({ 
    order: [[ "id", "desc" ]],  
    raw: true
  })

console.log(doneCaptions)
console.log(catpics[-1])
  res.render("captions/prompt.ejs", { catpics: catpics, donecaps: doneCaptions});
});

router.post("/prompt/", async (req, res) => {
  console.log("/PROMPT");
  const picid = req.body.picid;
  //id of image
  const kittyid = req.body.id
  const caption = req.body.caption;
  const user = res.locals.user;
  const newCaption = await db.caption.create({
    userId: user.id,
    catpicId: picid,
    text: caption, 
  });
  
  res.redirect("/captions/results/picid");
});

router.get("/results/:id", async (req, res) => {
  const user = res.locals.user;
  const userId = user.id;
  //find user's last caption entry and get captionId
  const getCaptionId = await db.caption.findOne({
    where: { userId },
    // order: [["updatedAt", "DESC"]],
    raw: true,
  });
  // console.log(getCaptionId)
  const catPicId = getCaptionId.catpicId;

  // console.log(catPicId)
  //get cat picture
  const getCatPic = await db.catpic.findOne({
    where: { id: catPicId },
    raw: true,
  });

  // get all catptions
  const allCaptions = await db.caption.findAll({
    where: { catpicId: catPicId },
    raw: true,
  });

  // const captionsid = allCaptions.id
  /* This is counting the number of votes for each caption. */
  // const votes = await db.vote.count({
  //   where:{ captionId: allCaptions.id }
  // })
  // // console.log(votes)
  // // console.log(allCaptions);
  res.render("captions/results.ejs", {
    catid: getCatPic,
    captions: allCaptions,
  });
});

  //get all vote count
  //vote happens when there is a captionid and a user id
router.post("/results",  (req, res) => {
  // let captionid = req.body.captionid;
  // let captionvalue = captionid.value
  console.log(user);
  // const getUserVote = await.db
});

module.exports = router;
