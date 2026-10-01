import { useEffect, useLayoutEffect } from 'react'
import './App.css'

const verbos = [
  ['Desenvolva.', 'Transforme ideias em projetos e soluções digitais.'],
  ['Aprenda.', 'Conheça linguagens, ferramentas e tecnologias.'],
  ['Conecte-se.', 'Prepare-se para diferentes possibilidades profissionais.'],
]

const aprendizado = [
  ['Lógica de programação', 'Aprenda a estruturar pensamentos e criar algoritmos para resolver problemas.'],
  ['Desenvolvimento Web', 'Crie páginas e aplicações utilizando tecnologias web.'],
  ['Frontend', 'Desenvolva a parte visual e interativa das aplicações.'],
  ['Backend', 'Trabalhe com servidores, regras de negócio e dados.'],
  ['Banco de dados', 'Organize, armazene e consulte informações de sistemas.'],
  ['APIs', 'Faça diferentes sistemas e serviços se comunicarem.'],
  ['Aplicativos', 'Conheça conceitos utilizados no desenvolvimento de aplicações.'],
  ['Versionamento', 'Utilize Git e GitHub para controlar e compartilhar versões dos projetos.'],
]

const tecnologias = [
  ['HTML', 'Estrutura'],
  ['CSS', 'Estilo'],
  ['JS', 'Interatividade'],
  ['React', 'Frontend'],
  ['Node.js', 'Backend'],
  ['SQL', 'Banco de dados'],
  ['Git', 'Versionamento'],
  ['GitHub', 'Colaboração'],
]

const areas = [
  ['Desenvolvimento Frontend', 'Criação das interfaces e experiências visuais.'],
  ['Desenvolvimento Backend', 'Construção da lógica e funcionamento dos sistemas.'],
  ['Desenvolvimento Full Stack', 'Atuação tanto no frontend quanto no backend.'],
  ['Banco de dados', 'Organização e gerenciamento de informações.'],
  ['Suporte e manutenção', 'Correção, atualização e manutenção de sistemas.'],
  ['Desenvolvimento de aplicações', 'Criação de soluções para diferentes necessidades.'],
]

const projetos = [
  ['Sistema de clientes', 'Cadastro e gerenciamento de informações de clientes.', 'CRUD'],
  ['Sistema de estoque', 'Controle de produtos, quantidades e movimentações.', 'Banco de dados'],
  ['Aplicação de agendamentos', 'Organização de horários, serviços e compromissos.', 'Web app'],
  ['Loja virtual', 'Catálogo de produtos e experiência de compra online.', 'E-commerce'],
  ['Dashboard administrativo', 'Visualização e gerenciamento de informações.', 'Dashboard'],
  ['Aplicativo de tarefas', 'Organização de tarefas e atividades do usuário.', 'App'],
]

const jornada = [
  ['Fundamentos', 'Lógica e conceitos de programação.'],
  ['Desenvolvimento', 'Criação de sites, sistemas e aplicações.'],
  ['Projetos', 'Aplicação prática dos conhecimentos.'],
  ['Profissão', 'Preparação para o mercado de tecnologia.'],
]

const REVEAL =
  '.section-head, .about-text, .verbs li, .row, .stack li, .areas li, .projects li, .timeline li, .cta h2, .cta p, .cta .button'
const GLOW = '.stack li, .projects li, .areas li, .row, .verbs li'

function App() {
  // Entrada suave dos blocos ao rolar a página
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = document.querySelectorAll(REVEAL)
    els.forEach((el) => {
      const i = Array.from(el.parentElement.children).indexOf(el)
      el.style.setProperty('--d', `${Math.min(i, 6) * 70}ms`)
      el.classList.add('reveal')
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target
          el.classList.add('in')
          io.unobserve(el)
          // remove a classe depois para o hover não herdar o atraso
          setTimeout(() => el.classList.remove('reveal', 'in'), 1200)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Luz que acompanha o mouse (hero, CTA e itens com hover)
  useEffect(() => {
    const move = (e) => {
      const set = (el, x, y) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty(x, `${e.clientX - r.left}px`)
        el.style.setProperty(y, `${e.clientY - r.top}px`)
      }
      const glow = e.target.closest?.(GLOW)
      if (glow) set(glow, '--x', '--y')
      const light = e.target.closest?.('.hero, .cta')
      if (light) set(light, '--mx', '--my')
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <>
      <header className="header">
        <a href="#inicio" className="logo">
          <b>SENAI</b> Desenvolvimento de Sistemas
        </a>

        <nav aria-label="Seções">
          <a href="#sobre">Sobre</a>
          <a href="#aprendizado">Aprendizado</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Áreas</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <h1>
            <span className="hl" style={{ '--i': 0 }}>Transforme ideias</span>
            <span className="hl" style={{ '--i': 1 }}>
              em sistemas.<span className="cursor" aria-hidden="true"></span>
            </span>
          </h1>

          <div className="hero-foot">
            <p>
              Aprenda a desenvolver sistemas, aplicações e soluções
              utilizando tecnologias presentes no mercado de trabalho.
            </p>
            <a href="#sobre" className="button">Conheça o curso</a>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section">
          <div className="section-head">
            <h2>Sobre o curso</h2>
          </div>

          <div className="about">
            <div className="about-text">
              <h3>O que é Desenvolvimento de Sistemas?</h3>
              <p>
                Desenvolvimento de Sistemas é a área responsável por criar
                programas, sites, aplicativos e outras soluções digitais
                capazes de resolver problemas e facilitar tarefas.
              </p>
              <p>
                Durante o curso Técnico em Desenvolvimento de Sistemas,
                o estudante aprende conceitos de programação, bancos de
                dados, desenvolvimento web, APIs e outras tecnologias.
              </p>
              <p>
                O objetivo é desenvolver conhecimentos técnicos e também
                a capacidade de analisar problemas e transformá-los em
                soluções através da tecnologia.
              </p>
            </div>

            <ul className="verbs">
              {verbos.map(([titulo, texto]) => (
                <li key={titulo}>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* APRENDIZADO */}
        <section id="aprendizado" className="section inverse">
          <div className="section-head">
            <h2>O que você aprende</h2>
            <p>
              Ao longo da formação, diferentes conhecimentos são
              desenvolvidos para criar sistemas completos.
            </p>
          </div>

          <dl className="rows">
            {aprendizado.map(([nome, texto]) => (
              <div key={nome} className="row">
                <dt>{nome}</dt>
                <dd>{texto}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* TECNOLOGIAS */}
        <section id="tecnologias" className="section">
          <div className="section-head">
            <h2>Tecnologias</h2>
            <p>
              Algumas das tecnologias relacionadas ao desenvolvimento
              de sistemas.
            </p>
          </div>

          <ul className="stack">
            {tecnologias.map(([nome, papel]) => (
              <li key={nome}>
                <b>{nome}</b>
                <span>{papel}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ÁREAS */}
        <section id="mercado" className="section">
          <div className="section-head">
            <h2>Áreas de atuação</h2>
            <p>
              O conhecimento em desenvolvimento de sistemas pode ser
              utilizado em diferentes áreas da tecnologia.
            </p>
          </div>

          <ul className="areas">
            {areas.map(([nome, texto]) => (
              <li key={nome}>
                <h3>{nome}</h3>
                <p>{texto}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="section">
          <div className="section-head">
            <h2>Projetos</h2>
            <p>
              Durante a formação, diferentes tipos de sistemas podem ser
              desenvolvidos para colocar o conhecimento em prática.
            </p>
          </div>

          <ul className="projects">
            {projetos.map(([nome, texto, tag]) => (
              <li key={nome}>
                <h3>{nome}</h3>
                <p>{texto}</p>
                <span className="tag">{tag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* JORNADA */}
        <section className="section ink">
          <div className="section-head">
            <h2>Uma jornada de aprendizado</h2>
          </div>

          <ol className="timeline">
            {jornada.map(([titulo, texto], i) => (
              <li key={titulo}>
                <span>{i + 1}</span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="section cta">
          <h2>
            Seu futuro na tecnologia
            <br />
            pode começar aqui.
          </h2>
          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas
            e comece a transformar ideias em soluções.
          </p>
          <a href="#inicio" className="button">Voltar ao início</a>
        </section>
      </main>

      <footer>
        <div>
          <b>Técnico em Desenvolvimento de Sistemas</b>
          <span>SENAI</span>
        </div>

        <div>
          <span>© 2026</span>
          <span>
            Desenvolvido por{' '}
            <a href="https://im-dev-apvi.vercel.app/">Igor</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default App