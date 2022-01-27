if (webIdeButton = document.querySelector('[data-qa-selector="web_ide_button"]')) {
  webIdeButton.style.display = "none";
}
if (editIdeButton = document.querySelector('[data-track-action="click_edit_ide"]')) {
  editIdeButton.style.display = "none";
}
if (infrastructureLink = document.querySelector('[data-track-label="infrastructure_menu"]')) {
    infrastructureLink.style.display = "none";
}
if (monitorLink = document.querySelector('[data-track-label="monitor_menu"]')) {
    monitorLink.style.display = "none";
}
document.evaluate("//a[contains(text(),'Add Kubernetes cluster')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display = "none";