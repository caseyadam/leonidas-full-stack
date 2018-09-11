const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile')

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

// @route GET api/profile/test
// @desc Tests post route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

// @route GET api/profile
// @desc Get current users profile
// @access Private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const errors = {};

    Profile.findOne({user: req.user.id})
    .populate('user', ['name', 'avatar'])
    .then(profile => {
        if(!profile){
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route GET api/profile/all <<< Get all shopping items? This is in Section 4: More Profile API Routes
// @desc Get all profiles
// @access Public
router.get('/all', (req, res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }
      // if there is a profile, sent it along
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});


// @route GET api/profile/handle/:handle <<< Make this the shop?
// @desc Get profile by handle
// @access Public
router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Profile.findOne({handle: req.params.handle})
  .populate('user', ['name', 'avatar'])
  .then(profile => {
    if(!profile) {
      errors.noprofile = 'There is no profile for this user';
      res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});

// @route GET api/profile/user/:user_id 
// @desc Get profile by user ID
// @access Public
router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    );
}); 

// @route POST api/profile
// @desc Create or Edit user profile
// @access Private
router.post(
    '/', 
    passport.authenticate('jwt', {session: false}), 
    (req, res) => {
        const {errors, isValid} = validateProfileInput(req.body);

      // Check Validation
      if(!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }

        // Get fields
        const profileFields = {};
        profileFields.user = req.user.id;
        if(req.body.handle) profileFields.handle = req.body.handle;
        if(req.body.firstname) profileFields.firstname = req.body.firstname;
        if(req.body.lastname) profileFields.lastname = req.body.lastname;
        if(req.body.street) profileFields.street = req.body.street;
        if(req.body.unit) profileFields.unit = req.body.unit;
        if(req.body.city) profileFields.city = req.body.city;
        if(req.body.state) profileFields.state = req.body.state;
        if(req.body.zip) profileFields.zip = req.body.zip;

    // Search for user by logged in users ID
    Profile.findOne({ user: req.user.id }).then(profile => {
        // If they have a profile...
        if (profile) {
          // Update profile with new fields coming in
          Profile.findOneAndUpdate( // mongoose method
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then(profile => res.json(profile));
          // If they don't have a profile...
        } else {
          // Create
  
          // Check if handle exists. Handle is to access the profile page in an SEO friendly way
          Profile.findOne({ handle: profileFields.handle }).then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists';
              res.status(400).json(errors);
            }
            // Save Profile
            new Profile(profileFields).save().then(profile => res.json(profile)); // .save creates a promise
          });
        }
      });
});

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;