import axios from 'axios';

import { ProxyAgent } from 'proxy-agent';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// css 原子配置
export default defineConfig({
  rules: [['bg-primary', { 'background-color': 'var(--ep-color-primary)' }]],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      // #issues [unocss] Failed to fetch web fonts
      customFetch: (url: string) =>
        axios
          .get(url, { httpsAgent: new ProxyAgent('https://localhost:7890') })
          .then(it => it.data),
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    // @apply
    transformerDirectives(),
    // 拆解一些特性
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
