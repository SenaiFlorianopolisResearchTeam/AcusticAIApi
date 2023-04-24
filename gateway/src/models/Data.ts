import { Schema, model, models } from "mongoose";

const dataSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
    dataTrafficAI: [
        
    ],
    dataNoiseAI: [
        
    ]

})

const Data = models.Data || model('Data', dataSchema)

export default Data