import { Schema, Types, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  data: [
    {
      sessionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      session: {
        type: String,
        required: true,
      },
      videos: {
        type: Number,
        required: true,
      },
      horas: {
        type: Number,
        required: true,
      },
      veiculos: {
        type: Number,
        required: true,
      },
      carros: {
        type: Number,
        required: true,
      },
      onibus: {
        type: Number,
        required: true,
      },
      motos: {
        type: Number,
        required: true,
      },
    },
  ],
});

const User = models.User || model('User', userSchema);

export default User;