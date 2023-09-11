import test from "ava";
import { readVersionFile } from "./index.js";

test("version content", async (t) => {
	t.assert(await readVersionFile(), "1.0.0");
});
