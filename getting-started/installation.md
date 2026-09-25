<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const videoId = computed(() => theme.value.tutorialVideoId)
</script>

# Installation
This would guide you through the installation process of PiCapes.

<div class="install-grid">
  <div class="install-card featured">
    <div class="install-header">
      <div class="install-title">
        <img src="/assets/docs/installation/fabric.png" alt="Fabric">
        <div>
          <h3>Fabric Mod</h3>
          <span class="tag">Recommended</span>
        </div>
      </div>
    </div>
    <p>
      The recommended way to use PiCapes on modern Minecraft versions.
    </p>
    <a href="https://modrinth.com/mod/cape-provider-x/" target="_blank" class="install-btn">
      Download Fabric Mod
    </a>
    <div class="install-meta">
      for Minecraft Fabric 1.21.8 and above
    </div>
  </div>

  <div class="install-card">
    <div class="install-header">
      <div class="install-title">
        <img src="/assets/docs/installation/arcpi.png" alt="ArcPi Proxy">
        <div>
          <h3>ArcPi Proxy</h3>
          <span class="tag secondary">For Other Minecraft Versions</span>
        </div>
      </div>
    </div>
    <p>
      Display PiCapes capes in various Minecraft clients without installing additional mods.
    </p>
    <a href="/other-guides/arcpi-proxy" class="install-btn secondary">
      Setup Proxy
    </a>
    <div class="install-meta warning">
      Animated Capes not supported.
    </div>
  </div>

</div>

After installation, the next step is to [register your Minecraft account](/getting-started/registering-your-account).

PiCapes runs entirely through our Discord bot, so if you're not already in the server, make sure you [join](https://dsc.gg/picapes) before you install. If you need more help, simply watch the tutorial below.

<div class="video-container">
  <iframe
    :src="`https://www.youtube.com/embed/${videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

<style>
.install-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin:32px 0}
.install-card{display:flex;flex-direction:column;padding:24px;border:1px solid var(--vp-c-divider);border-radius:16px;background:var(--vp-c-bg-soft)}
.install-card.featured{border-color:var(--vp-c-brand-1);background:linear-gradient(to bottom,var(--vp-c-bg-soft),rgba(16,185,129,.04))}
.install-header{margin-bottom:16px}
.install-title{display:flex;align-items:center;gap:14px}
.install-title img{width:42px;height:42px;border-radius:10px}
.install-title h3{margin:0;font-size:1.4rem;font-weight:700}
.tag{display:inline-flex;align-items:center;padding:4px 10px;margin-top:6px;border-radius:999px;background:rgba(46,160,67,.15);color:#3fb950;font-size:.75rem;font-weight:600}
.tag.secondary{background:rgba(120,120,120,.15);color:var(--vp-c-text-2)}
.install-card p{margin:0 0 20px;color:var(--vp-c-text-2);line-height:1.7}
.install-btn{display:flex;align-items:center;justify-content:center;height:42px;border-radius:10px;background:var(--vp-c-brand-1);color:#fff!important;text-decoration:none;font-weight:600;transition:.15s}
.install-btn:hover{opacity:.9}
.install-btn.secondary{background:var(--vp-c-default-soft)}
.install-meta{margin-top:14px;font-size:.9rem;color:var(--vp-c-text-2)}
.install-meta.warning{color:#f0883e}
@media(max-width:768px){
  .install-grid{grid-template-columns:1fr}
}
.install-btn{
display:flex;
align-items:center;
justify-content:center;
height:42px;
border-radius:10px;
background:var(--vp-c-brand-1);
color:#fff!important;
text-decoration:none!important;
font-weight:600;
transition:.15s
}
.install-btn:hover,
.install-btn:focus,
.install-btn:active{
text-decoration:none!important;
color:#fff!important
}
</style>
