import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './mockData/users.js'
import parcels from './mockData/parcel.js' 
import User from './models/User.js'
import Parcel from './models/Parcel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()


const importData = async () => {
    
    try {

        await Parcel.deleteMany()
        await User.deleteMany()
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleParcels = parcels.map((parcel)=>{
            return {...parcel, user: adminUser}
        })

        await Parcel.insertMany(sampleParcels)
        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async ()=>{

    try {
        
        await User.deleteMany()
        await Parcel.deleteMany()
        console.log(`All Data are Destroyed`)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }


}





if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }


