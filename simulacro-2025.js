/* SIMULACRO OFICIAL 2025 - Banco con esquema extendido
   ---------------------------------------------------------------------------------------------
   Esquema de cada pregunta (ver también simulacro-2025.schema.json):
   {
     id:                      "S25-001"         identificador estable de la pregunta en este archivo
     bloque:                  "comun" | "especifico"
     tema:                    1-10 (parte específica) o 101-108 (parte común, C1-C8)
     tipo:                    "teorica" | "supuesto"
     dificultad:              "media" | "alta"
     pregunta:                enunciado
     opciones:                { A: "...", B: "...", C: "...", D: "..." }
     respuesta_correcta:      "A" | "B" | "C" | "D"
     justificacion_normativa: texto que se muestra en el modo revisión
     fuente:                  referencia (examen real, norma o "elaborada")
   }
   Al cargar, cada pregunta se convierte al formato interno del banco (window.BANCO) para que la
   usen todos los modos (baterías, repaso, simulacros). Las de dificultad "alta" se marcan como
   difíciles (d = 1). Añade siempre las nuevas AL FINAL para no cambiar los identificadores internos.
   --------------------------------------------------------------------------------------------- */
window.SIM2025 = [
  /* ===================== PARTE COMÚN (3) ===================== */
  { id: "S25-001", bloque: "comun", tema: 101, tipo: "teorica", dificultad: "alta",
    pregunta: "Sobre el artículo 43 de la Constitución Española, señale la respuesta INCORRECTA:",
    opciones: { A: "Reconoce el derecho a la protección de la salud.", B: "Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios.", C: "Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte.", D: "Es un derecho fundamental protegido por el recurso de amparo ante el Tribunal Constitucional." },
    respuesta_correcta: "D",
    justificacion_normativa: "Art. 43 CE, en el Capítulo III del Título I (principios rectores). El recurso de amparo (art. 53.2) protege los arts. 14 a 29 y la objeción de conciencia del art. 30.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-002", bloque: "comun", tema: 105, tipo: "supuesto", dificultad: "alta",
    pregunta: "Un celador estatutario fijo comete el 1 de marzo de 2024 una falta calificada como grave. Si no se inicia ningún procedimiento disciplinario, según el Estatuto Marco la falta prescribirá:",
    opciones: { A: "El 1 de septiembre de 2024.", B: "El 1 de marzo de 2025.", C: "El 1 de marzo de 2026.", D: "El 1 de marzo de 2028." },
    respuesta_correcta: "C",
    justificacion_normativa: "Art. 72 Ley 55/2003: las faltas muy graves prescriben a los 4 años, las graves a los 2 años y las leves a los 6 meses, contados desde que se cometió la falta.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-003", bloque: "comun", tema: 108, tipo: "supuesto", dificultad: "media",
    pregunta: "Un hospital comarcal tiene una plantilla de 600 trabajadores. Según la Ley 31/1995 de Prevención de Riesgos Laborales, le corresponden:",
    opciones: { A: "3 Delegados de Prevención.", B: "4 Delegados de Prevención.", C: "5 Delegados de Prevención.", D: "6 Delegados de Prevención." },
    respuesta_correcta: "B",
    justificacion_normativa: "Art. 35.2 LPRL: de 101 a 500 trabajadores, 3; de 501 a 1.000, 4; de 1.001 a 2.000, 5.",
    fuente: "Elaborada con estilo oficial SERGAS" },

  /* ===================== PARTE ESPECÍFICA (17) ===================== */
  { id: "S25-004", bloque: "especifico", tema: 1, tipo: "supuesto", dificultad: "alta",
    pregunta: "Son las 2:00 h y usted, celador de puerta, ve a un hombre que intenta subir a la planta de pediatría sin identificarse. Dice ser el padre de un niño ingresado. Lo correcto es:",
    opciones: { A: "Dejarle pasar si muestra su DNI, porque los padres pueden acompañar a sus hijos.", B: "Facilitarle el número de habitación del menor para que lo localice.", C: "No permitirle el acceso hasta que el personal de la unidad confirme la autorización, avisando a seguridad si insiste, y sin facilitar datos del menor.", D: "Llamar directamente al 112 para que acuda la policía." },
    respuesta_correcta: "C",
    justificacion_normativa: "Art. 14.2 del Estatuto de personal no sanitario (Orden de 5/7/1971): vigilar las entradas y no permitir el acceso más que a las personas autorizadas. Los datos del paciente son confidenciales (Ley 41/2002 y RGPD).",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-005", bloque: "especifico", tema: 2, tipo: "teorica", dificultad: "media",
    pregunta: "El colchón de aire alternante se utiliza principalmente para:",
    opciones: { A: "Prevenir las úlceras por presión, al ir cambiando los puntos de apoyo del paciente.", B: "Inmovilizar a los pacientes politraumatizados durante el traslado.", C: "Mantener la temperatura corporal del paciente hipotérmico.", D: "Facilitar la movilización del paciente obeso desde la cama a la camilla." },
    respuesta_correcta: "A",
    justificacion_normativa: "Las celdas se hinchan y deshinchan alternativamente y redistribuyen la presión. El colchón de vacío es el que se usa para inmovilizar.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-006", bloque: "especifico", tema: 3, tipo: "teorica", dificultad: "media",
    pregunta: "La posición en la que el paciente está semisentado, con la cabecera de la cama elevada unos 45 grados y las rodillas ligeramente flexionadas, se denomina:",
    opciones: { A: "Sims.", B: "Trendelenburg.", C: "Genupectoral.", D: "Fowler." },
    respuesta_correcta: "D",
    justificacion_normativa: "Fowler (o semi-Fowler con menor elevación): favorece la respiración y la alimentación. Los grados exactos varían según el manual (Fowler alta, cerca de 90°).",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-007", bloque: "especifico", tema: 3, tipo: "supuesto", dificultad: "alta",
    pregunta: "Debe pasar de la cama a la silla de ruedas a un paciente con hemiplejia derecha que colabora parcialmente. La silla se coloca:",
    opciones: { A: "En el lado derecho del paciente, paralela a la cama y sin frenar para facilitar el giro.", B: "En el lado izquierdo (sano), formando un ángulo de unos 30-45° con la cama y con los frenos puestos.", C: "A los pies de la cama, de espaldas a ella, con los reposapiés bajados.", D: "En cualquier lado, siempre que el paciente lleve el brazo afectado cruzado sobre el pecho." },
    respuesta_correcta: "B",
    justificacion_normativa: "La transferencia se hace hacia el lado sano, que es el que soporta el peso. Silla frenada, reposapiés levantados y en ángulo con la cama para acortar el giro.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-008", bloque: "especifico", tema: 3, tipo: "supuesto", dificultad: "media",
    pregunta: "Dos celadores deben subir hacia la cabecera a un paciente encamado que no colabora. Señale la actuación CORRECTA:",
    opciones: { A: "Elevar la cabecera de la cama para que el paciente se deslice con menos esfuerzo.", B: "Tirar del paciente desde las axilas, uno a cada lado, sin bajar la cama.", C: "Frenar la cama, ponerla en posición horizontal, retirar la almohada y desplazar al paciente con la entremetida, un celador a cada lado y a la voz de uno de ellos.", D: "Hacerlo un solo celador desde la cabecera para que no haya descoordinación." },
    respuesta_correcta: "C",
    justificacion_normativa: "Técnica con entremetida (sábana travesera): cama frenada y horizontal, almohada contra el cabecero para proteger la cabeza, movimiento coordinado. Evita fricción y lesiones de espalda (RD 487/1997).",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-009", bloque: "especifico", tema: 3, tipo: "teorica", dificultad: "alta",
    pregunta: "La posición de Sims o semiprona se utiliza habitualmente para:",
    opciones: { A: "La administración de enemas y las exploraciones rectales.", B: "La intervención de tiroides, con hiperextensión del cuello.", C: "Mejorar el retorno venoso en el shock hipovolémico.", D: "Las intervenciones de cirugía renal." },
    respuesta_correcta: "A",
    justificacion_normativa: "Sims: decúbito lateral (habitualmente izquierdo) con la pierna superior flexionada. El shock se relaciona con Trendelenburg; la cirugía renal, con la posición de lumbotomía o de riñón.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-010", bloque: "especifico", tema: 4, tipo: "supuesto", dificultad: "alta",
    pregunta: "En la unidad de psiquiatría le piden colaborar en la contención mecánica parcial de un paciente agitado. La sujeción parcial se realiza en:",
    opciones: { A: "Las dos muñecas, dejando libres las piernas.", B: "Los dos tobillos y el tronco.", C: "Un miembro superior y el miembro inferior del lado contrario (en diagonal), además del tronco si se indica.", D: "Solo el tronco, con un cinturón abdominal." },
    respuesta_correcta: "C",
    justificacion_normativa: "Contención parcial en diagonal (extremidades contralaterales); la total sujeta las cuatro extremidades y el tronco. Las sujeciones se fijan al somier, nunca a las barandillas, y la indicación es médica.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-011", bloque: "especifico", tema: 4, tipo: "teorica", dificultad: "alta",
    pregunta: "En un internamiento psiquiátrico involuntario por razón de urgencia, el responsable del centro debe dar cuenta al tribunal competente en el plazo máximo de:",
    opciones: { A: "72 horas.", B: "24 horas.", C: "48 horas.", D: "7 días." },
    respuesta_correcta: "B",
    justificacion_normativa: "Art. 763.1 de la Ley de Enjuiciamiento Civil: comunicación al tribunal en 24 horas; el tribunal debe ratificar o no la medida en 72 horas desde que la conoce.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-012", bloque: "especifico", tema: 5, tipo: "teorica", dificultad: "alta",
    pregunta: "Según la normativa de sanidad mortuoria de Galicia, el cadáver de una persona fallecida por una enfermedad infectocontagiosa que supone un riesgo para la salud pública se clasifica en el:",
    opciones: { A: "Grupo II.", B: "Grupo III.", C: "Grupo IV.", D: "Grupo I." },
    respuesta_correcta: "D",
    justificacion_normativa: "Grupo I: riesgo infeccioso para la salud pública; Grupo II: riesgo radiológico; Grupo III: el resto de cadáveres.",
    fuente: "Normativa de policía sanitaria mortuoria de Galicia" },
  { id: "S25-013", bloque: "especifico", tema: 6, tipo: "teorica", dificultad: "media",
    pregunta: "En la clasificación ABC de las existencias del almacén, el grupo A está formado por:",
    opciones: { A: "Pocos artículos (en torno al 20 %) que representan la mayor parte (en torno al 80 %) del valor o del consumo.", B: "Los artículos de más reciente adquisición.", C: "Los artículos de bajo valor y elevado número de referencias.", D: "Los artículos caducados o deteriorados pendientes de retirada." },
    respuesta_correcta: "A",
    justificacion_normativa: "Método ABC (principio de Pareto): A, pocos artículos y mucho valor, control estricto; C, muchos artículos y poco valor.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-014", bloque: "especifico", tema: 6, tipo: "supuesto", dificultad: "media",
    pregunta: "Recibe en el almacén un pedido en el que una de las cajas llega aplastada y con producto dañado. Antes de firmar el albarán debe:",
    opciones: { A: "Firmarlo sin más, porque la reclamación se hace después por teléfono.", B: "Comprobar la mercancía frente al albarán y el pedido y anotar la incidencia en el albarán antes de firmarlo.", C: "Rechazar el pedido completo y devolverlo con el transportista.", D: "Retirar la caja dañada y no dejar constancia para no retrasar la recepción." },
    respuesta_correcta: "B",
    justificacion_normativa: "En la recepción se comprueban cantidad y calidad frente al albarán y el pedido. Las incidencias se hacen constar en el albarán antes de firmar para poder reclamar.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-015", bloque: "especifico", tema: 7, tipo: "teorica", dificultad: "alta",
    pregunta: "En la esterilización por calor seco (estufa Poupinel), a una temperatura de 170 °C el tiempo de exposición aproximado es de:",
    opciones: { A: "30 minutos.", B: "120 minutos.", C: "60 minutos.", D: "15 minutos." },
    respuesta_correcta: "C",
    justificacion_normativa: "Calor seco: 160 °C durante 120 min, 170 °C durante 60 min y 180 °C durante 30 min (a mayor temperatura, menor tiempo).",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-016", bloque: "especifico", tema: 7, tipo: "teorica", dificultad: "alta",
    pregunta: "El test de Bowie-Dick sirve para comprobar:",
    opciones: { A: "La eliminación del aire de la cámara y la penetración del vapor en los autoclaves de prevacío.", B: "La destrucción de las esporas, mediante un indicador biológico.", C: "La concentración de óxido de etileno residual.", D: "La temperatura alcanzada en el interior de la estufa de calor seco." },
    respuesta_correcta: "A",
    justificacion_normativa: "Es un control físico-químico que se realiza a diario, con la cámara vacía, antes del primer ciclo. Los indicadores biológicos con esporas son otro tipo de control.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-017", bloque: "especifico", tema: 7, tipo: "supuesto", dificultad: "media",
    pregunta: "Desde el servicio de farmacia le encargan llevar a una planta insulinas y vacunas. Para mantener la cadena del frío las transportará:",
    opciones: { A: "En una bolsa de plástico, sin demora, porque el trayecto es corto.", B: "En una nevera portátil a una temperatura de entre 2 y 8 °C, sin demora y entregándolas al personal de enfermería.", C: "Congeladas, para que aguanten más tiempo.", D: "Junto con el resto de la medicación del carro de unidosis, a temperatura ambiente." },
    respuesta_correcta: "B",
    justificacion_normativa: "Los medicamentos termolábiles se conservan y transportan entre 2 y 8 °C; nunca se congelan.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-018", bloque: "especifico", tema: 8, tipo: "teorica", dificultad: "media",
    pregunta: "En el Sistema de Triaje Manchester, a un paciente clasificado con el color verde le corresponde un tiempo máximo de atención médica de:",
    opciones: { A: "60 minutos.", B: "10 minutos.", C: "240 minutos.", D: "120 minutos." },
    respuesta_correcta: "D",
    justificacion_normativa: "Manchester: rojo 0 min, naranja 10, amarillo 60, verde 120 y azul 240.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-019", bloque: "especifico", tema: 8, tipo: "supuesto", dificultad: "alta",
    pregunta: "Debe gestionarse el traslado programado de un paciente en camilla para una sesión de diálisis. No necesita asistencia sanitaria durante el trayecto. Según el RD 836/2012, la ambulancia adecuada es:",
    opciones: { A: "Clase A1 (no asistencial convencional).", B: "Clase A2 (no asistencial de transporte colectivo).", C: "Clase B (soporte vital básico).", D: "Clase C (soporte vital avanzado)." },
    respuesta_correcta: "A",
    justificacion_normativa: "RD 836/2012: A1, traslado individual en camilla sin asistencia; A2, colectivo de pacientes sentados; B y C, asistenciales.",
    fuente: "Elaborada con estilo oficial SERGAS" },
  { id: "S25-020", bloque: "especifico", tema: 9, tipo: "teorica", dificultad: "alta",
    pregunta: "En una hoja de cálculo, la celda D2 contiene la fórmula =B2*$C$1. Si se copia D2 en D3, la fórmula que aparecerá en D3 es:",
    opciones: { A: "=B2*$C$1", B: "=B3*$C$2", C: "=B3*$C$1", D: "=C3*$C$1" },
    respuesta_correcta: "C",
    justificacion_normativa: "B2 es una referencia relativa y avanza una fila (B3); $C$1 es absoluta y no cambia al copiar.",
    fuente: "Elaborada con estilo oficial SERGAS" }
];

/* Conversión al formato interno del banco */
(function () {
  if (!window.B) return;
  window.SIM2025.forEach(function (s) {
    var ok = s.opciones[s.respuesta_correcta];
    var malas = ["A", "B", "C", "D"].filter(function (l) { return l !== s.respuesta_correcta; }).map(function (l) { return s.opciones[l]; });
    window.B(s.tema, s.tipo === "supuesto" ? "P" : "T", s.pregunta, ok, malas, s.justificacion_normativa);
    var p = window.BANCO[window.BANCO.length - 1];
    p.sid = s.id; p.fuente = s.fuente;
    if (s.dificultad === "alta") p.d = 1;
  });
})();
