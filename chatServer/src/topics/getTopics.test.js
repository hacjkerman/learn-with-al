import getTopics from "./getTopics";

test("gets all topic names", () => {
  expect(getTopics()[0].toBe("Psychology"));
});
