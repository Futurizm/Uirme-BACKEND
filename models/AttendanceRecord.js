const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  event_name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  scanned_by: { type: String, required: true },
  school_id: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true }, // Добавьте это
  studentName: { type: String }, // Optional field for convenience
});

// Unique index to prevent duplicates
attendanceSchema.index({ student_id: 1, event_name: 1 }, { unique: true });

module.exports = mongoose.model('AttendanceRecord', attendanceSchema);