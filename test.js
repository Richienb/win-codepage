import test from "ava"
import codePage from "."

test("main", async (t) => {
	if (process.platform === "win32") {
		t.is(await codePage(), 850)
		t.is(codePage.sync(), 850)
	} else {
		t.throwsAsync(() => codePage(), {
			instanceOf: Error,
			message: "Only Windows is supported!",
		})
		t.throws(() => codePage.sync(), {
			instanceOf: Error,
			message: "Only Windows is supported!",
		})
	}
})
