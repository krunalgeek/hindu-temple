import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * @name user
 */
const userSchema = Schema({
  personalDetail: {
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
      index: {
        unique: true
      },
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    address: {
      addressLine1: {
        type: String,
        required: true
      },
      addressLine2: {
        type: String,
        required: false
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zipCode: {
        type: Number,
        required: true,
        min: 5
      }
    },
    occupation: {
      type: String,
      required: true
    },
    samaj: {
      type: String,
      required: false
    },
    originalStateInIndia: {
      type: String,
      required: false
    },
    originalVillageInIndia: {
      type: String,
      required: false
    },
    participateVolunteerWork: {
      type: Boolean,
      required: true
    }
  },
  familyDetail: {
    type: Array
  },
  membership: {
    type: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }
});

const familyMember = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  occupation: {
    type: String,
    required: false
  },
  relationship: {
    type: String,
    required: true
  }
});
/**
 * @name user
 */
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('personalDetail.password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.personalDetail.password, salt, (error, hash) => {
      if (error) return next(error);
      user.personalDetail.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
  const user = this;
  console.log('this......', this);
  bcrypt.compare(candidatePassword, user.personalDetail.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

userSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password;
    return ret;
  }
});

export const User = mongoose.model('User', userSchema);
