"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ---------- utilidades ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Shield({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <path d="M32 4 56 14v16c0 15-10 26-24 30C18 56 8 45 8 30V14Z" fill="none" stroke="#38e1ff" strokeWidth="3.5" />
      <path d="M24 32l6 6 11-13" fill="none" stroke="#38e1ff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  ["Problema", "#problema"],
  ["Solución", "#solucion"],
  ["Tecnología", "#tecnologia"],
  ["Marco legal", "#legal"],
  ["Negocio", "#negocio"],
] as const;

/* ---------- nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#04070e]/82 backdrop-blur-md border-b border-[rgba(134,168,255,.14)]">
      <div className="wrap flex items-center justify-between gap-4" style={{ height: 68 }}>
        <a href="#top" className="flex items-center gap-3 font-bold text-lg tracking-tight" style={{ color: "#eef3fd" }}>
          <Shield size={28} /> Escudo Digital
        </a>
        <div className="hidden md:flex items-center gap-7">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-[15px]" style={{ color: "#9db0cc" }}>
              {label}
            </a>
          ))}
          <a className="btn btn-primary" style={{ padding: "10px 18px" }} href="#inversion">
            Invertir
          </a>
        </div>
        <button
          className="md:hidden bg-transparent border border-[rgba(134,168,255,.28)] rounded-lg px-4 py-2 text-sm"
          style={{ color: "#eef3fd", fontFamily: "var(--font-plex)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#080d18] border-t border-[rgba(134,168,255,.14)] px-7 py-5 flex flex-col gap-4">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={close} className="text-[15px]" style={{ color: "#9db0cc" }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ---------- hero ---------- */
function Hero() {
  const stats = [
    ["2", "líneas", "Escudo Menores + Adultos"],
    ["0", "instalar", "La protección va en la red"],
    ["40–44%", "", "margen bruto operador", "amber"],
    ["1,2M€", "", "ronda seed · 24 meses", "green"],
  ] as const;
  return (
    <header
      id="top"
      className="relative overflow-hidden"
      style={{
        padding: "120px 0 90px",
        background:
          "radial-gradient(1000px 600px at 80% -10%, rgba(56,225,255,.12), transparent 60%), radial-gradient(900px 600px at 5% 110%, rgba(61,123,255,.10), transparent 55%), #04070e",
      }}
    >
      <div className="wrap relative">
        <span className="badge cyan">Proyecto · Ronda Seed · 2026</span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="display"
          style={{ marginTop: 26 }}
        >
          El operador de internet que <span className="accent">protege por defecto</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lead"
          style={{ maxWidth: 720, margin: "28px 0 36px", fontSize: 20, lineHeight: 1.65 }}
        >
          Escudo Digital es un operador de fibra y móvil cuya <b style={{ color: "#eef3fd" }}>propia conexión lleva la
          protección incorporada</b>: DNS seguro, filtrado, anti-estafa y control parental activos desde el primer byte.
          Porque ningún padre debería tener que ser un experto para que su hijo duerma tranquilo, y ninguna persona
          debería perder su ahorro por un clic. <span className="accent">Menores y adultos, seguros sin instalar nada.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a className="btn btn-primary" href="#solucion">
            Ver la solución →
          </a>
          <a className="btn btn-ghost" href="#inversion">
            Invertir en el proyecto
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[rgba(134,168,255,.14)]"
        >
          {stats.map(([v, u, label, color]) => (
            <div key={label}>
              <div className={`stat ${color === "amber" ? "amber" : color === "green" ? "green" : ""}`}>
                {v}
                {u && <span className="u"> {u}</span>}
              </div>
              <div className="tiny" style={{ marginTop: 8 }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}

/* ---------- tesis ---------- */
function Thesis() {
  return (
    <section className="section" style={{ background: "linear-gradient(180deg, rgba(56,225,255,.05), transparent)", borderBlock: "1px solid rgba(134,168,255,.14)" }}>
      <div className="wrap">
        <Reveal>
          <div className="kicker">La tesis</div>
          <h2 className="h2" style={{ marginTop: 22, fontSize: "clamp(28px,4.4vw,44px)" }}>
            La protección no es un extra. <span className="accent">Es la red.</span>
          </h2>
          <p className="lead" style={{ maxWidth: 780, marginTop: 24 }}>
            Todo el tráfico de un hogar pasa por un único punto: el router. Técnicamente, quien lo controla puede{" "}
            <b style={{ color: "#eef3fd" }}>bloquear antes de que llegue</b> — todas las pantallas a la vez, sin que el
            usuario tenga que hacer nada. Emocionalmente, es la diferencia entre "espero no picar" y{" "}
            <b style={{ color: "#eef3fd" }}>"estoy protegido"</b>.
          </p>
          <div className="grid3" style={{ marginTop: 48 }}>
            <Reveal delay={0.1}>
              <div className="card">
                <div className="tiny">HOY</div>
                <h3 className="text-xl mt-2.5 mb-1.5" style={{ color: "#6b7ea0" }}>Comprar + instalar</h3>
                <p className="lead" style={{ fontSize: 15.5 }}>Antivirus, VPN, "fíjate en la URL". Si no sabes, quedas desprotegido.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card text-center" style={{ borderColor: "rgba(134,168,255,.25)" }}>
                <div className="tiny">PIVOTE</div>
                <div style={{ fontFamily: "var(--font-plex)", fontSize: 20, color: "#38e1ff", margin: "6px 0" }}>▼</div>
                <div style={{ fontSize: 15, color: "#9db0cc" }}>la protección pasa a ser la conexión</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card" style={{ borderColor: "rgba(56,225,255,.5)", boxShadow: "0 24px 70px rgba(56,225,255,.1)" }}>
                <div className="tiny cyan">ESCUDO DIGITAL</div>
                <h3 className="text-xl mt-2.5 mb-1.5 accent">Viene de serie</h3>
                <p className="lead" style={{ fontSize: 15.5 }}>DNS seguro y filtrado, anti-estafa, control parental y anti-ciberdelincuencia en toda la red.</p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- problema ---------- */
function Problem() {
  return (
    <section id="problema" className="section">
      <div className="wrap">
        <Reveal>
          <div className="kicker">El problema</div>
          <h2 className="h2" style={{ marginTop: 20, maxWidth: 900 }}>
            Detrás de cada ataque hay una persona. Detrás de cada <span className="accent">desprotección, una historia</span> que no debería pasar.
          </h2>
          <p className="lead" style={{ maxWidth: 820, marginTop: 20 }}>
            Los datos lo confirman: la cifra de estafas y delitos digitales no deja de crecer. Pero lo que de verdad late
            aquí es humano — un niño convertido en víctima de un depredador, un abuelo que pierde sus ahorros, un
            autónomo secuestrado por ransomware. Y la tecnología hoy <b style={{ color: "#eef3fd" }}>no responde por ellos</b>.
          </p>
        </Reveal>
        <div className="grid2" style={{ marginTop: 44 }}>
          <Reveal delay={0.05}>
            <div className="card">
              <span className="badge cyan">Escudo · Menores</span>
              <h3 className="text-[22px] font-semibold mt-4 mb-1.5">Los menores navegan desprotegidos</h3>
              <ul className="list" style={{ marginTop: 14 }}>
                <li>Contenido adulto, violencia y apuestas <b>a un clic</b>, sin filtro por defecto</li>
                <li>Grooming y ciberacoso <b>canalizados por apps y juegos</b></li>
                <li>El dispositivo <b>nunca duerme</b>: sin límites de uso ni horarios</li>
                <li>La seguridad queda en manos de padres <b>sin conocimientos técnicos</b></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ borderColor: "rgba(255,180,84,.3)" }}>
              <span className="badge amber">Escudo · Adultos</span>
              <h3 className="text-[22px] font-semibold mt-4 mb-1.5">Los adultos se defienden solos</h3>
              <ul className="list amber" style={{ marginTop: 14 }}>
                <li>Phishing, smishing, estafas de inversión y suplantación <b>en crecimiento</b></li>
                <li>La defensa es un <b>antivirus</b> o un "me fijo en la URL"… insostenible</li>
                <li>Malware y ransomware que <b>hablan con servidores remotos</b> en la red doméstica</li>
                <li>Routers e IoT <b>comprometidos sin que nadie lo sepa</b></li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <p className="tiny" style={{ marginTop: 30 }}>
            La ciberseguridad hoy es reactiva (después del daño), voluntaria (hay que activarla) y fragmentada (un AV en el PC, otro en el móvil, ninguno en el router).
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- solución ---------- */
function Solution() {
  return (
    <section id="solucion" className="section" style={{ background: "#080d18", borderBlock: "1px solid rgba(134,168,255,.14)" }}>
      <div className="wrap">
        <Reveal>
          <div className="kicker">La solución</div>
          <h2 className="h2" style={{ marginTop: 20 }}>
            Un operador cuya razón de ser es <span className="accent">proteger</span>
          </h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: 820 }}>
            Fibra + móvil sobre acceso mayorista, con una capa de protección integrada en la red. Dos líneas de producto,
            una misma plataforma, un mismo compromiso: <b style={{ color: "#eef3fd" }}>que la tecnología proteja a las personas</b>.
          </p>
        </Reveal>
        <div className="grid2" style={{ marginTop: 44 }}>
          <Reveal delay={0.05}>
            <div className="prodcard men h-full">
              <div className="flex justify-between items-center">
                <span className="badge cyan">Línea A</span>
                <span style={{ fontSize: 30 }}>🛡️</span>
              </div>
              <h3 className="h3t text-2xl font-semibold mt-4">Escudo Menores</h3>
              <div className="tiny cyan" style={{ marginBottom: 14 }}>Protección de niñas y niños</div>
              <ul className="list">
                <li><b>Filtrado por categorías</b> activo por defecto (pornografía, violencia, apuestas, redes…)</li>
                <li><b>Perfiles por dispositivo y franja horaria</b> — el móvil del hijo "duerme"</li>
                <li><b>Anti-grooming y anti-ciberacoso</b> con alertas al tutor (con consentimiento legal)</li>
                <li><b>Verificación de edad</b> integrada (marco AEPD)</li>
                <li><b>Dashboard familiar</b> premium, claro y visual</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prodcard adu h-full">
              <div className="flex justify-between items-center">
                <span className="badge amber">Línea B</span>
                <span style={{ fontSize: 30 }}>🛡️</span>
              </div>
              <h3 className="h3t text-2xl font-semibold mt-4 amber">Escudo Adultos</h3>
              <div className="tiny amber" style={{ marginBottom: 14 }}>Contra la ciberdelincuencia</div>
              <ul className="list amber">
                <li><b>Filtrado de estafas</b> en red: phishing, smishing, fraude de inversión, en tiempo real</li>
                <li><b>Corte de C2</b> de malware / ransomware en el punto de acceso</li>
                <li><b>Protección de la red doméstica e IoT</b>: detecta y aísla dispositivos comprometidos</li>
                <li><b>Alerta de suplantación</b> de bancos e instituciones</li>
                <li><b>Protección en movilidad</b> con la SIM (DNS filtrado fuera de casa)</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- tecnología ---------- */
function Tech() {
  const rows = [
    ["01", "Usuario · todas las pantallas", "App, portal y dashboard familia. UX premium, en lenguaje claro. El usuario administra sin fricción."],
    ["02", "Capa Escudo · el cerebro de la red", "DNS seguro y filtrado (DoH/DoT), bloqueo de dominios/IPs maliciosos con threat intelligence en tiempo real, políticas por perfil y horario, detección C2 / ransomware e integración con verificación de edad (AEPD)."],
    ["03", "Red · fibra OME + móvil MVNO", "Transporte sobre acceso mayorista español con CPE gestionado que identifica cada dispositivo. Sin construir red propia → capex bajo."],
  ] as const;
  return (
    <section id="tecnologia" className="section">
      <div className="wrap">
        <Reveal>
          <div className="kicker">Tecnología</div>
          <h2 className="h2" style={{ marginTop: 20 }}>
            Una capa de protección en el <span className="accent">corazón de la red</span>
          </h2>
        </Reveal>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40 }} className="max-md:grid-cols-1">
          <div>
            {rows.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.06}>
                <div className="feature">
                  <div className="fnum">{n}</div>
                  <div>
                    <h3 className={n === "02" ? "accent" : ""}>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal delay={0.1}>
              <div className="card" style={{ marginBottom: 18 }}>
                <div className="tiny" style={{ marginBottom: 12 }}>CLAVES DE DISEÑO</div>
                <ul className="list" style={{ marginTop: 6 }}>
                  <li><b>Cloud en España/UE</b> · RGPD</li>
                  <li><b>DNS redundante</b> → baja latencia</li>
                  <li><b>Router gestionado</b> con firmware propio</li>
                  <li><b>API B2B2C</b> para licenciar la capa</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card" style={{ borderColor: "rgba(61,220,151,.3)" }}>
                <div className="tiny green" style={{ marginBottom: 12 }}>PRIVACIDAD COMO REGLA</div>
                <p className="lead" style={{ fontSize: 15 }}>
                  La protección se hace <b style={{ color: "#eef3fd" }}>sin vender datos</b>: minimización, anonimización y
                  DNS cifrado. Nuestro negocio no depende de monetizar a las personas — esa es nuestra palabra.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- legal ---------- */
function Legal() {
  return (
    <section id="legal" className="section" style={{ background: "#080d18", borderBlock: "1px solid rgba(134,168,255,.14)" }}>
      <div className="wrap">
        <Reveal>
          <div className="kicker">Marco legal · por qué ahora</div>
          <h2 className="h2" style={{ marginTop: 20 }}>
            El viento <span className="accent">regulatorio</span> sopla a favor
          </h2>
        </Reveal>
        <div className="grid2" style={{ marginTop: 44 }}>
          <Reveal delay={0.05}>
            <ul className="list">
              <li><b>Reglamento UE 2022/2065 (DSA)</b> — protección de los menores en línea como obligación europea, en plena aplicación.</li>
              <li><b>Verificación de edad · AEPD</b> — sistema público para restringir contenidos para adultos a los menores; la red puede cumplirlo por diseño.</li>
              <li><b>Ley 11/2022 de Telecomunicaciones</b> — registro de operadores por notificación (sin concesión). Entrada accesible para un operador virtual.</li>
              <li><b>eIDAS2 · identidad digital UE</b> — cartera de identidad digital europea en 2026: la verificación fiable se normaliza.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card">
              <div className="tiny" style={{ marginBottom: 14 }}>
                MODELO OPERATIVO ·<span style={{ color: "#38e1ff" }}> CON LOS PIES EN LA TIERRA</span>
              </div>
              <p className="lead" style={{ fontSize: 15.5 }}>
                Operador sobre red ajena: <b style={{ color: "#eef3fd" }}>fibra OME (acceso mayorista NEBA)</b> +{" "}
                <b style={{ color: "#eef3fd" }}>móvil MVNO</b>. Inscripción previa en el{" "}
                <b style={{ color: "#eef3fd" }}>Registro de Operadores de la CNMC</b> (trámite gratuito), cumplimiento
                RGPD/LOPDGDD con DPO y marcos de consumidores. <b style={{ color: "#eef3fd" }}>Sin construir red propia.</b>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- mercado ---------- */
function Market() {
  const stats = [
    ["17M+", "LÍNEAS MÓVILES EN ESPAÑA"],
    ["88%", "PENETRACIÓN DE FIBRA"],
    ["2×", "CIBERDELINCUENCIA (TENDENCIA)", "amber"],
    ["∞", "DEMANDA INSTITUCIONAL", "green"],
  ] as const;
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="kicker">El mercado</div>
          <h2 className="h2" style={{ marginTop: 20 }}>
            Protección para <span className="accent">millones de hogares</span> que hoy se quedan fuera
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: 44 }}>
            {stats.map(([v, label, color]) => (
              <div key={label}>
                <div className={`stat ${color === "amber" ? "amber" : color === "green" ? "green" : ""}`}>{v}</div>
                <div className="tiny" style={{ marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="card" style={{ marginTop: 34, borderColor: "rgba(56,225,255,.3)" }}>
            <p className="lead" style={{ fontSize: 16 }}>
              <b style={{ color: "#eef3fd" }}>Canal de confianza:</b> la trayectoria de{" "}
              <b style={{ color: "#eef3fd" }}>escudo-familiar</b> (plataforma de protección de menores) es la puerta hacia
              familias, colegios, AMPA, parroquias y ayuntamientos. No se mezcla: es la{" "}
              <b style={{ color: "#eef3fd" }}>base conceptual y el canal de entrada</b> del operador.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- negocio ---------- */
function Business() {
  const rows = [
    ["Ingresos", "310", "1.970", "6.240", "15.360", "31.500", true],
    ["· Operador (B2C)", "260", "1.770", "4.560", "8.460", "13.860", false],
    ["· Licencia (B2B2C)", "50", "200", "1.680", "6.900", "17.640", false],
    ["Margen bruto", "120", "810", "3.110", "7.940", "16.240", true],
    ["EBITDA", "-780", "-590", "710", "4.040", "10.440", false, "sign"],
    ["FCF", "-1.080", "-840", "310", "3.440", "9.640", false, "sign"],
  ] as const;
  return (
    <section id="negocio" className="section" style={{ background: "#080d18", borderBlock: "1px solid rgba(134,168,255,.14)" }}>
      <div className="wrap">
        <Reveal>
          <div className="kicker">Modelo de negocio</div>
          <h2 className="h2" style={{ marginTop: 20 }}>
            Dos motores de ingresos <span className="accent">que se refuerzan</span>
          </h2>
        </Reveal>
        <div className="grid2" style={{ marginTop: 40 }}>
          <Reveal delay={0.05}>
            <div className="card">
              <span className="badge cyan">Motor 1 · B2C</span>
              <h3 className="text-[22px] font-semibold mt-4 mb-1.5">Operador de internet</h3>
              <p className="lead" style={{ fontSize: 15.5 }}>Fibra OME + móvil MVNO con protección integrada a precio premium.</p>
              <div className="flex gap-10 mt-5">
                <div><div style={{ fontFamily: "var(--font-plex)", fontSize: 30 }}>~45€</div><div className="tiny">ARPU / mes</div></div>
                <div><div style={{ fontFamily: "var(--font-plex)", fontSize: 30 }}>40–44%</div><div className="tiny">margen bruto</div></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ borderColor: "rgba(61,220,151,.35)" }}>
              <span className="badge green">Motor 2 · B2B2C</span>
              <h3 className="text-[22px] font-semibold mt-4 mb-1.5">Licencia "Escudo en red"</h3>
              <p className="lead" style={{ fontSize: 15.5 }}>Licenciamos la capa de protección (DNS, TI, motor de políticas, API) a otros operadores y OMEs.</p>
              <div className="flex gap-10 mt-5">
                <div><div style={{ fontFamily: "var(--font-plex)", fontSize: 30, color: "#3ddc97" }}>~80%</div><div className="tiny">margen SaaS</div></div>
                <div><div style={{ fontFamily: "var(--font-plex)", fontSize: 30 }}>≈0</div><div className="tiny">CAC (el socio trae la línea)</div></div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="tbl-scroll" style={{ marginTop: 44 }}>
            <table>
              <thead>
                <tr>
                  <th style={{ width: 26 }}>Miles € · escenario base</th>
                  <th>Año 1</th><th>Año 2</th><th>Año 3</th><th>Año 4</th><th>Año 5</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const [label, ...vals] = r;
                  const isSign = (r as unknown as string[]).length > 8;
                  return (
                    <tr key={label}>
                      <td className="b" style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: label.startsWith("·") ? 14 : 15.5, color: label.startsWith("·") ? "#9db0cc" : "#eef3fd" }}>
                        {label}
                      </td>
                      {vals.slice(0, 5).map((v, i) => {
                        const n = Number(String(v).replace(/\./g, ""));
                        const sign = String(v).startsWith("-");
                        const isLast = i === 4;
                        const colored = isSign && isLast;
                        return (
                          <td key={i} className={isLast ? "b" : "b"} style={{ color: isLast ? (sign ? "#ff7b72" : "#3ddc97") : "#eef3fd", fontFamily: "var(--font-plex)", fontSize: 19 }}>
                            {v}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="tiny" style={{ marginTop: 14 }}>
            Modelo indicativo · EBITDA positivo el año 3 · +350.000 líneas B2B2C el año 5. Cifras a validar con tesis y presupuestos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const faqs = [
    ["¿Hay que construir una red de fibra para ser operador?", "No. Escudo Digital opera sobre red ajena (fibra OME con acceso mayorista NEBA y móvil MVNO). Se inscribe como operador en la CNMC por notificación — trámite gratuito — y se ofrece el servicio con nuestro router y capa de protección. Capex bajo, arranque barato."],
    ["¿Cómo se diferencia de un antivirus o un control parental normal?", "La protección va en la red, no en el dispositivo: no hay que instalar nada en cada pantalla, cubre todos los dispositivos del hogar (incluidos IoT y TV) y actúa antes de que la amenaza llegue. Es un servicio, no un producto técnico."],
    ["¿Cómo se monetiza si la filosofía es proteger y no vender datos?", "Con un precio premium justificado por la protección (operador) y con la licencia B2B2C a otros operadores (margen alto, sin CAC). El modelo no depende de monetizar datos de los clientes: eso es una ventaja de marca y de confianza."],
    ["¿Es legal la verificación de edad y el filtrado para menores?", "Sí, está alineado con el Reglamento UE (DSA), el sistema de verificación de edad de la AEPD y la normativa española de protección del menor. El filtrado se aplica con consentimiento del titular y con la máxima protección de datos (RGPD/LOPDGDD, DPO)."],
    ["¿Cuánto dinero buscáis?", "Ronda seed de 1,2 M€ para 24 meses: plataforma Escudo, acuerdos mayoristas y piloto, equipo núcleo, cumplimiento y marketing. Punto de equilibrio operativo en el año 3."],
  ];
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="kicker">Preguntas frecuentes</div>
          <h2 className="h2" style={{ marginTop: 20 }}>Lo que te preguntarás</h2>
        </Reveal>
        <div style={{ marginTop: 34 }}>
          {faqs.map(([q, a], i) => (
            <Reveal key={i} delay={i * 0.04}>
              <details open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function Cta() {
  return (
    <section id="inversion" className="section text-center" style={{ background: "#080d18", borderBlock: "1px solid rgba(134,168,255,.14)" }}>
      <div className="wrap">
        <Reveal>
          <span className="badge cyan">Ronda seed · 1,2 M€</span>
          <h2 className="h2" style={{ margin: "26px auto 0", maxWidth: 820 }}>
            Un operador con propósito, <span className="accent">con los pies en la tierra</span>
          </h2>
          <p className="lead" style={{ maxWidth: 720, margin: "24px auto 36px" }}>
            Rentable y con misión: la protección de menores y adultos frente a la desprotección general. Porque proteger
            no es solo un buen negocio — es lo correcto. Cobertura de 24 meses hasta EBITDA positivo.
          </p>
          <a className="btn btn-primary" href="mailto:inversores@escudodigital.es?subject=Inversión%20Escudo%20Digital">
            Solicitar la memoria completa →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="pt-14 pb-10 border-t border-[rgba(134,168,255,.14)]" style={{ background: "#080d18" }}>
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 font-bold text-lg mb-3" style={{ color: "#eef3fd" }}>
              <Shield size={26} /> Escudo Digital
            </div>
            <p className="lead" style={{ fontSize: 14.5, maxWidth: 360 }}>
              Operador de internet con protección integrada en la conexión. Escudo Menores + Escudo Adultos. Documento
              confidencial de proyecto · España / UE.
            </p>
          </div>
          <div>
            <div className="tiny" style={{ marginBottom: 12 }}>PRODUCTO</div>
            {[
              ["Escudo Menores", "#solucion"],
              ["Escudo Adultos", "#solucion"],
              ["Tecnología en red", "#tecnologia"],
            ].map(([l, h]) => (
              <div key={l} style={{ marginBottom: 10 }}><a href={h} style={{ color: "#9db0cc" }}>{l}</a></div>
            ))}
          </div>
          <div>
            <div className="tiny" style={{ marginBottom: 12 }}>PROYECTO</div>
            {[
              ["Modelo de negocio", "#negocio"],
              ["Marco legal", "#legal"],
              ["Inversión", "#inversion"],
            ].map(([l, h]) => (
              <div key={l} style={{ marginBottom: 10 }}><a href={h} style={{ color: "#9db0cc" }}>{l}</a></div>
            ))}
          </div>
        </div>
        <div className="tiny" style={{ borderTop: "1px solid rgba(134,168,255,.14)", paddingTop: 22 }}>
          © 2026 Escudo Digital Telecom · Presentación y memoria confidenciales · No distribuir sin autorización.
        </div>
      </div>
    </footer>
  );
}

/* ---------- página ---------- */
export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Thesis />
        <Problem />
        <Solution />
        <Tech />
        <Legal />
        <Market />
        <Business />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
