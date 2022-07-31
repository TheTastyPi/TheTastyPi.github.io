const projData = [
  {
    id: "just-a-platformer-2",
    name: "just a platformer 2",
    status: "In Development",
    desc: "Another platformer, but with many more features!"
  },
  {
    id: "just-a-platformer",
    name: "just a platformer",
    status: "Complete",
    desc: "A simple platformer with a versatile level editor."
  },
  {
    id: "The-Bulletin-Board",
    name: "The Bulletin Board",
    status: "On Hold",
    desc: "An incremental game with post-it notes plus some randomness."
  },
  {
    id: "Progress-Bar-The-Game",
    name: "Progress Bar: The Game",
    status: "Discontinued",
    desc: "An incremental game with progress bars and a neat look."
  },
  {
    id: "Exponential-Madness",
    name: "Exponential Madness",
    status: "Discontinued",
    desc: "An incremental game with very big numbers from exponential growth."
  }
];
function createIcon(data) {
  let cont = ele("iconCont");
  let icon = document.createElement("div");
  cont.appendChild(icon);
  icon.classList.add("icon");
  let link = document.createElement("a");
  link.href = `https://thetastypi.github.io/${data.id}`;
  let pic = document.createElement("img");
  pic.src = `pics/${data.id}.png`;
  pic.classList.add("pic");
  link.appendChild(pic);
  icon.appendChild(link);
  let overlay = document.createElement("button");
  overlay.innerText = `[${data.status}]\n${data.name}\n\n${data.desc}\n\nClick to play`;
  overlay.classList.add("picOverlay");
  link.appendChild(overlay);
}
for (let i in projData) createIcon(projData[i]);
