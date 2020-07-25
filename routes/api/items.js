const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @route POST api/items
// @desc create an item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        gravity: req.body.gravity,
        recipe: req.body.recipe,
        notes: req.body.notes
    });

    newItem.save()
        .then(item => res.json(item));
});

//@route GET api/items/:id
//@desc get single item
//@access Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(404).json({success: false}))
})

// @route DELETE api/items/:id
// @desc delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove()
            .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))        
});

// @route PUT api/items/:id
// @desc update an item
// @access Public
router.put('/:id', (req, res) => {


    const beerUpdate = {...req.body};
    console.log(beerUpdate)

    //check to see if fields are included in request, if not remove them from the req
    if (beerUpdate.gravity === undefined) {
        delete beerUpdate.gravity
    }

    if(beerUpdate.recipe === undefined) {
        delete beerUpdate.recipe
    }

    if(beerUpdate.notes === undefined) {
        delete beerUpdate.notes
    }

    if(beerUpdate.description === undefined) {
        delete beerUpdate.description
    }
    //make sure req includes necesarry field
    const checkKeys = Object.values(beerUpdate).filter(Boolean).length

    if(checkKeys === 0){
      return res.status(400).json({
        error: {
          message: `must contain either gravity, recipe item, note, or description`
        }
      })
    }



    Item.findOneAndUpdate({_id: `${req.params.id}`},
    {
        $set: {...beerUpdate} 
    }, {new: true},
    (err, doc) => {
        if(err){
            res.status(400).json({
                error: {
                    message: 'Something went wrong. Try again.'
                }
            })
        }
        res.json(doc)})
});


module.exports = router;