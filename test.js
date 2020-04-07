const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
    hostname: 'localhost',
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "5.1",
      deviceName: "Android Emulator",
      app: "C:/Users/afars/Desktop/Юля/тестовое дром/autotests/app-debug.apk",
      appPackage: "com.vbanthia.androidsampleapp",
      appActivity: ".MainActivity",
      automationName: "UiAutomator2",
    },
    logLevel: 'silent',
};

let client; 

describe("Проверка кнопок экрана", () => {
    before(async () => {
        client = await wdio.remote(opts);
    });

    after(async () => {
        await client.deleteSession();
    });

    beforeEach(async () => {
        await client.reset();
    });

    describe("Кнопка +", () => {
        it("Кнопка кликабельна, при клике под кнопками появляется текст", async () => {
            const plusButton = await client.$("~additionButton");
            await plusButton.click();
            const result = await client.$("~resultTextView");
            const actualValue = await result.getText();
            assert.equal(actualValue, "Please, fill the input fields correctly");
        })

    })

    describe("Кнопка -", () => {
        it("Кнопка кликабельна, при клике под кнопками появляется текст", async () => {
            const minusButton = await client.$("~subtractButton");
            await minusButton.click();
            const result = await client.$("~resultTextView");
            const actualValue = await result.getText();
            assert.equal(actualValue, "Please, fill the input fields correctly");
        })
    })

    describe("Кнопка *", () => {
        it("Кнопка кликабельна, при клике под кнопками появляется текст", async () => {
            const multiButton = await client.$("~multiplicationButton");
            await multiButton.click();
            const result = await client.$("~resultTextView");
            const actualValue = await result.getText();
            assert.equal(actualValue, "Please, fill the input fields correctly");
        })
    })

    describe("Кнопка /", () => {
        it("Кнопка кликабельна, при клике под кнопками появляется текст", async () => {
            const divButton = await client.$("~divisionButton");
            await divButton.click();
            const result = await client.$("~resultTextView");
            const actualValue = await result.getText();
            assert.equal(actualValue, "Please, fill the input fields correctly");
        })
    })
})