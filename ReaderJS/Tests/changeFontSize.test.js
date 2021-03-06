const DevToolsLibrary = require("./devtoolslibrary");

describe('When change font size', () => {
  test('should be totalPages set to correct value', async() => {
    const chromeless = DevToolsLibrary.getChromeless();

    await chromeless
      .initDevTools(300, 300, 30, 30)
      .sendLoadHtmlMessage(DevToolsLibrary.generateLoremIpsum())
      .sendChangeFontSizeMessage(40);

    const readerJS = await chromeless.getReaderJS();

    expect(readerJS.totalPages).toBe(19);

    await chromeless.end();
  });

  test('should be PageChange message received with correct value', async() => {
    const chromeless = DevToolsLibrary.getChromeless();

    await chromeless
      .initDevTools(300, 300, 30, 30)
      .sendLoadHtmlMessage(DevToolsLibrary.generateLoremIpsum())
      .sendChangeFontSizeMessage(40);

    const lastReceivedMessage = await chromeless.getLastReceivedMessage();

    expect(lastReceivedMessage.data.TotalPages).toBe(19);

    await chromeless.end();
  });

  describe('when page is 2', () => {
    test('should scroll to the same position', async() => {
      const chromeless = DevToolsLibrary.getChromeless();

      await chromeless
        .initDevTools(400, 800, 30, 45)
        .sendLoadHtmlMessage(DevToolsLibrary.generateLoremIpsum())
        .goToPageFast(2)
        .sendChangeFontSizeMessage(40);

      const currentContent = await chromeless.getReaderContent();

      expect(currentContent).toBe(
        'Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis.Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam rhoncus aliquam metus.Quis autem vel eum iure'
      );

      await chromeless.end();
    });
  });

  beforeAll(() => {
    DevToolsLibrary.init();
  });
});