const express = require('express');
const router = express.Router();
const db = require('../models')

// Create Item
// URL: /api/v1/item
router.post('/', (req,res) => {
  const {name, cost, type} = req.body


  if (!name || !cost || !type) {
    res.status(404).json({error: 'Enter all fields'})
  }

  db.Item.create({
    name,
    cost,
    type,
    GuestId: req.user.id
  })
  .then((result) => {
    res.json({success: 'All items entered'})
  })
  .catch(err => console.log(err))
})


// Update Item per Guest
// URL: /api/v1/item/:guestId
router.put('/:guestId', (req,res)=>{
  const {name, cost, type} = req.body
  if (!req.body || !req.body.name || req.body.cost || req.body.type) {
    res.status(400).json({
      error: 'Enter all fields'
    });
    return;
  }
  db.Item.update({
    name,
    cost,
    type
  }, {
    where:{
      id: req.params.guestId
    }
  })
  .then(updated => {
    if(updated && updated[0] === 1){
      res.status(202).json({
        success: 'Guest Item Updated'
      })

    } else {
      res.status(404).json({
        error: 'Guest not found'
      })
    }
  })
})



// Delete an Item
// URL: /api/v1/item/:itemId
router.delete('/:itemId', (req,res)=>{
  db.Item.destroy({
    where: {
      id: req.params.itemId
    }
  })
  .then(deleted => {
    if(deleted === 1) {
      res.status(202).json({
        success: 'Item deleted'
      })
    }
    else {
      res.status(404).json({
        error: 'Item not found'
      })
    }
  })
})



module.exports = router;