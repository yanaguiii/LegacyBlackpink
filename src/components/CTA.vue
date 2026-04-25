<template>
  <section class="bp-contact" id="contato">
    <Eyebrow v-reveal>Entre em contato</Eyebrow>
    <h2 v-reveal="80" class="bp-contact__t">Shows completos, parcerias e performances personalizadas.</h2>
    <p v-reveal="180" class="bp-contact__b">Converse com a gente pelo canal que preferir. Respondemos em até 24h.</p>

    <div v-reveal="280" class="bp-contact__grid">
      <a
        class="bp-contact__card"
        href="https://wa.me/5521966997227?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20show%20do%20BLACKPINK."
        target="_blank"
        rel="noopener"
      >
        <span class="bp-contact__mark">◆</span>
        <span class="bp-contact__label">— whatsapp</span>
        <span class="bp-contact__value">Fale direto conosco</span>
        <span class="bp-contact__cta">Abrir conversa →</span>
      </a>

      <a
        class="bp-contact__card"
        href="https://www.instagram.com/legacyblackpink.cover/"
        target="_blank"
        rel="noopener"
      >
        <span class="bp-contact__mark">◆</span>
        <span class="bp-contact__label">— instagram</span>
        <span class="bp-contact__value">@legacyblackpink.cover</span>
        <span class="bp-contact__cta">Seguir no Instagram →</span>
      </a>

      <a
        class="bp-contact__card"
        href="mailto:legacyblackpinkcover@gmail.com?subject=Agendamento%20de%20show&body=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20show%20do%20BLACKPINK."
        target="_blank"
        rel="noopener"
      >
        <span class="bp-contact__mark">◆</span>
        <span class="bp-contact__label">— email</span>
        <span class="bp-contact__value">legacyblackpinkcover@gmail.com</span>
        <span class="bp-contact__cta">Enviar email →</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
</script>

<style scoped>
.bp-contact {
  padding: 120px 48px;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--hairline);
}
.bp-contact__t {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(36px, 4.4vw, 52px);
  letter-spacing: -0.02em;
  color: var(--legacy-pearl);
  margin: 0;
  line-height: 1.08;
  max-width: 780px;
}
.bp-contact__b {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--fg2);
  margin: 0;
  font-style: italic;
}
.bp-contact__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 32px;
}
.bp-contact__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 28px 24px 24px;
  text-align: left;
  text-decoration: none;
  border-radius: 14px;
  box-shadow: inset 0 0 0 1px rgba(244, 166, 189, 0.22);
  background: linear-gradient(180deg, rgba(244, 166, 189, 0.04), rgba(244, 166, 189, 0));
  color: var(--legacy-pearl);
  transition: transform 320ms var(--ease-stage), box-shadow 320ms var(--ease-stage), background 320ms var(--ease-stage);
}
.bp-contact__card:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 0 0 1px rgba(244, 166, 189, 0.55);
  background: linear-gradient(180deg, rgba(244, 166, 189, 0.08), rgba(244, 166, 189, 0.01));
}
.bp-contact__card--muted {
  opacity: 0.55;
  cursor: default;
}
.bp-contact__card--muted:hover {
  transform: none;
  box-shadow: inset 0 0 0 1px rgba(244, 166, 189, 0.22);
  background: linear-gradient(180deg, rgba(244, 166, 189, 0.04), rgba(244, 166, 189, 0));
}
.bp-contact__mark {
  color: var(--legacy-pink);
  font-size: 18px;
  line-height: 1;
}
.bp-contact__label {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: lowercase;
  color: var(--fg3);
}
.bp-contact__value {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: var(--legacy-pearl);
}
.bp-contact__cta {
  margin-top: 6px;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 15px;
  color: var(--fg2);
}

@media (max-width: 900px) {
  .bp-contact { padding: 96px 24px; }
  .bp-contact__grid { grid-template-columns: 1fr; }
}
</style>
