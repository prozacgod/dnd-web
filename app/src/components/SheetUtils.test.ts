import { loadCharacterSheetViewModel } from "./SheetUtils";

describe("SheetUtils", () => {
  it("Creates valid empty character shee View Model", () => {
    const sheet = loadCharacterSheetViewModel(null);
    expect(sheet).toMatchSnapshot();
  });
});
