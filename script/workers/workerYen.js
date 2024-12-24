addEventListener("message", event => {
    connectAPI();
    setInterval(() => connectAPI(), 5000);
});

async function connectAPI() {
    const connection = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL");
    const translatedConnection = await connection.json();
    postMessage(translatedConnection.JPYBRL);
}
