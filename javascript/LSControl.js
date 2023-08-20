const LS_DATA_KEY = "__KeepItSecretLSData__"
const LS_TEMP_KEY = "__KeepItSecretLSTemp__"

function getLSData() {
    return JSON.parse(localStorage.getItem(LS_DATA_KEY))
}

function setLSData(newData) {
    localStorage.setItem(
        LS_DATA_KEY,
        JSON.stringify(newData)
    )
}

function getTempLSData() {
    return JSON.parse(localStorage.getItem(LS_TEMP_KEY))
}

function setTempLSData(newTempData) {
    localStorage.setItem(
        LS_TEMP_KEY,
        JSON.stringify(newTempData)
    )
}


var secretsData = [];

if (getLSData() === null) {
	setLSData({
		secrets: [],
		created: [],
	});
} else {
	secretsData = getLSData();
}

if (getTempLSData() === null) {
	setTempLSData({});
}