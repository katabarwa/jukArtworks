import { createApp } from 'vue'
import App from './App.vue'
import './style.css'



import { inject } from '@vercel/analytics'

inject()

// scripts/generate-image-sitemap.js
import { writeFileSync } from 'fs'
import { rows } from '../src/data/artworks.js'

const SITE_URL = 'https://art.jessekatabarwa.com'

// Strips any HTML (e.g. <a href="...">SSOME.HOW</a>) down to plain text,
// and escapes characters that aren't valid raw inside XML.
function cleanForXml(str = '') {
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Google's image sitemap doesn't index videos - only jpg/png/etc count here.
const imageEntries = rows
  .flatMap(row => row.images)
  .filter(img => img.type !== 'video')
  .map(img => `    <image:image>
      <image:loc>${img.src}</image:loc>
    </image:image>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
${imageEntries}
  </url>
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`Sitemap written with ${rows.flatMap(r => r.images).filter(i => i.type !== 'video').length} images.`)

createApp(App).mount('#app')

