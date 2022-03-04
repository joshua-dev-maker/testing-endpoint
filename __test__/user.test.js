const app = require("../src/app");
const mongoose = require("mongoose");
const databaseName = "user_test";
const supertest = require("supertest");
const request = supertest(app);
const User = require("../src/models/user.model");

const users = [
  {
    name: "Zell",
    email: "testing1@gmail.com",
  },
  {
    name: "Vincy",
    email: "testing2@gmail.com",
  },
  {
    name: "Shion",
    email: "testing3@gmail.com",
  },
];

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

beforeEach(async () => {
  await users.find((user) => {
    const newUser = new User(user);
    newUser.save();
  });
});

describe("POST /api/v1", () => {
  it("should save user into the database", async () => {
    const res = await request.post("/signup").send({
      name: "abiodun",
      email: "abiodun@gmail.com",
    });
    const user = await User.findOne({ email: "abiodun@gmail.com" });
    console.log(user);
    // expect(res.status).toBe(201);
    expect(user.name).toBeTruthy();
    expect(user.email).toBeTruthy();
  });
});

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await User.drop();
});
