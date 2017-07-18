var mongoose = require('mongoose');

var PropertySchema = mongoose.Schema({
  address: { type: String, index: true, required: true},
  br: { type: Number },
  ba: { type: Number },
  rent: { type: Number },
  lease: { type: mongoose.Schema.ObjectId, ref: 'Lease' },
  maintenanceRequests: [{ type: mongoose.Schema.ObjectId, ref: 'Maintenance'}],
  notes: [{ type: String }],
  type: {
    type: String,
    default: 'properties'
  }
});

var PropertySchema = module.exports = mongoose.model('Property', PropertySchema);
