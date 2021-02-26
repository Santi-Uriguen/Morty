const eye1 = document.getElementById("eyeUno");
const eye2 = document.getElementById("eyeDos");
window.addEventListener("mousemove", (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 14;
  const y = -(window.innerHeight / 2 - evt.pageY) / 6;
  eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
  eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});

const morty = document.getElementById("Morty");
morty.addEventListener("click", () => {
  const contViejo = document.getElementById("audioContainer");
  if (contViejo != null || contViejo != undefined) {
    contViejo.remove();
  }
  const container = document.createElement("div");
  container.setAttribute("id", "audioContainer");
  morty.appendChild(container);
  const audio = document.createElement("audio");
  const random = Math.floor(Math.random() * 6) + 1;
  console.log(random)
  switch (random) {
    case 1:
      audio.setAttribute("src", "./OhChrist.mp3");
      break;
    case 2:
      audio.setAttribute("src", "./Aw.mp3");
      break;
    case 3:
      audio.setAttribute("src", "./Hohohoo.mp3");
      break;
      case 4:
        audio.setAttribute("src", "./Auch.mp3");
        break;
        case 5:
            audio.setAttribute("src", "./Ah.mp3");
      break;
      case 6:
            audio.setAttribute("src", "./Ah.mp3");
      break
    default:
      audio.setAttribute("src", "./Oh.mp3");
      break;
  }
  container.appendChild(audio);

  audio.play();
});
