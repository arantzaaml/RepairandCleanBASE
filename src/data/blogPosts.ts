import { Language } from "./translations";

export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  image: string;
  category: Record<Language, string>;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>; // Utilizamos HTML básico (<h2>, <p>, <strong>) para el formato rico
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "detectar-problemas-casa-antes-reforma",
    date: "2024-04-10",
    image: "/lovable-uploads/65f44365-8ec1-4dc4-8bfd-1c035df281bf.png", // Usando la imagen del facade before temporalmente, o cualquier otra representativa
    category: {
      es: "Mantenimiento Preventivo",
      ca: "Manteniment Preventiu",
      en: "Preventive Maintenance"
    },
    title: {
      es: "Cómo detectar y solucionar problemas comunes en casa antes de que se conviertan en una reforma costosa",
      ca: "Com detectar i solucionar problemes comuns a casa abans que es converteixin en una reforma costosa",
      en: "How to detect and fix common home issues before they become an expensive renovation"
    },
    excerpt: {
      es: "Aprende a identificar fugas, fallos eléctricos y grietas a tiempo. Guía práctica para evitar reparaciones costosas en tu hogar.",
      ca: "Aprèn a identificar fuites, fallades elèctriques i esquerdes a temps. Guia pràctica per evitar reparacions costoses a la teva llar.",
      en: "Learn to identify leaks, electrical faults, and cracks early on. A practical guide to avoiding costly repairs in your home."
    },
    content: {
      es: `
        <h2>1. Señales de problemas de fontanería que no debes ignorar</h2>
        
        <h3>Humedades o manchas en paredes y techos</h3>
        <p>Si ves manchas oscuras o zonas con pintura levantada, probablemente haya una fuga interna. Aunque parezca leve, puede afectar a la estructura con el tiempo.</p>
        
        <h3>Bajada de presión en grifos</h3>
        <p>Cuando el agua sale con menos fuerza de lo habitual, puede haber una obstrucción o fuga en el sistema.</p>
        
        <h3>Malos olores en desagües</h3>
        <p>Un olor persistente suele indicar acumulación de residuos o problemas en el sifón.</p>
        
        <p><strong>👉 Qué hacer:</strong> Si el problema persiste más de 24-48h, lo recomendable es una revisión profesional para evitar daños mayores.</p>

        <h2>2. Problemas eléctricos frecuentes en viviendas</h2>
        
        <h3>Saltos constantes del diferencial</h3>
        <p>Si ocurre con frecuencia, puede haber sobrecarga o un fallo en la instalación.</p>
        
        <h3>Enchufes o interruptores que se calientan</h3>
        <p>Esto es una señal clara de riesgo y debe revisarse cuanto antes.</p>
        
        <h3>Luces que parpadean</h3>
        <p>Puede indicar problemas en el cableado o conexiones defectuosas.</p>
        
        <p><strong>👉 Importante:</strong> Nunca manipules instalaciones eléctricas si no tienes experiencia.</p>

        <h2>3. Grietas y daños estructurales: cuándo preocuparse</h2>
        <p>No todas las grietas son graves, pero hay señales que indican riesgo:</p>
        <ul>
          <li>Grietas diagonales en paredes</li>
          <li>Aberturas que aumentan con el tiempo</li>
          <li>Puertas o ventanas que dejan de encajar</li>
        </ul>
        <p><strong>👉 Estas señales pueden indicar movimiento estructural o problemas en la base del inmueble.</strong></p>

        <h2>4. Reparaciones pequeñas vs. reformas completas</h2>
        <p>Muchas personas retrasan arreglos pequeños pensando que no son urgentes. El problema es que:</p>
        <ul>
          <li>Una fuga pequeña puede acabar en obra de fontanería</li>
          <li>Un fallo eléctrico puede requerir rehacer la instalación</li>
          <li>Una grieta puede derivar en reforma estructural</li>
        </ul>
        <p><strong>👉 Actuar a tiempo siempre es más barato.</strong></p>

        <h2>5. ¿Cuándo llamar a un profesional?</h2>
        <p>Deberías contactar con un especialista cuando:</p>
        <ul>
          <li>El problema se repite</li>
          <li>No sabes identificar la causa</li>
          <li>Hay riesgo eléctrico o de agua</li>
          <li>Afecta a varias zonas de la vivienda</li>
        </ul>
        <p>Un diagnóstico temprano evita gastos innecesarios.</p>

        <h2>Conclusión</h2>
        <p>El mantenimiento del hogar no es solo una cuestión estética, es una forma de prevenir problemas mayores. Detectar señales a tiempo y actuar rápido marca la diferencia entre una reparación sencilla y una reforma costosa.</p>

        <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
          <h3 class="text-xl font-bold text-foreground mb-2">¿Tienes alguna de estas señales en casa?</h3>
          <p class="mb-4">En Repair & Clean podemos ayudarte a detectar el problema y solucionarlo de forma rápida y profesional.</p>
          <a href="/#formulario-presupuesto" class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            👉 Recibe tu presupuesto en menos de 24h.
          </a>
        </div>
      `,
      ca: `
        <h2>1. Senyals de problemes de fontaneria que no has d'ignorar</h2>
        
        <h3>Humitats o taques a les parets i sostres</h3>
        <p>Si veus taques fosques o zones amb pintura aixecada, probablement hi hagi una fuita interna. Encara que sembli lleu, pot afectar l'estructura amb el temps.</p>
        
        <h3>Baixada de pressió a les aixetes</h3>
        <p>Quan l'aigua surt amb menys força de l'habitual, pot haver-hi una obstrucció o fuita en el sistema.</p>
        
        <h3>Males olors als desguassos</h3>
        <p>Una olor persistent sol indicar acumulació de residus o problemes al sifó.</p>
        
        <p><strong>👉 Què fer:</strong> Si el problema persisteix més de 24-48h, el recomanable és una revisió professional per evitar danys majors.</p>

        <h2>2. Problemes elèctrics freqüents en habitatges</h2>
        
        <h3>Salts constants del diferencial</h3>
        <p>Si passa amb freqüència, hi pot haver sobrecàrrega o una fallada en la instal·lació.</p>
        
        <h3>Endolls o interruptors que s'escalfen</h3>
        <p>Això és un senyal clau de risc i s'ha de revisar al més aviat possible.</p>
        
        <h3>Llums que parpellegen</h3>
        <p>Pot indicar problemes en el cablejat o connexions defectuoses.</p>
        
        <p><strong>👉 Important:</strong> Mai manipulis instal·lacions elèctriques si no tens experiència.</p>

        <h2>3. Esquerdes i danys estructurals: quan preocupar-se</h2>
        <p>No totes les esquerdes són greus, però hi ha senyals que indiquen risc:</p>
        <ul>
          <li>Esquerdes diagonals a les parets</li>
          <li>Obertures que augmenten amb el temps</li>
          <li>Portes o finestres que deixen d'encaixar</li>
        </ul>
        <p><strong>👉 Aquests senyals poden indicar moviment estructural o problemes a la base de l'immoble.</strong></p>

        <h2>4. Reparacions petites vs. reformes completes</h2>
        <p>Moltes persones endarrereixen petits arranjaments pensant que no són urgents. El problema és que:</p>
        <ul>
          <li>Una petita fuita pot acabar en obra de fontaneria</li>
          <li>Una fallada elèctrica pot requerir refer la instal·lació</li>
          <li>Una esquerda pot derivar en reforma estructural</li>
        </ul>
        <p><strong>👉 Actuar a temps sempre és més barat.</strong></p>

        <h2>5. Quan trucar a un professional?</h2>
        <p>Hauries de contactar amb un especialista quan:</p>
        <ul>
          <li>El problema es repeteix</li>
          <li>No saps identificar-ne la causa</li>
          <li>Hi ha risc elèctric o d'aigua</li>
          <li>Afecta a diverses zones de l'habitatge</li>
        </ul>
        <p>Un diagnòstic precoç evita despeses innecessàries.</p>

        <h2>Conclusió</h2>
        <p>El manteniment de la llar no només és una qüestió estètica, és una forma de prevenir problemes majors. Detectar senyals a temps i actuar ràpid marca la diferència entre una reparació senzilla i una reforma costosa.</p>

        <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
          <h3 class="text-xl font-bold text-foreground mb-2">Tens algun d'aquests senyals a casa?</h3>
          <p class="mb-4">A Repair & Clean podem ajudar-te a detectar el problema i solucionar-ho de forma ràpida i professional.</p>
          <a href="/#formulario-presupuesto" class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            👉 Rep el teu pressupost en menys de 24h.
          </a>
        </div>
      `,
      en: `
        <h2>1. Plumbing issue signs you shouldn't ignore</h2>
        
        <h3>Dampness or stains on walls and ceilings</h3>
        <p>If you see dark spots or peeling paint areas, there is likely an internal leak. Even if it seems minor, it can damage the structure over time.</p>
        
        <h3>Drop in faucet water pressure</h3>
        <p>When water comes out with less force than usual, there might be a blockage or a leak in the system.</p>
        
        <h3>Bad smells from drains</h3>
        <p>A persistent smell usually indicates waste build-up or trap issues.</p>
        
        <p><strong>👉 What to do:</strong> If the issue persists for more than 24-48h, a professional inspection is recommended to prevent further damage.</p>

        <h2>2. Frequent electrical problems in homes</h2>
        
        <h3>Constant breaker tripping</h3>
        <p>If this happens frequently, there might be an overload or an installation fault.</p>
        
        <h3>Plugs or switches getting hot</h3>
        <p>This is a clear risk sign and should be checked immediately.</p>
        
        <h3>Flickering lights</h3>
        <p>This could indicate wiring problems or faulty connections.</p>
        
        <p><strong>👉 Important:</strong> Never tamper with electrical installations if you lack experience.</p>

        <h2>3. Cracks and structural damages: when to worry</h2>
        <p>Not all cracks are serious, but there are signs that indicate risk:</p>
        <ul>
          <li>Diagonal cracks on walls</li>
          <li>Gaps that increase over time</li>
          <li>Doors or windows that stop fitting properly</li>
        </ul>
        <p><strong>👉 These signs could indicate structural movement or issues at the base of the property.</strong></p>

        <h2>4. Minor repairs vs. full renovations</h2>
        <p>Many people delay small fixes thinking they aren't urgent. The problem is that:</p>
        <ul>
          <li>A small leak can turn into major plumbing work</li>
          <li>An electrical fault might require a complete rewiring</li>
          <li>A crack can lead to a structural renovation</li>
        </ul>
        <p><strong>👉 Acting in time is always cheaper.</strong></p>

        <h2>5. When should you call a professional?</h2>
        <p>You should contact a specialist when:</p>
        <ul>
          <li>The problem keeps occurring</li>
          <li>You can't identify the cause</li>
          <li>There is a water or electrical risk</li>
          <li>It affects multiple areas of the house</li>
        </ul>
        <p>An early diagnosis prevents unnecessary expenses.</p>

        <h2>Conclusion</h2>
        <p>Home maintenance is not just about aesthetics, it is a way of preventing major issues. Spotting signs early and acting quickly can make the difference between a simple repair and a costly renovation.</p>

        <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
          <h3 class="text-xl font-bold text-foreground mb-2">Do you have any of these signs at home?</h3>
          <p class="mb-4">At Repair & Clean we can help you detect the problem and solve it quickly and professionally.</p>
          <a href="/#formulario-presupuesto" class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            👉 Get your quote in less than 24h.
          </a>
        </div>
      `
    }
  }
];
