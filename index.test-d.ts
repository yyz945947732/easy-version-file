import { expectType } from "tsd";
import { readVersionFile } from "./index.js";

expectType<Promise<string>>(readVersionFile());
