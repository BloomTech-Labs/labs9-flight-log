const request = require("supertest");
const { server } = require("./server");

describe("server.js", () => {
  describe("root endpoint (/)", () => {
    test("should return status 200", async () => {
      const expected = "<h1>Server running</h1>";
      const response = await request(server).get("/");
      expect(response.text).toEqual(expected);
    });
  });
  describe("(/admins) route", () => {
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/admins");
      expect(response.status).toEqual(expected);
    });
    test("should return db", async () => {
      const expected = [
        { id: 1, firstName: "Mark", lastName: "Hermansen" },
        { id: 2, firstName: "Wanda", lastName: "Evans" },
        { id: 3, firstName: "Quan", lastName: "Nguyen" },
        { id: 4, firstName: "Steve", lastName: "Smodish" },
        { id: 5, firstName: "Trevor", lastName: "Lewis" },
        { id: 6, firstName: "Jeff", lastName: "Kang" }
      ];
      const response = await request(server).get("/admins");
      expect(response.body).toEqual(expected);
    });
  });
});
