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
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-IJB0Z39VSYPZ-2-2");
