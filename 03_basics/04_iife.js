// Immediately Invoked Function Expression (IIFE)

(function dbServer() {
    console.log(`DB connected`);
})();

((name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
})("azhar");
