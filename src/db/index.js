import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
