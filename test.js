import test from "ava"
import codePage from "."

test("main", async (t) => {
	if (process.platform === "win32") {
		t.is(await codePage(), 850)
		t.is(codePage.sync(), 850)
	} else {
		t.throws(codePage, {
			instanceOf: Error,
			message: "Only Windows is supported!",
		})
	}
})
