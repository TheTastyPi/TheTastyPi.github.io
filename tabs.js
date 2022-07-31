var currentTab;
function switchTab(id) {
  if (currentTab === id) return;
  if (currentTab) {
    ele(currentTab + "Tab").style.display = "none";
    ele(currentTab + "Btn").classList.remove("inTab");
  }
  currentTab = id;
  ele(currentTab + "Tab").style.display = "block";
  ele(currentTab + "Btn").classList.add("inTab");
}
function ele(id) {
  return document.getElementById(id);
}
