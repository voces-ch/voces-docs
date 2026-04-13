<template>
  <div class="playground-container">
    <div class="editor-pane">
      <div class="controls">
        <div class="control-group">
          <label for="theme-select">{{ dict[config.locale].themeLabel }}</label>
          <select id="theme-select" v-model="config.theme">
            <option value="minimal">Minimal</option>
            <option value="card">Card</option>
            <option value="impact">Impact</option>
            <option value="neon">Neon</option>
          </select>
        </div>

        <div class="control-group">
          <label for="lang-select">{{
            dict[config.locale].languageLabel
          }}</label>
          <select id="lang-select" v-model="config.locale">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
          </select>
        </div>
      </div>

      <div class="code-block-wrapper">
        <pre><code class="language-html">{{ generatedCode }}</code></pre>
      </div>
    </div>

    <div class="preview-pane">
      <div class="preview-header">{{ dict[config.locale].previewHeader }}</div>
      <div class="preview-content">
        <div id="voces-campaign-widget-preview"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch, nextTick } from "vue";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const dict = {
  en: {
    themeLabel: "Theme",
    languageLabel: "Language",
    previewHeader: "Live Preview",
  },
  de: {
    themeLabel: "Design",
    languageLabel: "Sprache",
    previewHeader: "Live-Vorschau",
  },
  fr: {
    themeLabel: "Thème",
    languageLabel: "Langue",
    previewHeader: "Aperçu en direct",
  },
  it: {
    themeLabel: "Tema",
    languageLabel: "Lingua",
    previewHeader: "Anteprima dal vivo",
  },
};

const scriptUrl =
  "https://cdn.jsdelivr.net/gh/voces-ch/voces-widget@cdn/1.0.0/voces-widget.js";

// Reactive configuration
const config = reactive({
  campaignUuid: "c7439b13-cabe-4daf-8f21-1f1b2980edd6",
  target: "#voces-campaign-widget-preview",
  theme: "minimal",
  locale: props.locale,
  apiBaseUrl: "https://demo.voces.ch/api/v1",
});

// Dynamically generate the snippet to display to the user
const generatedCode = computed(() => {
  return `<div id="voces-campaign-widget"></div>

<script src="${scriptUrl}"><\/script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    window.voces.widget({
        campaignUuid: '${config.campaignUuid}',
        target: '#voces-campaign-widget',
        theme: '${config.theme}',
        locale: '${config.locale}',
        apiUrl: "${config.apiUrl}",
    });
  });
<\/script>`;
});

// Function to safely mount or remount the widget
const mountWidget = () => {
  // Instead of selecting the widget, select its parent wrapper
  const previewContent = document.querySelector(".preview-content");

  if (previewContent) {
    // Completely destroy the old host element and create a brand new one.
    // This destroys the old Shadow DOM completely.
    previewContent.innerHTML = '<div id="voces-campaign-widget-preview"></div>';
  }

  if (window.voces && window.voces.widget) {
    window.voces.widget({ ...config });
  } else {
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.onload = () => {
      window.voces.widget({ ...config });
    };
    document.head.appendChild(script);
  }
};

// Initial mount
onMounted(() => {
  mountWidget();
});

// Watch for changes and re-render
watch(
  () => [config.theme, config.locale],
  async () => {
    await nextTick();
    mountWidget();
  },
);
</script>

<style scoped>
.playground-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

@media (min-width: 1120px) {
  .playground-container {
    flex-direction: row;
  }
}

.editor-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.control-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.control-group select {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.code-block-wrapper pre {
  margin: 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9em;
  border: 1px solid var(--vp-c-divider);
}

.code-block-wrapper pre code {
  display: block;
  width: 0;
}

.preview-pane {
  flex: 1;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
}

.preview-header {
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.preview-content {
  padding: 1.5rem;
  flex-grow: 1;
  background-color: #ffffff; /* Typically better to test embeds on a neutral white background unless dark mode is enforced */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
