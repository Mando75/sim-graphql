import Mongoose from './mongodb-connection';

/**
 *
 */
const StudentSchema = Mongoose.Schema({
  first_name: String,
  last_name: String,
  orgId: String,
  unit_id: String,
  section: String,
  authToken: String,
  type: String
}, {collection: "Students"});

const StudentModel = Mongoose.model('Student', StudentSchema);

export default StudentModel;