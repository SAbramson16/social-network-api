const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: isEmail,
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thoughts',
        },
    ],
    friends: [
        {type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema
.virtual('friendCount')
.get(function () {
    return `${this.friends.length}`
})

const User = model('USer', userSchema);

module.exports = User;
