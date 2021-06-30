import mongoose from "mongoose";



const parcelSchema = mongoose.Schema(
    {
      parcelName: {
          type: String,
          required: true
      },
      senderAddress: {
          type: String,
          required: true
      },
      recieverAddress: {
          type: String,
          required: true,
      },
      senderName: {
          type: String,
          required: true
      },
      recieverName: {
          type: String,
          required: true
      },
      accountDetail: {
          type: Object,
          required: true
      },
      trackingCode: {
          type: String, 
          required: true
      },
      transit: {
          transitAddress: {type: String, required: true},
          transitDate: {type: String, required: true},
          mode: {type: String, required: true},
          departure: {
              date: {type: String, required: true},
              time: {type: String, required: true},
          },
          arrival: {
              date: {type: String, required: true},
              time: {type: String, required: true},
          }

      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }

    }, {timestamps: true}
);

const Parcel = mongoose.model('Parcel', parcelSchema);

export default Parcel;