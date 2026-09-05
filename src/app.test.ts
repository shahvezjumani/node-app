import it from "node:test";
import assert from "node:assert";
import { getCurrentTime } from "./app";

it("should return the current time", () => {
    const time = getCurrentTime();
    assert.ok(time);
});