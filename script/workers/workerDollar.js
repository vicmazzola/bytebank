async function connectAPI() {
    const connection = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const translatedConnection = await connection.json();
    postMessage(translatedConnection.USDBRL);
}

addEventListener("message", () => {
    connectAPI();
    setInterval(() => connectAPI(), 5000);
});
