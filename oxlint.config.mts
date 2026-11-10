import unocss from "@slowpoketail/oxc/lint/unocss";
import wrenjs from "@slowpoketail/oxc/lint/wrenjs";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [wrenjs, unocss],
});
