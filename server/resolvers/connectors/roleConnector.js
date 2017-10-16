import Mongoose from 'server/resolvers/mongooseSchemas/mongodb-connection';

const RoleSchema = Mongoose.Schema({
  id: Mongoose.Schema.Types.ObjectId,
  name: String
});

export default Mongoose.model('Role', RoleSchema);