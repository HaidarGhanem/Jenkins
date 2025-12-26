const express = require('express')
const Profile = require('../models/Profile')
const router = express.Router()

router.route('/api/v1/profiles')
    .get(async(req,res)=>{
        try {
            const profiles = await Profile.find()
            return res.status(200).json({success: true, count: profiles.length, data: profiles})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    })
    .post(async(req,res)=>{
        try {
            const profile = await Profile.create(req.body)
            return res.status(200).json({success: true, data: profile})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    })

router.route('/api/v1/profiles/:id')
    .get(async(req,res)=>{
        try {
            const profile = await Profile.findById(req.params.id)
            if(!profile){
                return res.status(404).json({success: false, message: 'Profile not found!'})
            }
            return res.status(200).json({success: true, data: profile})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    })
    .put(async(req,res)=>{
        try {
            await Profile.findByIdAndUpdate(req.params.id, req.body , {
                new: true,
                runValidators: true
            })
            const profile = await Profile.findById(req.params.id)
            if(!profile){
                return res.status(404).json({success: false, message: 'Profile not found!'})
            }
            return res.status(200).json({success: true, data: profile})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    })
    .delete(async(req,res)=>{
        try {
            const profile = await Profile.findByIdAndDelete(req.params.id)
            if(!profile){
                return res.status(404).json({success: false, message: 'Profile not found!'})
            }
            return res.status(200).json({success: true, message: `Profile Deleted - ID: ${profile._id}`})
        } catch (error) {
            return res.status(500).json({success: false, error: error.message})
        }
    })

module.exports = router