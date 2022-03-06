const app = require("../src/app");
const mongoose = require("mongoose");
const databaseName = "sample_test";
const supertest = require("supertest");
const request = supertest(app);

const addition = require("../addition");

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

it("addition of a + b should 3", () => {
  const result = addition(1, 3);
  expect(result).toBe(3);
  //   expect(1).toBe(1);
});

describe("GET /api/v1", () => {
  it("should get a status of 200 and have message of testing get endpoint", async () => {
    const res = await request.get("/test");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("testing get endpoint!");
  });

  it("should return all users", async () => {
    const res = await request.get("/users");

    expect(res.status).toBe(200);
  });
});
