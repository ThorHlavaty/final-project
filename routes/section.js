const express = require('express');
const router = express.Router();
const db = require('../models')



// Assign Section
// URL: /api/v1/section/:section_id
router.put('/:section_id', (req,res) => {
  const {user_id} = req.body
  const {section_id} = req.params
  if (!section_id) {
    res.status(404).json({error: 'Enter section number'})
  }
  db.Section.update(
    {UserId: user_id}, 
    {where:{id: section_id},
  },
  )
  .then((result) => {
    res.json({success: 'Section server updated'})
  })
  .catch(err => console.log(err))
})

router.get('/', (req,res) => {  
  db.Section.findAll()
  .then(id => res.json(id))
  
})

router.get('/:section_id/tables',(req,res)=>{
  db.Table.findAll({
    where:
      {
        SectionId: req.params.section_id
      },
      include:[db.Guest]
  }).then(tables =>  {
    if (tables) {
    res.json(tables)
  }
  else{
    res.status(404).json({error:'could not find table'})
  }
})
})

// Delete Section based on ID
// URL: /api/v1/section/:section_id
router.delete('/:section_id', (req,res)=>{
  const {section_id} = req.params

  db.Guest.destroy({
    where: {
      id: section_id,
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