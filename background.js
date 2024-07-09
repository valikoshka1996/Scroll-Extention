chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scrollUp",
    title: "Scroll вверх",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "scrollDown",
    title: "Scroll вниз",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "scrollUp") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrollUp
    });
  } else if (info.menuItemId === "scrollDown") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrollDown
    });
  }
});

function scrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollDown() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
