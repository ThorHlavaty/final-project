const express = require('express');
const router = express.Router();
const db = require('../models')





// Create Guest Seat
// URL: /api/v1/guest/
router.post('/', (req,res) => {
  const {seat, TableId} = req.body


  if (!seat) {
    res.status(404).json({error: 'Enter all fields'})
  }

  db.Guest.findOrCreate({
    defaults:{
    seat,
    TableId
    },
  where:{
    seat,
    TableId
}},
  )
  .then((result) => {
    res.json(result[0])
  })
  .catch(err => console.log(err))

})




// Get All Guest By Table ID
// URL: /api/v1/guest/:tableId
router.get('/:table_id', (req,res)=>{
  db.Guest.findAll({
    where:{
      TableId: req.params.table_id
    }
  })
  .then(guests => res.json(guests))
})




// // Get Guest by TableId
// // URL: /api/v1/guest/:tableId/guest
// router.get('/:tableId/guest', (req,res)=>{
//   db.Guest.findByPK(req.params.id,{
//     include: db.Table
//   }).then((table)=>{
//     res.json(table.Guests)
//   })
// })



// Delete Guest Seat and all Items based on Guest ID
// URL: /api/v1/guest/:deleteId/table
// router.delete('/:delete_id/table', (req,res)=>{
//   db.Guest.destroy({
//     where: {
//       id: req.params.delete_id,
//     },
//     include:[db.Table]
//   })
//   .then(deleted => {
//     if(deleted === 1) {
//       res.status(202).json({
//         success: 'Guest deleted'
//       })
//     }
//     else {
//       res.status(404).json({
//         error: 'Guest not found'
//       })
//     }
//   })
// })


module.exports = router;