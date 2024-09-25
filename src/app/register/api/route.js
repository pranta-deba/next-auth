import { dbConnection } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  try {
    const db = await dbConnection();
    const userCollection = db.collection("users");
    const isExist = await userCollection.findOne({ email: email });
    if (isExist) {
      return NextResponse.json(
        {
          message: "Email already exists",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
    const hashedPassword = bcrypt.hashSync(password, 14);
    const result = await userCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      role: "user",
      createAt: new Date(),
    });
    return Response.json(
      {
        message: "Register successfully.",
        success: true,
        result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "Something went wrong!",
        success: false,
      },
      { status: 500 }
    );
  }
};
