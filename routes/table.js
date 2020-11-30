const express = require('express');
const router = express.Router();
const db = require('../models')



// Create Table
// URL: /api/v1/table
router.post('/', (req,res) => {
  const {number} = req.body


  if (!number) {
    res.status(404).json({error: 'Enter table number'})
  }

  db.Table.create({
    number,
    SectionId: req.user.id
  })
  .then((result) => {
    res.json({success: 'Table number entered'})
  })
  .catch(err => console.log(err))

})

// Delete Table based on ID
// URL: /api/v1/guest/:tableId
router.delete('/:tableId', (req,res)=>{
  db.Guest.destroy({
    where: {
      id: req.params.tableId,
      SectionId: req.user.id
    }
  })
  .then(deleted => {
    if(deleted === 1) {
      res.status(202).json({
        success: 'Comment deleted'
      })
    }
    else {
      res.status(404).json({
        error: 'Comment not found'
      })
    }
  })
})


module.exports = router;