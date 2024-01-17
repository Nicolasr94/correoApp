let currentTimestamp;
let expirationTimestamp 
function getDate(){
const currentDate = new Date();
    currentTimestamp = Timestamp.fromDate(currentDate);

    // Calcular la fecha de vencimiento (6 días en el futuro)
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 6);
     expirationTimestamp = Timestamp.fromDate(expirationDate);

    return {currentTimestamp, expirationTimestamp};
}
export {currentTimestamp, expirationTimestamp};