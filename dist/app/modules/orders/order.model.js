'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Order = void 0;
const mongoose_1 = require('mongoose');
const orderSchema = new mongoose_1.Schema(
  {
    cow: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'Cow', // Assuming you have a 'Cow' model defined
    },
    buyer: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a 'User' model defined
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
