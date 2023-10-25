//animaçoes
AOS.init();

// contagem regressiva
const contador = document.querySelector("#contador");
const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAshoras = setInterval(function () {
  const agora = new Date();
  const timeStampDoAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampDoAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutosEmMS = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % (1000 * 60 * 60 * 24)) / horaEmMs
  );

  const minutosAteOEventos = Math.floor(
    (distanciaAteOEvento % (1000 * 60 * 60)) / minutosEmMS
  );

  const segundosAteEvento = Math.floor(
    (distanciaAteOEvento % minutosEmMS) / 1000
  );

  contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEventos}m ${segundosAteEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAshoras);
    contador.innerHTML = "Evento Finalizado";
  }
}, 1000);
