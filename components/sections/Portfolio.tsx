"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import Image from 'next/image';

const itens = [
  { id: 1, nome: "Encabinamento Trator Valtra", imagem: "/images/trator_amarelo_encabinamento.jpeg" },
  { id: 2, nome: "EncabinamentoTrator Valtra", imagem: "/images/retrovisor_trator.jpeg" },
  { id: 3, nome: "Encabinamento Trator Valtra", imagem: "/images/trator_traseira.jpeg" },
  { id: 4, nome: "Empilhadeira Crown", imagem: "/images/empilhadeira_branca.jpeg" },
  { id: 5, nome: "Encabinamento Rebocador Toyota", imagem: "/images/rebocador_branco.jpeg" },
  { id: 6, nome: "Encabinamento Rebocador Toyota", imagem: "/images/rebocador_branco_2.jpeg" },
  { id: 7, nome: "Corte Drive Empilhadeira Hangcha", imagem: "/images/empilhadeira_corte_drive_verde.jpeg" },
  { id: 8, nome: "Corte Drive Empilhadeira Hangcha", imagem: "/images/empilhadeira_corte_verde_2.jpeg" },
  { id: 9, nome: "Empilhadeira Heli", imagem: "/images/empilhadeira_heli.jpeg" },
  { id: 10, nome: "Empilhadeira Toyota", imagem: "/images/empilhadeira_rodinha_inteira.jpeg" },
  { id: 11, nome: "Empilhadeira Toyota - Rodas Guia", imagem: "/images/empilhadeira_rodinha.jpeg" },
  { id: 12, nome: "Empilhadeira Toyota", imagem: "/images/rebocador.jpeg" },

];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-industrial-escuro py-20 lg:py-28" aria-label="Portfólio de trabalhos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-acento">
            Trabalhos executados
          </p>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Portfólio
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-white/60">
            Uma amostra de projetos realizados para indústrias da região de Campinas.
            Fotos reais sendo adicionadas — contate-nos para ver trabalhos específicos.
          </p>
        </motion.div>

        {/* Grid de trabalhos com as imagens reais */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }} // Delay suave mesmo com 12 itens
              className="group relative aspect-[4/3] rounded-lg bg-industrial border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Renderização da Imagem Real correspondente */}
              <div className="absolute inset-0">
                <Image 
                  src={item.imagem} 
                  alt={item.nome}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Padrão decorativo de fundo */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 8px,
                    rgba(255,107,0,0.3) 8px,
                    rgba(255,107,0,0.3) 9px
                  )`,
                }}
                aria-hidden="true"
              />

              {/* Overlay ao hover */}
              <div className="absolute inset-0 bg-acento/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-2">
                <p
                  className="text-lg font-bold uppercase tracking-tight text-white text-center px-4"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {item.nome}
                </p>
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
                  Industrial
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA portfólio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-white/60 text-sm">
            Quer ver trabalhos específicos por tipo de serviço?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-acento px-6 py-3 text-sm font-bold uppercase tracking-widest text-acento transition-colors hover:bg-acento hover:text-white focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial-escuro"
          >
            Solicitar Portfólio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}