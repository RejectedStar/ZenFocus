document.getElementById('startBtn').addEventListener('click', () => {
    let time = parseInt(document.getElementById('timeInput').value);
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid time.");
        return;
    }
    chrome.runtime.sendMessage({ command: "startBlocking" });
    chrome.alarms.create({ delayInMinutes: time });
    document.getElementById('status').innerText = `Blocking for ${time} minutes...`;
});

document.getElementById('stopBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: "stopBlocking" });
    chrome.alarms.clearAll();
    document.getElementById('status').innerText = "Blocking stopped.";
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.command === "timeUp") {
        document.getElementById('status').innerText = "Time's up! Blocking stopped.";
    }
});
let customSites = [];

document.getElementById('startBtn').addEventListener('click', () => {
    let time = parseInt(document.getElementById('timeInput').value);
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid time.");
        return;
    }
    chrome.runtime.sendMessage({ command: "startBlocking", customSites });
    chrome.alarms.create({ delayInMinutes: time });
    document.getElementById('status').innerText = `Blocking for ${time} minutes...`;
});

document.getElementById('stopBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: "stopBlocking" });
    chrome.alarms.clearAll();
    document.getElementById('status').innerText = "Blocking stopped.";
});

document.getElementById('addBtn').addEventListener('click', () => {
    let site = document.getElementById('websiteInput').value.trim();
    if (site && !customSites.includes(site)) {
        customSites.push(site);
        document.getElementById('websiteInput').value = '';
        alert(`Added ${site} to block list.`);
    }
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.command === "timeUp") {
        document.getElementById('status').innerText = "Time's up! Blocking stopped.";
    }
});
