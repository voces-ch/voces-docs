---
layout: empty
---

<script setup>
import { onMounted } from 'vue'

// onMounted ensures this ONLY runs in the browser, never during the Node.js build!
onMounted(() => {
  window.location.replace('./de/intro/about.html')
})
</script>

<div style="padding: 2rem; text-align: center; font-family: sans-serif;">
  <p>Weiterleitung zur Dokumentation...</p>
  <a href="./de/intro/about.html">Falls du nicht automatisch weitergeleitet wirst, klicke hier.</a>
</div>
