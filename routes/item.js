const express = require('express');
const router = express.Router();
const db = require('../models')

// Create Item
// URL: /api/v1/item
router.post('/', (req,res) => {
  const {name, cost, onSeat, GuestId} = req.body


  if (!name || !cost ) {
    res.status(404).json({error: 'Enter all fields'})
  }

  db.Item.create({
    name,
    cost,
    onSeat,
    GuestId
  })
  .then((result) => {
    res.json({result})
  })
  .catch(err => console.log(err))
})


// Update Item per Guest
// URL: /api/v1/item/:guestId
router.put('/:guest_id', (req,res)=>{
  const {name, cost, onSeat, guest_id} = req.body

  if (!req.body || !req.body.name || req.body.cost || req.body.onSeat) {
    res.status(400).json({
      error: 'Enter all fields'
    });
    return;
  }
  db.Item.update({
    where:{
      name,
      cost,
      onSeat,
      GuestId: guest_id
    }
  }, {
      GuestId: req.params.guest_id
    }
  )
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

router.get('/:guest_id', (req,res)=>{
  db.Item.findAll({
    where:{
      GuestId: req.params.guest_id
    }
  })
  .then(items => res.json(items))
})

// Delete an Item
// URL: /api/v1/item/:itemId
router.delete('/:item_id', (req,res)=>{
  db.Item.destroy({
    where: {
      id: req.params.item_id
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