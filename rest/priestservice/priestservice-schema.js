import mongoose, { Schema } from 'mongoose';
import mailDelivery from '../messaging/email.js';

const PriestServicesSchema = Schema({
    name: {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        }
      },
      email: {
        type: String,
        lowercase: true,
        required: true
      },
      phone: {
          type: Number,
          required: true,
          min:10
      },
      service: {
        type: String,
        required: true
      },
      serviceDate: {
          type: Date,
          required: true
      },
      created: {
        type: Date,
        default: Date.now
      }
});

PriestServicesSchema.post('save', (doc) =>  {
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'krunalpintoo@gmail.com, ui.krunal@gmail.com', // list of receivers
    subject: 'Thank you for your request', // Subject line
    text: 'thank you so much for making request', // plain text body
    html: '<b>Hello world?</b>' // html body
  };
  mailDelivery(mailOptions);
});

export const PriestServices = mongoose.model('priestservices', PriestServicesSchema);
