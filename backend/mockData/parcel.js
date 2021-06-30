
import  {randomBytes} from "crypto"

const parcels = [
    {
        parcelName: "Dell Pc",
        senderAddress: "23/1 Edwarda Demboskiego",
        recieverAddress: "25/67 Kingston road Texas Usa",
        senderName: "Sunday Odibo",
        recieverName: "James Nickson",
        departureTime: Date.now(),
        arrivalTime: Date.now(),
        accountDetail: {
            bank: {
                accountNo: randomBytes(11).toString("hex"),
                accountName: "sunday odibo",
                name: "Bank Poski"
            },
            crypto: {
                walletAddress: randomBytes(15).toString("hex"),
                type: "bitcoin"
            }

        },
        trackingCode: randomBytes(6).toString("hex"),
        transit: {
            address: "France kingson",
            time: Date.now(),
            mode: {
                checking: "departure",
                // inTransit: "transit",
                // arrival: "arrival",
                // departure: "departure"
            },
        }
        
    },

]

export default parcels