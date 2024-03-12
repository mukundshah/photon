import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


export default defineConfig({
  title: "Photon",
  description: "High-performance, cross-platform Rust/WebAssembly image processing library",
  themeConfig: {

    sidebar: generateSidebar({
      documentRootPath: '/',
      hyphenToSpace: true,
      capitalizeFirst: true,
      useTitleFromFrontmatter: false,

      // ecludes
      excludeFiles: ['README.md'],
      excludeFolders: ['node_modules']
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/silvia-odwyer/photon' },
    ]
  }
})
