import Parcel from '../models/Parcel.js'
import asyncHandler from 'express-async-handler'

// @ Get all parcel 
// api/parcels
const getAllParcels = asyncHandler( async(req, res)=>{
    const parcels = await Parcel.find({})
    res.status(200).json(parcels);
});


// @ Get single parcel
// api/parcels/:id
const getSingleParcel = asyncHandler( async(req, res)=>{
    const parcel = await Parcel.findById({_id: req.params.id})
    res.status(200).json(parcel)
});


const updateSingleParcel = asyncHandler( async(req, res)=>{

    const { parcelInterface } = req.body
    console.log(parcelInterface)

    const id = req.params.id
    const parcelFound = await Parcel.findById({_id: id})
    if(parcelFound){
        parcelFound.parcelName = parcelInterface.parcelName,
        parcelFound.senderAddress = parcelInterface.senderAddress,
        parcelFound.recieverAddress = parcelInterface.recieverAddress,
        parcelFound.senderName = parcelInterface.senderName,
        parcelFound.recieverName = parcelInterface.recieverName
        parcelFound.transit.arrival.time = parcelInterface.transit.arrival.time,
        parcelFound.transit.arrival.date = parcelInterface.transit.arrival.date,

        parcelFound.transit.departure.time = parcelInterface.transit.departure.time,
        parcelFound.transit.departure.date = parcelInterface.transit.departure.date,
        parcelFound.transit.mode = parcelInterface.transit.mode,



        parcelFound.transit.transitAddress = parcelInterface.transit.transitAddress,
        parcelFound.accountDetail.accountName = parcelInterface.accountDetail.accountName,
        parcelFound.accountDetail.accountNumberAddress = parcelInterface.accountDetail.accountNumberAddress,
        parcelFound.accountDetail.accountType = parcelInterface.accountDetail.accountType,
        parcelFound.accountDetail.instituteName = parcelInterface.accountDetail.instituteName 


        const parcelUpdated = await parcelFound.save(parcelInterface)
        res.status(200).json(parcelUpdated)
    }else{
        res.status(404)
        throw new Error('Parcel not found')
    }




})

// @ Post Search parcel by trackingCode
// api/parcels/searchTracking
const getParcelBySearch = asyncHandler( async(req, res)=>{
    const {trackingCode} = req.body
    const parcelFound = await Parcel.findOne({trackingCode})
    if(parcelFound){
        res.status(200).json(parcelFound)
    }else{
        res.status(200).json({msg: "No Parcel Found"})
    }
});


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createSingleParcel = asyncHandler(async (req, res) => {
   
    let { parcelInterface } = req.body
    parcelInterface.user = req.user._id
    // console.log(parcelInterface)
    const createdParcel = await Parcel.create(parcelInterface)
    res.status(201).json(createdParcel)
  })



const deleteParcel = asyncHandler(async (req, res) => {
  
        const user = await Parcel.deleteOne({_id: req.params.id})
        res.json(user)
    
})



export default {
    getAllParcels,
    getSingleParcel,
    getParcelBySearch,
    updateSingleParcel,
    createSingleParcel,
    deleteParcel,

}