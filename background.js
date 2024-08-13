let blockedSites = ["facebook.com", "youtube.com", "instagram.com"];
let blockActive = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "startBlocking") {
    blockActive = true;
    const sitesToBlock = [...blockedSites, ...message.customSites];
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: sitesToBlock.map((site, id) => ({
        id: id + 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: `*://${site}/*`,
          resourceTypes: ["main_frame"]
        }
      })),
      removeRuleIds: sitesToBlock.map((_, id) => id + 1)
    });
  } else if (message.command === "stopBlocking") {
    blockActive = false;
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [...blockedSites, ...message.customSites].map((_, id) => id + 1)
    });
  }
});

chrome.alarms.onAlarm.addListener(() => {
  blockActive = false;
  chrome.runtime.sendMessage({ command: "timeUp" });
});
