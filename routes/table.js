const express = require('express');
const router = express.Router();
const db = require('../models')



// Create Table
// URL: /api/v1/table
router.post('/', (req,res) => {
  const {number, SectionId} = req.body


  if (!number) {
    res.status(404).json({error: 'Enter table number'})
  }

  db.Table.create({
    number,
    SectionId
  })
  .then((result) => {
    res.json({success: 'Table number entered'})
  })
  .catch(err => console.log(err))

})



router.get('/:table_id', (req, res) => {
  db.Table.findByPk(req.params.table_id, {
    include: [
      {
        model: db.Guest,
        include: [{
          model: db.Item
        }]
      }
    ]
  })
  .then(table => {
    if (table) {
      res.json(table)
    }
    else{
      res.status(404).json({error:'could not find table'})
    }
  
  })
})

// Delete Table based on ID
// URL: /api/v1/table/:tableId
router.delete('/:table_id', (req,res)=>{
  db.Guest.destroy({
    where: {
      TableId: req.params.table_id,
    }
  })
  .then(deleted => {
    if(deleted > 0) {
      res.status(202).json({
        success: 'Table cleared'
      })
    }
    else {
      res.status(404).json({
        error: 'Table not found'
      })
    }
  })
})


module.exports = router;