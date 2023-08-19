document.addEventListener("DOMContentLoaded", function() {
  const midTerm = document.getElementById("midTerm");
  midTerm.addEventListener("click", function() {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: "midTerm" });
    });
  });
  const finalTerm = document.getElementById("finalTerm");
  finalTerm.addEventListener("click", function() {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: "finalTerm" });
    });
  });
});
