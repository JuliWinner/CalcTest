# CalcTest
First automation tests for calculator app

# Установка и запуск
1. Запускаем программу Appium со следующими настройками:
    - Хост: localhost
    - Порт: 4723
2. Запускаем Android эмулятор (version - Android 5.1)
3. В консоли выполняем команды:
    - `npm install`
    - `npm install mocha -g`
4. Прописываем путь до .apk файла в файле test.js (opts.capabilities.app)
5. Запускаем тесты командой `mocha test.js --timeout 60000` (увеличить таймаут, если будут ошибки)