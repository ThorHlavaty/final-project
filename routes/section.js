const express = require('express');
const router = express.Router();
const db = require('../models')



// Create Section
// URL: /api/v1/section
router.post('/', (req,res) => {
  const {number} = req.body


  if (!number) {
    res.status(404).json({error: 'Enter section number'})
  }

  db.Section.create({
    number,
    UserId: req.user.id
  })
  .then((result) => {
    res.json({success: 'Section number entered'})
  })
  .catch(err => console.log(err))

})

// Delete Section based on ID
// URL: /api/v1/guest/:sectionId
router.delete('/:sectionId', (req,res)=>{
  db.Guest.destroy({
    where: {
      id: req.params.sectionId,
      UserId: req.user.id
    }
  })
  .then(deleted => {
    if(deleted === 1) {
      res.status(202).json({
        success: 'Section deleted'
      })
    }
    else {
      res.status(404).json({
        error: 'Section not found'
      })
    }
  })
})



module.exports = router;