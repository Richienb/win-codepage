import test from "ava"
import codePage from "."

test("main", async (t) => {
	if (process.platform === "win32") {
		t.is(typeof await codePage(), "number")
		t.is(typeof codePage.sync(), "number")
	} else {
		await t.throwsAsync(codePage, {
			instanceOf: Error,
			message: "Only Windows is supported!",
		})
		t.throws(codePage.sync, {
			instanceOf: Error,
			message: "Only Windows is supported!",
		})
	}
})
