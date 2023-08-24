import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";
import config from "@/config";

// USER SCHEMA
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
    },
    image: {
      type: String,
    },
    customerId: {
      type: String,
    },
    priceId: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

userSchema.methods.ownsPDF = function (pdfId) {
  return this.pdfs.includes(pdfId);
};

userSchema.virtual("").get(function () {
  if (this.credits > 0) return true;
  if (!this.subscribedAt || !this.priceId) return false;

  const plan = config.stripe.plans.find(
    (plan) => plan.priceId === this.priceId
  );

  if (!plan) return false;

  return (
    new Date() - new Date(this.subscribedAt) <
    plan.validFor * 24 * 60 * 60 * 1000
  );
});

userSchema.virtual("daysLeft").get(function () {
  if (!this.subscribedAt || !this.priceId) return 0;

  const plan = config.stripe.plans.find(
    (plan) => plan.priceId === this.priceId
  );

  if (!plan) return 0;

  const daysLeft =
    plan.validFor -
    Math.floor(
      (new Date() - new Date(this.subscribedAt)) / (24 * 60 * 60 * 1000)
    );

  return daysLeft;
});

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

export default mongoose.models.User || mongoose.model("User", userSchema);
