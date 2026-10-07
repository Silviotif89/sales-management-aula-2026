/*
  DIRECCIÓN DE LA FUERZA DE VENTAS
  Presentación HTML offline para una clase dirigida por el profesor.
  Fuente principal: Sales_Management_S8_Direccion_Fuerza_Ventas_AULA.pptx
*/

const APP_VERSION = 11;

const preQuestions = [
  {
    q: "El equipo vende solo 67% de la meta. ¿Qué revisarías primero?",
    options: ["Aumentar la presión", "Diagnosticar las causas", "Bajar todas las cuotas", "Cambiar al equipo"], correct: 1
  },
  {
    q: "Una vendedora quiere mejorar, pero todavía falla al manejar objeciones. ¿Qué necesita?",
    options: ["Más comisión", "Una sanción", "Capacitación y acompañamiento", "Autonomía total"], correct: 2
  },
  {
    q: "Un vendedor nuevo empieza una ruta desconocida. ¿Qué liderazgo conviene al inicio?",
    options: ["Delegador", "Directivo con acompañamiento", "Ausente", "Solo motivacional"], correct: 1
  },
  {
    q: "Dos territorios tienen potencial muy distinto. ¿Las cuotas deben ser iguales?",
    options: ["Siempre", "Nunca se usan cuotas", "Depende solo de la antigüedad", "Deben considerar potencial y carga"], correct: 3
  },
  {
    q: "La comisión premia solo volumen y aumenta la mora. ¿Qué harías?",
    options: ["Premiar más volumen", "Combinar venta, margen y cobranza", "Eliminar todo incentivo", "Ignorar la mora"], correct: 1
  }
];

const postQuestions = [
  {
    q: "Un vendedor cumple visitas y conoce el producto, pero su zona tiene pocos clientes. ¿Qué causa revisarías primero?",
    options: ["Actitud", "Capacidad", "Sistema comercial", "Claridad"], correct: 2
  },
  {
    q: "Una vendedora domina la tarea, pero considera injusto el incentivo y reduce sus visitas. ¿Qué diagnóstico pesa más?",
    options: ["Capacidad", "Motivación", "Claridad", "Conocimiento del producto"], correct: 1
  },
  {
    q: "Una ejecutiva sabe vender y necesita confianza para proponer una ruta nueva. ¿Qué estilo conviene?",
    options: ["Facilitador", "Directivo", "Sancionador", "Control permanente"], correct: 0
  },
  {
    q: "Un territorio tiene potencial de C$90,000 y un factor alcanzable de 0.85. ¿Cuál es la cuota?",
    options: ["C$75,000", "C$76,500", "C$85,000", "C$90,850"], correct: 1
  },
  {
    q: "Un vendedor supera la cuota, pero tiene margen bajo y 22% de mora. ¿Cómo lo evaluarías?",
    options: ["Excelente sin reservas", "Solo importa el volumen", "Resultado alto con calidad comercial deficiente", "Promoción inmediata"], correct: 2
  }
];

const formativeQuestions = {
  cause: {
    question: "Gabriel conoce el producto, sabe vender y cumple sus visitas. Su zona tiene pocos clientes y la misma cuota que una zona con el doble de potencial. ¿Cuál parece ser el problema principal?",
    options: ["Claridad", "Capacidad", "Motivación", "Sistema"], correct: 3,
    hint: "La causa no siempre está dentro del vendedor. Revisá también las condiciones bajo las cuales trabaja.",
    explanation: "Gabriel aparentemente sabe qué hacer y tiene capacidad. Antes de culpar su actitud debemos revisar si territorio, cuota y cartera permiten alcanzar la meta."
  },
  leadership: {
    question: "María acaba de entrar al equipo comercial. Tiene entusiasmo, pero todavía no domina el catálogo ni sabe manejar objeciones. ¿Qué liderazgo usarías principalmente?",
    options: ["Delegador", "Entrenador", "Facilitador", "Dejarla trabajar sola"], correct: 1,
    hint: "Necesita aprender mientras trabaja.",
    explanation: "María tiene disposición, pero aún necesita práctica, demostración y retroalimentación."
  },
  fairness: {
    question: "Dos vendedores reciben una cuota de C$60,000. Uno tiene 70 clientes activos. El otro tiene 24 clientes y grandes distancias. ¿La cuota es necesariamente justa porque ambos deben vender lo mismo?",
    options: ["Sí. Igual cuota significa igualdad", "No. Debemos considerar potencial y carga", "Sí. Cada vendedor debe resolverlo", "Solo importa la experiencia"], correct: 1,
    hint: "Compará las oportunidades reales y el esfuerzo requerido en cada territorio.",
    explanation: "Una cuota igual no siempre es una cuota justa. La dirección comercial debe considerar potencial, cartera y esfuerzo requerido."
  },
  quota: {
    question: "Potencial estimado: C$100,000. Factor alcanzable: 0.85. ¿Cuál sería la cuota?",
    options: ["C$75,000", "C$80,000", "C$85,000", "C$100,000"], correct: 2,
    hint: "Multiplicá el potencial por el factor: C$100,000 por 0.85.",
    explanation: "C$100,000 por 0.85 es C$85,000. La cuota parte del potencial y aplica un factor alcanzable."
  },
  incentive: {
    question: "¿Pagarías exactamente el mismo incentivo si parte de las ventas incluye facturas vencidas?",
    options: ["Sí, porque ya se facturó", "No necesariamente; cobranza y calidad también importan", "Sí, solo importa el volumen", "No pagar ningún incentivo nunca"], correct: 1,
    hint: "Pensá qué conducta comunica el plan cuando premia una venta que todavía no se cobra.",
    explanation: "El plan debe reconocer el resultado comercial sin premiar mora excesiva. Las reglas de pago deben considerar volumen, margen y cobranza."
  },
  evaluation: {
    question: "Un vendedor alcanza 105% de cuota, ofrece descuentos excesivos, tiene alta mora y casi no registra información en CRM. ¿Es automáticamente excelente?",
    options: ["Sí, porque superó la cuota", "No, debemos evaluar calidad y sostenibilidad", "Sí, si vende más que los demás", "Depende solo de su personalidad"], correct: 1,
    hint: "La cuota mide una parte del resultado. Revisá qué ocurre con rentabilidad, efectivo y seguimiento.",
    explanation: "Superar una cuota no garantiza buen desempeño integral. Margen, cobranza, seguimiento y sostenibilidad también importan."
  },
  feedback: {
    question: "¿Cuál retroalimentación está mejor formulada?",
    options: ["Sos irresponsable y no estás comprometido", "Siempre hacés lo mismo", "Planificamos 20 visitas y registraste 12. ¿Qué obstáculo apareció y qué acción acordamos?", "Si seguís así ya veremos"], correct: 2,
    hint: "Buscá la frase que utiliza evidencia, explora la causa y permite acordar una acción.",
    explanation: "La buena retroalimentación utiliza evidencia, explora la causa y termina con una acción verificable."
  },
  gabriel: {
    question: "Gabriel cumple 40%. Conoce el producto, tiene buena valoración, realiza visitas y su territorio tiene bajo potencial. ¿Qué harías primero?",
    options: ["Despedirlo", "Reducirle permanentemente todas las metas", "Revisar territorio, potencial y cuota", "Duplicar su comisión"], correct: 2,
    hint: "Separá lo que controla Gabriel de las condiciones que diseñó la empresa.",
    explanation: "El 40% no demuestra por sí solo falta de esfuerzo. Primero debemos revisar si el territorio y la cuota ofrecen una oportunidad real antes de decidir sobre la persona."
  }
};

const sourceNote = "Fuente académica: Syllabus MAR0411 Sales Management, sesión 8. Los datos del caso son ilustrativos.";

const notes = {
  cover: "Presentar la sesión como una reunión gerencial. La pregunta central será cómo recuperar un equipo comercial que perdió ritmo.",
  plan: "Mostrar la ruta completa antes de comenzar. Explicar que habrá momentos breves de teoría, decisiones grupales, aplicación y cierre. La misma secuencia se utilizará en ambas sesiones de la semana.",
  problem: "Pedir que cada estudiante vote sin explicar. Después escuchar cuatro argumentos breves. No corregir todavía.",
  causes: "Usar ejemplos de los estudiantes. Preguntar qué intervención correspondería a cada causa.",
  motivation: "Solicitar un ejemplo real de cada cuadrante. Recalcar que premiar no resuelve una falta de capacidad.",
  leadership: "Pedir que identifiquen qué estilo usarían con el vendedor del caso y por qué.",
  volcan: "Introducir el caso que se utilizará hasta el taller. Los datos permiten practicar decisiones, no describen una empresa real.",
  ranking: "Preguntar si el 40% de Gabriel demuestra falta de esfuerzo o un territorio inviable.",
  territories: "Relacionar territorio con potencial de compra y carga de trabajo. Evitar dividir solo por fronteras geográficas.",
  quota: "Hacer el cálculo en la pizarra. Pedir a un equipo que proponga otro factor y lo defienda.",
  remuneration: "Explicar que una comisión solo por volumen puede aumentar descuentos, devoluciones o cuentas incobrables.",
  incentive: "Resolver con el grupo. La tabla es editable y todos los montos son ilustrativos.",
  debate: "Dividir el aula en cuatro grupos. Cada grupo defiende un criterio. Luego deben negociar un modelo combinado.",
  evaluation: "Mostrar que la evaluación necesita pesos conocidos y evidencias. Preguntar qué indicador falta para su empresa.",
  feedback: "Practicar el guion con tono respetuoso. El estudiante debe diferenciar el hecho de una etiqueta personal.",
  recovery: "Usar esta secuencia para conectar liderazgo, capacitación y evaluación.",
  lab: "Formar tríos. Cada ronda dura seis minutos: cuatro de conversación y dos de retroalimentación.",
  rubric: "Leer los criterios antes de iniciar. Evaluar evidencia observable y registrar una frase breve por criterio.",
  closing: "Cerrar con respuestas breves. Recoger la evidencia del laboratorio y anunciar la conexión con cuentas clave de la sesión 9."
};

const freshState = () => ({
  version: APP_VERSION, current: 0,
  preIndex: 0, preAnswers: [], preComplete: false, preScore: 0,
  postIndex: 0, postAnswers: [], postComplete: false, postScore: 0,
  formative: {},
  debateTimer: { remaining: 60, running: false, endsAt: 0 },
  labTimer: { remaining: 360, running: false, endsAt: 0 },
  debateReflected: false
});

function loadState(){
  try{
    const raw=localStorage.getItem("sales-s8-live-deck");
    if(!raw)return freshState();
    const parsed=JSON.parse(raw);
    return parsed.version===APP_VERSION?{...freshState(),...parsed}:freshState();
  }catch{return freshState();}
}
function saveState(){try{localStorage.setItem("sales-s8-live-deck",JSON.stringify(state));}catch{}}
let state=loadState();
let timerInterval=null;

const slideEl=document.getElementById("slide");
const prevButton=document.getElementById("prevButton");
const nextButton=document.getElementById("nextButton");
const topicsPanel=document.getElementById("topicsPanel");
const scrim=document.getElementById("scrim");

function shell(content,theme="light",extra=""){
  return `<section class="slide ${theme} ${extra}"><div class="slide-inner">${content}</div></section>`;
}
function title(kicker,title,lead=""){
  return `<div><span class="eyebrow">${kicker}</span><h2>${title}</h2>${lead?`<p class="lead">${lead}</p>`:""}</div>`;
}

const slides=[
  {id:"cover",section:"Inicio",title:"Portada",notes:notes.cover,render:renderCover},
  {id:"class-plan",section:"Inicio",title:"Plan de la clase de hoy",notes:notes.plan,render:renderClassPlan},
  {id:"pretest",section:"Diagnóstico",title:"Diagnóstico inicial",notes:"Leer cada situación sin corregir. El objetivo es guardar el criterio inicial del grupo.",render:()=>renderTest("pre")},
  {id:"pre-result",section:"Diagnóstico",title:"Resultado inicial",notes:"No revelar las respuestas correctas. Guardar el resultado para compararlo al final.",render:renderPreResult},
  {id:"problem",section:"Problema gerencial",title:"El equipo no alcanza la meta",notes:notes.problem,render:renderProblem},
  {id:"causes",section:"Problema gerencial",title:"Cuatro causas",notes:notes.causes,render:renderCauses},
  {id:"examples",section:"Problema gerencial",title:"Ejemplos nicaragüenses",notes:notes.causes,render:renderExamples},
  {id:"q-cause",section:"Problema gerencial",title:"Control de comprensión",notes:"Permitir que el grupo argumente antes de comprobar. Si falla, leer la pista y dar un segundo intento.",question:"cause",render:()=>renderFormative("cause","Control de comprensión 1")},
  {id:"motivation",section:"Motivación y liderazgo",title:"Diagnóstico de motivación",notes:notes.motivation,render:renderMotivation},
  {id:"leadership",section:"Motivación y liderazgo",title:"Liderazgo según la situación",notes:notes.leadership,render:renderLeadership},
  {id:"q-leadership",section:"Motivación y liderazgo",title:"Control de comprensión",notes:"Preguntar por qué el entusiasmo no sustituye el dominio de la tarea.",question:"leadership",render:()=>renderFormative("leadership","Control de comprensión 2")},
  {id:"volcan",section:"Distribuidora Volcán",title:"Caso transversal",notes:notes.volcan,render:renderVolcan},
  {id:"ranking",section:"Distribuidora Volcán",title:"Cumplimiento por vendedor",notes:notes.ranking,render:renderRanking},
  {id:"territories",section:"Distribuidora Volcán",title:"Territorios",notes:notes.territories,render:renderTerritories},
  {id:"q-fairness",section:"Distribuidora Volcán",title:"Control de comprensión",notes:"Escuchar una defensa de la igualdad y otra de la equidad territorial antes de comprobar.",question:"fairness",render:()=>renderFormative("fairness","Control de comprensión 3")},
  {id:"quota",section:"Cuotas",title:"Cuota basada en potencial",notes:notes.quota,render:renderQuota},
  {id:"q-quota",section:"Cuotas",title:"Mini cálculo",notes:"Hacer la operación en voz alta después de que el grupo elija.",question:"quota",render:()=>renderFormative("quota","Mini cálculo interactivo")},
  {id:"remuneration",section:"Remuneración",title:"Remuneración que orienta conductas",notes:notes.remuneration,render:renderRemuneration},
  {id:"incentive",section:"Remuneración",title:"Cálculo del incentivo",notes:notes.incentive,question:"incentive",render:renderIncentive},
  {id:"debate",section:"¿Qué premiamos?",title:"Debate gerencial",notes:notes.debate,render:renderDebate},
  {id:"reflection",section:"¿Qué premiamos?",title:"Reflexión",notes:notes.debate,render:renderReflection},
  {id:"evaluation",section:"Evaluación",title:"No evalués solo ventas",notes:notes.evaluation,render:renderEvaluation},
  {id:"score-reading",section:"Evaluación",title:"¿Qué nos dice el 89.9?",notes:notes.evaluation,render:renderScoreReading},
  {id:"q-evaluation",section:"Evaluación",title:"Control de comprensión",notes:"Pedir que identifiquen qué riesgos comerciales oculta una cuota alta.",question:"evaluation",render:()=>renderFormative("evaluation","Control de comprensión 4")},
  {id:"feedback",section:"Retroalimentación",title:"Conversación de desempeño",notes:notes.feedback,render:renderFeedback},
  {id:"q-feedback",section:"Retroalimentación",title:"Control de comprensión",notes:"Comparar las etiquetas personales con la evidencia observable.",question:"feedback",render:()=>renderFormative("feedback","Control de comprensión 5")},
  {id:"recovery",section:"Recuperación",title:"Plan de 30 días",notes:notes.recovery,render:renderRecovery},
  {id:"q-gabriel",section:"Recuperación",title:"Caso final: Gabriel",notes:"Usar el caso para integrar diagnóstico, territorio, cuota y decisión gerencial.",question:"gabriel",render:()=>renderFormative("gabriel","Integración del caso")},
  {id:"lab",section:"Laboratorio",title:"Laboratorio comercial",notes:notes.lab,render:renderLab},
  {id:"rubric",section:"Laboratorio",title:"Rúbrica del laboratorio",notes:notes.rubric,render:renderRubric},
  {id:"posttest",section:"Evaluación final",title:"Evaluación final",notes:"Responder como grupo. Las situaciones miden las mismas competencias del diagnóstico con casos diferentes.",render:()=>renderTest("post")},
  {id:"comparison",section:"Evaluación final",title:"Comparación de aprendizaje",notes:"Comparar decisiones, no personas. Preguntar qué criterio cambió durante la sesión.",render:renderComparison},
  {id:"summary",section:"Evaluación final",title:"Lo que ahora puede hacer el grupo",notes:"Leer el resumen como capacidades desarrolladas durante la sesión.",render:renderSummary},
  {id:"sources",section:"Fuentes",title:"Fuentes y fundamento",notes:"Esta pantalla documenta la base académica disponible sin interrumpir la explicación principal.",render:renderSources},
  {id:"closing",section:"Cierre",title:"Antes de salir",notes:notes.closing,render:renderClosing}
];

function renderCover(){
  return `<section class="slide cover"><div class="slide-inner"><div class="cover-copy"><span class="eyebrow">Sales Management · Sesión 8</span><h1>DIRECCIÓN DE LA FUERZA DE VENTAS</h1><p>Motivación · Liderazgo · Organización · Remuneración · Evaluación</p><div><button class="primary-action" data-go-next>VER PLAN DE CLASE →</button></div></div><div class="cover-photo" role="img" aria-label="Equipo comercial en Nicaragua"></div></div></section>`;
}

function renderClassPlan(){
  const plan=[
    ["01","ACTIVAMOS","Diagnóstico grupal y lectura del reto comercial","10 min"],
    ["02","COMPRENDEMOS","Motivación, liderazgo, territorios y cuotas","35 min"],
    ["03","DECIDIMOS","Caso Distribuidora Volcán y controles participativos","30 min"],
    ["04","PRACTICAMOS","Debate, retroalimentación y laboratorio comercial","35 min"],
    ["05","COMPROBAMOS","Evaluación final, comparación y cierre","10 min"]
  ];
  return shell(`${title("Nuestra ruta de aprendizaje","Plan de la clase de hoy","Cada concepto se conecta con una decisión práctica que resolveremos entre todos.")}<div class="class-plan">${plan.map(([n,a,b,t])=>`<article><span class="plan-number">${n}</span><div><strong>${a}</strong><p>${b}</p></div><small>${t}</small></article>`).join("")}</div><div class="plan-close"><span>EXPLICAMOS</span><b>→</b><span>DECIDIMOS</span><b>→</b><span>PRACTICAMOS</span><b>→</b><span>COMPROBAMOS</span></div>`,"soft","class-plan-slide");
}

function renderTest(type){
  const isPre=type==="pre";
  const questions=isPre?preQuestions:postQuestions;
  const indexKey=isPre?"preIndex":"postIndex";
  const answersKey=isPre?"preAnswers":"postAnswers";
  const completeKey=isPre?"preComplete":"postComplete";
  const scoreKey=isPre?"preScore":"postScore";
  if(state[completeKey]){
    const label=isPre?"Diagnóstico inicial guardado":"Evaluación final terminada";
    const message=isPre?"Al final veremos si cambiaron nuestras decisiones.":"La siguiente pantalla compara el criterio inicial con el criterio final.";
    return shell(`<div class="diagnostic-result"><span class="eyebrow">${isPre?"Antes de estudiar el tema":"Después de la clase"}</span><h2>${label}</h2><div class="diagnostic-score">${state[scoreKey]}<small> / 5</small></div><p class="lead" style="margin:28px auto">${message}</p><button class="primary-action" data-go-next>${isPre?"COMENZAR CLASE":"VER COMPARACIÓN"} →</button></div>`,isPre?"light":"dark");
  }
  const i=state[indexKey]; const q=questions[i]; const selected=state[answersKey][i];
  const intro=isPre?"Veamos cómo tomaría decisiones este grupo antes de estudiar el tema.":"Las situaciones cambiaron. Apliquemos el criterio desarrollado durante la sesión.";
  return shell(`<div class="diagnostic-head"><div><span class="eyebrow">${isPre?"Diagnóstico inicial · no cuenta para nota":"Evaluación final de aprendizaje"}</span><h3>${intro}</h3></div><span class="question-progress">${i+1} / ${questions.length}</span></div><div class="question-layout"><div class="question-copy"><h2>${q.q}</h2><p class="muted">Elegí una respuesta. ${isPre?"Todavía no mostraremos cuál es correcta.":"La comparación aparece al terminar."}</p></div><div><div class="options">${q.options.map((o,j)=>optionButton(o,j,selected)).join("")}</div><div class="question-actions"><button class="secondary-action" id="testBack" ${i===0?"disabled":""}>← Pregunta anterior</button><button class="check-button" id="saveTestAnswer" ${selected===undefined?"disabled":""}>${i===questions.length-1?"TERMINAR":"GUARDAR Y SIGUIENTE"}</button></div></div></div>`,"light");
}

function renderPreResult(){
  return shell(`<div class="diagnostic-result"><span class="eyebrow">Punto de partida</span><h2>Diagnóstico inicial</h2><div class="diagnostic-score">${state.preScore}<small> / 5</small></div><p class="big-quote" style="margin:36px auto 0">Guardemos este resultado. Al final veremos si cambiaron nuestras decisiones.</p></div>`,"dark");
}

function renderProblem(){
  return shell(`${title("Bloque 1 · El problema gerencial","El equipo vende, pero no alcanza la meta")}<div class="metric-row"><div class="metric"><small>Meta mensual</small><strong>C$180,000</strong></div><div class="metric"><small>Venta lograda</small><strong>C$121,000</strong></div><div class="metric"><small>Cumplimiento</small><strong>67%</strong></div></div><p class="big-quote" style="margin-top:42px">¿Qué cambiarías primero? <span class="accent-text">Cuota, liderazgo, comisión o estructura</span></p><p class="muted">Escuchemos cuatro respuestas. Todavía no vamos a corregirlas.</p>`,"light");
}
function renderCauses(){
  const data=[["CLARIDAD","No sabe qué vender, a quién o qué priorizar"],["CAPACIDAD","No domina todavía conocimientos o habilidades"],["MOTIVACIÓN","Puede hacerlo, pero no encuentra una razón suficiente"],["SISTEMA","El territorio, la cuota o el proceso dificultan el resultado"]];
  return shell(`${title("Las cuatro causas","El resultado no explica por sí solo el problema")}<div class="idea-grid">${data.map(([a,b])=>`<article class="idea"><strong>${a}</strong><p>${b}</p></article>`).join("")}</div>`,"accent");
}
function renderExamples(){
  const data=[["CLARIDAD","Un vendedor en Managua visita negocios sin saber qué línea debe impulsar."],["CAPACIDAD","Tiene cartera, pero no sabe manejar objeciones."],["MOTIVACIÓN","Puede vender, pero siente que la comisión no reconoce su esfuerzo."],["SISTEMA","Tiene la misma cuota que otra zona con mucho más potencial."]];
  return shell(`${title("Ejemplos nicaragüenses","Una misma cifra puede esconder causas distintas")}<div class="example-list">${data.map(([a,b])=>`<div class="example-item"><strong>${a}</strong><span>${b}</span></div>`).join("")}</div>`,"light");
}
function renderMotivation(){
  return shell(`${title("Bloque 2 · Motivación","Capacidad y disposición cambian la respuesta gerencial","Premiar más no resuelve una falta de capacidad.")}<div class="matrix"><div></div><div class="matrix-head">QUIERE</div><div class="matrix-head">NO QUIERE</div><div class="matrix-side">PUEDE</div><div class="matrix-cell"><strong>Autonomía</strong><span>Meta retadora y seguimiento acordado</span></div><div class="matrix-cell"><strong>Conversación</strong><span>Consecuencia y ajuste</span></div><div class="matrix-side">NO PUEDE</div><div class="matrix-cell"><strong>Capacitación</strong><span>Práctica y acompañamiento</span></div><div class="matrix-cell"><strong>Rediseño</strong><span>Puesto o decisión responsable</span></div></div>`,"soft");
}
function renderLeadership(){
  const data=[["DIRECTIVO","Indica qué hacer y controla de cerca","Persona nueva o tarea crítica"],["ENTRENADOR","Explica, demuestra y corrige","Hay disposición, pero todavía falla"],["FACILITADOR","Pregunta, escucha y comparte decisiones","Sabe hacerlo y necesita confianza"],["DELEGADOR","Define resultados y da autonomía","Desempeño alto y consistente"]];
  return shell(`${title("Liderazgo según la situación","No dirigís igual a todas las personas")}<div class="leadership-line">${data.map(([a,b,c])=>`<article><strong>${a}</strong><p>${b}</p><small>${c}</small></article>`).join("")}</div>`,"light");
}
function renderVolcan(){
  return shell(`${title("Bloque 3 · Caso transversal","Distribuidora Volcán","Empresa ficticia de consumo masivo con cobertura en Managua, León y Masaya.")}<div class="case-banner"><p>El caso evolucionará durante la sesión. Cada nuevo concepto permitirá tomar una mejor decisión.</p><div class="case-stats"><div><strong>6</strong><small>VENDEDORES</small></div><div><strong>3</strong><small>TERRITORIOS</small></div><div><strong>67%</strong><small>CUMPLIMIENTO</small></div><div><strong>18%</strong><small>MORA</small></div></div></div><div class="problem-list"><span>Misma lógica de cuota</span><span>Comisión centrada en volumen</span><span>Seguimiento demasiado tarde</span></div><p class="big-quote" style="margin-top:32px">¿Sancionamos primero o investigamos primero?</p>`,"soft");
}
function renderRanking(){
  const data=[["Ana",92],["Carlos",78],["Diana",64],["Ernesto",57],["Fabiola",71],["Gabriel",40]];
  return shell(`${title("Cumplimiento por vendedor","Un porcentaje bajo indica dónde mirar, pero no explica la causa")}<div class="split"><div class="bar-chart">${data.map(([n,v])=>`<div class="bar-item ${v<50?'low':''}"><span class="bar-value">${v}%</span><div class="bar" style="--value:${v}%"></div><span class="bar-label">${n}</span></div>`).join("")}</div><div><div class="idea"><strong>ANA</strong><p>Necesita una meta retadora.</p></div><div class="idea" style="margin-top:18px"><strong>GABRIEL</strong><p>Necesita diagnóstico antes de una sanción.</p></div><p class="big-quote" style="margin-top:28px">Resultado no significa causa.</p></div></div>`,"light");
}
function renderTerritories(){
  const before=[["Managua","70 clientes · C$90 mil"],["León","38 clientes · C$45 mil"],["Masaya","24 clientes · C$45 mil"]];
  const after=[["Territorio A","Alto potencial · C$70 mil"],["Territorio B","Potencial medio · C$60 mil"],["Territorio C","Desarrollo · C$50 mil"]];
  return shell(`${title("Organización de territorios","Cada vendedor necesita una cartera posible y una carga comparable")}<div class="territory-compare"><div class="territory-column"><h3>ANTES</h3>${before.map(([a,b])=>`<div class="territory-row"><strong>${a}</strong><span>${b}</span></div>`).join("")}</div><div class="change-arrow">→</div><div class="territory-column"><h3>PROPUESTA</h3>${after.map(([a,b])=>`<div class="territory-row"><strong>${a}</strong><span>${b}</span></div>`).join("")}</div></div><div class="criteria"><span>Potencial</span><span>Distancia</span><span>Cartera</span><span>Frecuencia de visita</span></div>`,"soft");
}
function renderQuota(){
  return shell(`${title("Bloque 4 · Cuotas","Cuota basada en potencial","La cuota debe exigir esfuerzo sin depender de un territorio imposible.")}<div class="formula"><span>CUOTA</span><span>=</span><span>POTENCIAL</span><span>× FACTOR</span></div><div class="formula-detail"><div><small>Potencial estimado</small><strong>C$75,000</strong></div><div><small>Factor alcanzable</small><strong>0.80</strong></div><div><small>Cuota mensual</small><strong>C$60,000</strong></div></div>`,"accent");
}
function renderRemuneration(){
  return shell(`${title("Bloque 5 · Remuneración","El plan de pago comunica qué comportamientos importan")}<div class="pay-split"><div><strong>55%</strong><span>FIJO<br>Estabilidad y cumplimiento básico</span></div><div><strong>35%</strong><span>VARIABLE<br>Resultado comercial</span></div><div><strong>10%</strong><span>EQUIPO<br>Cartera sana</span></div></div><p class="lead">Una comisión solo por volumen puede provocar:</p><div class="risk-line"><span>Descuentos excesivos</span><span>Devoluciones</span><span>Mala cartera</span><span>Ventas poco rentables</span></div>`,"soft");
}
function renderIncentive(){
  const rows=[["Venta","94% de cuota","C$56,400","C$3,384"],["Margen","26%","Meta cumplida","C$1,200"],["Cobranza","6% de mora","Cumple","C$800"],["Equipo","Meta regional","Sí","C$600"],["TOTAL VARIABLE","","","C$5,984"]];
  return renderFormative("incentive","Cálculo del incentivo",`<div class="table-wrap" style="margin-bottom:22px"><table class="data-table"><thead><tr><th>Componente</th><th>Regla</th><th>Resultado</th><th>Pago</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
}
function renderDebate(){
  const data=[["VOLUMEN","Crece rápido","Riesgo: destruir margen"],["MARGEN","Protege rentabilidad","Riesgo: limitar penetración"],["COBRANZA","Cuida efectivo","Riesgo: excesivo conservadurismo"],["FIDELIZACIÓN","Sostiene relaciones","Riesgo: tarda más en medirse"]];
  return shell(`${title("Bloque 6 · Dinámica grupal","Escojan dos criterios y definan cuál pesa más","Tienen 60 segundos para negociar una respuesta.")}<div class="debate-grid">${data.map(([a,b,c])=>`<article class="debate-card"><strong>${a}</strong><p>${b}</p><p><b>${c}</b></p></article>`).join("")}</div>${timerMarkup("debate")}`,"soft");
}
function renderReflection(){
  return shell(`<div style="max-width:1250px"><span class="eyebrow">Reflexión del debate</span><h2>No existe un indicador perfecto aislado</h2><p class="big-quote">Un buen sistema combina resultados comerciales con <span class="cyan-text">calidad del resultado</span>.</p><p class="lead">Volumen sin margen puede destruir rentabilidad. Venta sin cobranza puede deteriorar el efectivo. Fidelización sin crecimiento puede limitar el negocio.</p></div>`,"dark");
}
function renderEvaluation(){
  const rows=[["Cumplimiento de cuota","35%"],["Margen bruto","20%"],["Cobranza","15%"],["Conversión","15%"],["Seguimiento CRM","10%"],["Trabajo en equipo","5%"]];
  return shell(`${title("Bloque 7 · Evaluación","No evalués solo ventas","Evaluar ventas significa combinar resultados con comportamiento observable.")}<div class="split"><div class="table-wrap"><table class="data-table" style="min-width:520px"><thead><tr><th>Indicador</th><th>Peso</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</tbody></table></div><div><span class="eyebrow">Resultado del ejemplo</span><div class="visual-number">89.9</div><p class="lead">Buen desempeño general. La conversión todavía puede mejorar.</p></div></div>`,"light");
}
function renderScoreReading(){
  return shell(`<div class="split"><div><span class="eyebrow">Lectura del resultado</span><div class="visual-number">89.9</div></div><div><h2>La nota global no debe esconder el indicador que necesita intervención</h2><p class="lead">El resultado general es satisfactorio. La decisión adecuada reconoce lo que funciona y convierte la brecha de conversión en una meta de desarrollo.</p></div></div>`,"accent");
}
function renderFeedback(){
  const data=[["HECHO","En tres semanas registraste 12 visitas de 20 planificadas."],["IMPACTO","La cartera perdió oportunidades de seguimiento."],["PREGUNTA","¿Qué obstáculo explica la diferencia?"],["ACUERDO","Cinco visitas antes del viernes y revisión el lunes."]];
  return shell(`${title("Bloque 8 · Retroalimentación","Conversación de desempeño","Hablamos de hechos y conductas. No etiquetamos a la persona.")}<div class="feedback-steps">${data.map(([a,b],i)=>`<article class="feedback-step"><span>${i+1}</span><strong>${a}</strong><p>${b}</p></article>`).join("")}</div>`,"soft");
}
function renderRecovery(){
  const data=[["SEMANA 1","DIAGNÓSTICO","Territorio, cartera y habilidad"],["SEMANA 2","PRÁCTICA ACOMPAÑADA","Visitas y manejo de objeciones"],["SEMANA 3","AJUSTE","Cuota, potencial y prioridades"],["SEMANA 4","EVALUACIÓN","Resultado, aprendizaje y decisión"]];
  return shell(`${title("Bloque 9 · Recuperación","Plan de recuperación en 30 días","La decisión final necesita evidencia acumulada, no una impresión aislada.")}<div class="timeline">${data.map(([a,b,c])=>`<article><small>${a}</small><strong>${b}</strong><p>${c}</p></article>`).join("")}</div><div class="criteria" style="margin-top:28px"><span>Mantener</span><span>Desarrollar</span><span>Mover</span><span>Cerrar relación laboral con evidencia</span></div>`,"light");
}
function renderLab(){
  return `<section class="slide lab-slide"><div class="slide-inner"><div class="lab-overlay"><span class="eyebrow">Trabajo práctico</span><h2>Laboratorio comercial</h2><p class="lead">Prospección, negociación y cierre.</p><div class="role-row"><span>VENDEDOR</span><span>CLIENTE</span><span>OBSERVADOR</span></div><p style="margin-top:24px">Cada ronda: 4 minutos de conversación y 2 minutos de retroalimentación.</p>${timerMarkup("lab")}</div></div></section>`;
}
function renderRubric(){
  const rows=[["Preparación","Objetivo y apertura profesional",6],["Diagnóstico","Preguntas, escucha y necesidad",6],["Argumentación","Propuesta vinculada con valor",6],["Objeción y negociación","Comprende, responde y acuerda",6],["Cierre y conducta","Compromiso claro y actuación ética",6]];
  return shell(`${title("Trabajo práctico real","Rúbrica del laboratorio · 30 puntos","La calificación se basa en la conversación observada, no en memorizar un guion.")}<div class="rubric-list">${rows.map(r=>`<div class="rubric-row"><strong>${r[0]}</strong><span>${r[1]}</span><b>${r[2]}</b></div>`).join("")}<div class="rubric-row" style="background:var(--navy);color:#fff"><strong style="color:#fff">TOTAL</strong><span></span><b style="color:#fff">30</b></div></div>`,"soft");
}
function renderComparison(){
  const prePct=state.preScore*20,postPct=state.postScore*20,diff=postPct-prePct;
  const label=postPct>=90?"EXPERTO EN DIRECCIÓN COMERCIAL":postPct>=80?"GERENTE ESTRATÉGICO":postPct>=70?"GERENTE EN DESARROLLO":postPct>=60?"BUENA BASE, PERO HAY DECISIONES POR REFORZAR":"VOLVAMOS A LOS CONCEPTOS CLAVE";
  return shell(`<div class="diagnostic-result"><span class="eyebrow">Comparación de aprendizaje</span><h2>${label}</h2><div class="compare-scores"><div class="score-box"><span>ANTES</span><strong>${prePct}%</strong><small>${state.preScore} de 5</small></div><div class="score-arrow">→</div><div class="score-box"><span>AHORA</span><strong>${postPct}%</strong><small>${state.postScore} de 5</small></div></div><p class="big-quote" style="margin:25px auto">Mejora: ${diff>=0?"+":""}${diff} puntos porcentuales</p><p class="lead" style="margin:0 auto">Pasaron de mirar solamente el resultado a diagnosticar las causas antes de decidir.</p></div>`,"dark");
}
function renderSummary(){
  const items=["Diagnóstico","Motivación","Liderazgo","Territorios","Cuotas","Incentivos","Evaluación","Retroalimentación"];
  return shell(`${title("Resultado de la sesión","El grupo ahora puede dirigir con más criterio","Cada concepto aporta una parte de la decisión comercial.")}<div class="checklist">${items.map(x=>`<div class="check-item">${x}</div>`).join("")}</div>`,"accent");
}
function renderSources(){
  return shell(`${title("Fuentes y fundamento","Base académica de la sesión")}<div class="sources"><div class="source"><strong>Syllabus MAR0411 Sales Management</strong><span>Sesión 8, Dirección de la fuerza de ventas.</span></div><div class="source"><strong>Johnston, Marshall y Ogilvie</strong><span>Sales Force Management: Leadership, Innovation, Technology.</span></div><div class="source"><strong>Jobber, Lancaster y Le Meunier-FitzHugh</strong><span>Selling and Sales Management.</span></div><div class="source"><strong>Nota sobre el caso</strong><span>Distribuidora Volcán y sus cifras son ilustrativas para practicar decisiones.</span></div></div>`,"light");
}
function renderClosing(){
  return shell(`<div><span class="eyebrow">Antes de salir</span><h2>Tres respuestas breves</h2><div class="closing-questions"><p>Una decisión que cambiarías en Distribuidora Volcán.</p><p>Un indicador que usarías para evaluar vendedores.</p><p>Una conducta que practicarás en tu próxima conversación comercial.</p></div><p class="big-quote" style="margin-top:38px">Dirigir ventas significa crear las condiciones para producir mejores resultados de manera sostenible.</p><button class="primary-action" id="finishSession">FINALIZAR SESIÓN</button></div>`,"dark");
}

function renderFormative(id,kicker,prefix=""){
  const q=formativeQuestions[id];
  const fs=state.formative[id]||{selected:null,attempts:0,resolved:false,correct:false,lastWrong:false};
  const feedback=fs.resolved
    ? `<div class="feedback ${fs.correct?"":"wrong"}"><strong>${fs.correct?"✓ CORRECTO":"✕ RESPUESTA REVELADA"}</strong>${q.explanation}${!fs.correct?`<br><b>Respuesta de referencia:</b> ${q.options[q.correct]}.`:""}</div><div class="question-actions"><button class="continue-button" data-go-next>CONTINUAR CLASE →</button></div>`
    : fs.lastWrong?`<div class="feedback wrong"><strong>✕ TODAVÍA NO</strong>La primera decisión no explica suficientemente el caso.</div><div class="hint"><b>PISTA</b><br>${q.hint}</div>`:"";
  return shell(`${prefix}<div class="question-layout"><div class="question-copy"><span class="eyebrow">${kicker}</span><h2>${q.question}</h2><p class="muted">Seleccioná una opción y después pulsá Comprobar respuesta.</p></div><div><div class="options">${q.options.map((o,j)=>optionButton(o,j,fs.selected)).join("")}</div>${!fs.resolved?`<div class="question-actions"><button class="check-button" id="checkFormative" data-question="${id}" ${fs.selected===null?"disabled":""}>COMPROBAR RESPUESTA</button><span class="muted">Intento ${Math.min(fs.attempts+1,2)} de 2</span></div>`:""}${feedback}</div></div>`,"light");
}

function optionButton(text,index,selected){
  return `<button class="option ${selected===index?"selected":""}" data-option="${index}"><span class="option-letter">${String.fromCharCode(65+index)}</span><span>${text}</span></button>`;
}

function timerMarkup(kind){
  const timer=state[kind+"Timer"]; const phase=kind==="lab"?(timer.remaining>120?"CONVERSACIÓN":"RETROALIMENTACIÓN"):"DEBATE";
  return `<div class="timer-panel"><div><div class="timer" id="timerDisplay">${formatTime(timer.remaining)}</div><strong id="timerPhase">${phase}</strong></div><div class="timer-controls"><button id="timerStart" data-timer="${kind}">${timer.running?"PAUSAR":"INICIAR"}</button><button id="timerReset" data-timer-reset="${kind}">REINICIAR</button></div></div>`;
}

function scoreQuestions(questions,answers){return questions.reduce((sum,q,i)=>sum+(answers[i]===q.correct?1:0),0);}

function bindSlide(){
  slideEl.querySelectorAll("[data-go-next]").forEach(b=>b.onclick=goNext);
  slideEl.querySelectorAll(".option").forEach(btn=>btn.onclick=()=>{
    const slide=slides[state.current];
    if(slide.id==="pretest"&&!state.preComplete){state.preAnswers[state.preIndex]=Number(btn.dataset.option);saveState();render();return;}
    if(slide.id==="posttest"&&!state.postComplete){state.postAnswers[state.postIndex]=Number(btn.dataset.option);saveState();render();return;}
    if(slide.question){const fs=getFormative(slide.question);if(!fs.resolved){fs.selected=Number(btn.dataset.option);fs.lastWrong=false;state.formative[slide.question]=fs;saveState();render();}}
  });
  const saveTest=document.getElementById("saveTestAnswer");
  if(saveTest)saveTest.onclick=()=>{
    const isPre=slides[state.current].id==="pretest"; const idxKey=isPre?"preIndex":"postIndex"; const answersKey=isPre?"preAnswers":"postAnswers"; const completeKey=isPre?"preComplete":"postComplete"; const scoreKey=isPre?"preScore":"postScore"; const qs=isPre?preQuestions:postQuestions;
    if(state[answersKey][state[idxKey]]===undefined)return;
    if(state[idxKey]<qs.length-1)state[idxKey]++;else{state[completeKey]=true;state[scoreKey]=scoreQuestions(qs,state[answersKey]);}
    saveState();render();
  };
  const testBack=document.getElementById("testBack"); if(testBack)testBack.onclick=()=>{const key=slides[state.current].id==="pretest"?"preIndex":"postIndex";state[key]=Math.max(0,state[key]-1);saveState();render();};
  const check=document.getElementById("checkFormative"); if(check)check.onclick=()=>checkFormative(check.dataset.question);
  const start=document.getElementById("timerStart"); if(start)start.onclick=()=>toggleTimer(start.dataset.timer);
  const reset=document.getElementById("timerReset"); if(reset)reset.onclick=()=>resetTimer(reset.dataset.timerReset);
  const finish=document.getElementById("finishSession"); if(finish)finish.onclick=()=>showToast("Sesión finalizada. El progreso quedó guardado.");
}

function getFormative(id){return state.formative[id]||{selected:null,attempts:0,resolved:false,correct:false,lastWrong:false};}
function checkFormative(id){
  const q=formativeQuestions[id],fs=getFormative(id); if(fs.selected===null||fs.resolved)return;
  if(fs.selected===q.correct){fs.resolved=true;fs.correct=true;fs.lastWrong=false;}
  else{fs.attempts++;if(fs.attempts>=2){fs.resolved=true;fs.correct=false;}else{fs.selected=null;fs.lastWrong=true;}}
  state.formative[id]=fs;saveState();render();
}

function canAdvance(){
  const s=slides[state.current];
  if(s.id==="pretest")return state.preComplete;
  if(s.id==="posttest")return state.postComplete;
  if(s.question)return getFormative(s.question).resolved;
  return true;
}
function goNext(){if(!canAdvance()){showToast("Completá la interacción antes de continuar.");return;}if(state.current<slides.length-1){state.current++;saveState();render();}}
function goPrev(){if(state.current>0){state.current--;saveState();render();}}
function goTo(index){state.current=Math.max(0,Math.min(index,slides.length-1));saveState();closeTopics();render();}

function render(){
  stopLocalTimer();
  const slide=slides[state.current]||slides[0];
  slideEl.innerHTML=slide.render();
  bindSlide();
  updateChrome();
  slideEl.scrollTop=0;
  setTimeout(()=>slideEl.focus(),30);
  if((slide.id==="debate"&&state.debateTimer.running)||(slide.id==="lab"&&state.labTimer.running))startLocalTimer(slide.id==="debate"?"debate":"lab");
}

function updateChrome(){
  const pct=Math.round((state.current/(slides.length-1))*100);
  document.getElementById("progressBar").style.width=pct+"%";
  document.getElementById("progressText").textContent=pct+"%";
  document.getElementById("slideCount").textContent=`${state.current+1} / ${slides.length}`;
  prevButton.disabled=state.current===0;
  nextButton.disabled=state.current===slides.length-1||!canAdvance();
  const id=slides[state.current].id;
  nextButton.textContent=slides[state.current].question&&canAdvance()?"CONTINUAR CLASE →":id==="class-plan"?"INICIAR DIAGNÓSTICO →":id==="problem"?"VER EL PROBLEMA →":id==="debate"?"VER REFLEXIÓN →":id==="pretest"&&state.preComplete?"COMENZAR CLASE →":id==="posttest"&&state.postComplete?"VER COMPARACIÓN →":state.current===0?"VER PLAN DE CLASE →":"SIGUIENTE →";
  renderTopics();
}

function renderTopics(){
  const seen=new Set(); const items=[];
  slides.forEach((s,i)=>{if(!seen.has(s.section)){seen.add(s.section);items.push([s.section,i]);}});
  document.getElementById("topicsNav").innerHTML=items.map(([name,i],n)=>`<button class="topic-link ${slides[state.current].section===name?"active":""}" data-topic="${i}"><span>${String(n+1).padStart(2,"0")}</span><span>${name}</span></button>`).join("");
  document.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>goTo(Number(b.dataset.topic)));
}

function openTopics(){topicsPanel.classList.add("open");topicsPanel.setAttribute("aria-hidden","false");scrim.hidden=false;}
function closeTopics(){topicsPanel.classList.remove("open");topicsPanel.setAttribute("aria-hidden","true");scrim.hidden=true;}
function openNotes(){document.getElementById("notesContent").innerHTML=`<p>${slides[state.current].notes||"Sin notas adicionales para esta pantalla."}</p><p class="note-source">${sourceNote}</p>`;document.getElementById("notesModal").showModal();}
function openAcademic(){document.getElementById("academicModal").showModal();}

function toggleTimer(kind){
  const key=kind+"Timer",timer=state[key];
  if(timer.running){timer.remaining=Math.max(0,Math.ceil((timer.endsAt-Date.now())/1000));timer.running=false;timer.endsAt=0;stopLocalTimer();}
  else{if(timer.remaining<=0)timer.remaining=kind==="debate"?60:360;timer.running=true;timer.endsAt=Date.now()+timer.remaining*1000;}
  saveState();render();
}
function resetTimer(kind){const key=kind+"Timer";state[key]={remaining:kind==="debate"?60:360,running:false,endsAt:0};saveState();render();}
function startLocalTimer(kind){
  stopLocalTimer();
  timerInterval=setInterval(()=>{
    const timer=state[kind+"Timer"];const before=timer.remaining;timer.remaining=Math.max(0,Math.ceil((timer.endsAt-Date.now())/1000));
    if(kind==="lab"&&before>120&&timer.remaining<=120)showToast("Comienza la retroalimentación de 2 minutos.");
    if(timer.remaining<=0){timer.running=false;timer.endsAt=0;stopLocalTimer();showToast("Tiempo finalizado.");}
    saveState();const d=document.getElementById("timerDisplay");if(d)d.textContent=formatTime(timer.remaining);const p=document.getElementById("timerPhase");if(p)p.textContent=kind==="lab"?(timer.remaining>120?"CONVERSACIÓN":"RETROALIMENTACIÓN"):"DEBATE";const b=document.getElementById("timerStart");if(b)b.textContent=timer.running?"PAUSAR":"INICIAR";
  },1000);
}
function stopLocalTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function formatTime(seconds){const s=Math.max(0,seconds),m=Math.floor(s/60),r=s%60;return `${String(m).padStart(2,"0")}:${String(r).padStart(2,"0")}`;}
function showToast(text){const t=document.getElementById("toast");t.textContent=text;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300);}
function resetSession(){if(!confirm("¿Reiniciar toda la sesión y borrar las respuestas guardadas?"))return;stopLocalTimer();state=freshState();try{localStorage.removeItem("sales-s8-live-deck");}catch{}closeTopics();render();}

document.getElementById("topicsButton").onclick=openTopics;
document.getElementById("closeTopics").onclick=closeTopics;
document.getElementById("scrim").onclick=closeTopics;
document.getElementById("notesButton").onclick=openNotes;
document.getElementById("academicButton").onclick=openAcademic;
document.getElementById("resetButton").onclick=resetSession;
document.querySelectorAll("[data-close-modal]").forEach(b=>b.onclick=()=>document.getElementById(b.dataset.closeModal).close());
prevButton.onclick=goPrev;nextButton.onclick=goNext;
document.addEventListener("keydown",e=>{
  const editing=["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName);
  if(e.key==="Escape"){closeTopics();document.querySelectorAll("dialog[open]").forEach(d=>d.close());return;}
  if(editing)return;
  if(e.key==="ArrowRight"){e.preventDefault();goNext();}
  if(e.key==="ArrowLeft"){e.preventDefault();goPrev();}
});

render();
