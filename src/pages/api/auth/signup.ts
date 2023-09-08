// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import type { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDb();

    const { first_name, last_name, email, phone, password } = req.body;
    if (!first_name || !last_name || !email || !phone || !password) {
      return res.status(400).json({ message: "Please fill in all fileds." });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ message: "Please Add a valid email address." });
    }
    if (!validator.isMobilePhone(phone)) {
      return res
        .status(400)
        .json({ message: "Please Add a valid phone number." });
    }

    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return res
        .status(400)
        .json({ message: "This email address already exists." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newuser = new User({
      name: `${first_name + " " + last_name}`,
      email,
      phone,
      password: cryptedPassword,
    });
    await newuser.save();
    res.json({
      message: "Register success! Pleease activate your account to start.",
    });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
