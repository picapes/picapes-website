---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  text: '<span class="hero-badge"><i class="fa-solid fa-circle-check"></i> Works for Cracked & Premium!</span>'
  #name: "PiCapes"
  #text: "Docs"
  name: "Custom Minecraft Capes Made Easy"
  tagline: Flex Capes like never before!
  image:
    src: /assets/homepage/player1.webp
    alt: PiCapes player preview
  actions:
    - theme: brand
      icon: <i class="fa-solid fa-download"></i>
      text: Setup PiCapes
      link: /getting-started/installation
    #- theme: alt
    #  icon: <i class="fas fa-images"></i>
    #  link: https://catalog.picapes.syanic.org/
    #  text: View Capes Gallery
    - theme: alt
      icon: <i class="fas fa-swatchbook"></i>
      text: Visit Catalog Dashboard
      link: 'https://catalog.picapes.syanic.org/'
    - theme: alt
      icon: <i class="fab fa-discord"></i>
      text: Join Discord
      link: https://dsc.gg/picapes

features:
  - icon: <i class="fas fa-layer-group"></i>
    title: Universal Compatibility
    details: PiCapes works on Fabric, and any Client using Optifine! Works with both Cracked and Premium accounts.
  - icon: <i class="fas fa-crown"></i>
    title: Premium Features
    details: Completely free with optional premium features. Enjoy enhanced customization without breaking the bank.
  - icon: <i class="fas fa-headset"></i>
    title: Reliable Support
    details: Get help whenever you need it from our dedicated community and support team.

---

<!-- Theres work needed here -->
<!--
<style>
/* Home Cards */
.home-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;width:100%;margin:48px 0 36px}
.home-card{border:1px solid var(--vp-c-bg-soft);border-radius:12px;background:var(--vp-c-bg-soft);overflow:hidden}
.home-card-image{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--vp-c-bg-alt);border-bottom:1px solid var(--vp-c-bg-soft)}
.home-card-content{padding:24px}
.home-card h2,.home-card h3{margin:0;color:var(--vp-c-text-1);border-bottom:0!important;font-size:1.08rem;line-height:1.4;letter-spacing:0}
.home-card p{margin:8px 0 0;color:var(--vp-c-text-2);font-size:.96rem;line-height:1.65}
@media(max-width:960px){
.home-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:640px){
.home-card-grid{grid-template-columns:1fr;gap:12px;margin:34px 0 26px}
}
</style>
<div class="home-card-grid">
  <div class="home-card">
    <img class="home-card-image" src="https://placehold.co/640x360/png" alt="Placeholder image">
    <div class="home-card-content">
      <h2>Community Capes</h2>
      <p>Browse community-made capes or upload your own designs.</p>
    </div>
  </div>

  <div class="home-card">
    <img class="home-card-image" src="https://placehold.co/640x360/png" alt="Placeholder image">
    <div class="home-card-content">
      <h3>Upload Your Cape</h3>
      <p>Add your own design and use it in game.</p>
    </div>
  </div>

  <div class="home-card">
    <img class="home-card-image" src="https://placehold.co/640x360/png" alt="Placeholder image">
    <div class="home-card-content">
      <h3>Community</h3>
      <p>Join thousands of players on Discord.</p>
    </div>
  </div>
</div>
-->

<ClientOnly>
  <HomeVideoModal />
  <PartnerCarousel />
</ClientOnly>

<style>
/* Distance between text and icon */
.VPHomeHero .actions .VPButton {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Image Deskop Adjustment */
@media (min-width: 960px){
  .VPHomeHero .image{margin:60px auto 0}
}

/* Disable Image Dragging */
.VPHomeHero img {
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none; /* optional */
}

/* Formatting for hero badge */
.hero-badge{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.55rem 1rem;border-radius:999px;background:#7f1d1d;color:#ffd4d4;font-weight:600;font-size:.92rem;line-height:1;white-space:nowrap}
.hero-badge i{font-size:.9rem}
.VPHero .heading{gap:.65rem}
.VPHero .heading .text{order:-1}
</style>
