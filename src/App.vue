<!-- App.vue -->
<script setup>
import ImageRow from './components/ImageRow.vue'
import Widget from './components/Widget.vue';


const rows = [
  {
    // Row with a local asset + a Cloudflare R2 asset mixed together
    images: 
    [{ src: 
      'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/Jesse%20Katabarwa_1.jpg', 
       width: '1fr' }],
    title: `2025 ﹅ The Grey Rings of My Eyes`,
    location: 'SSOME.HOW',
    details: `
The Grey Rings of My Eyes presentation is an attempt to reappropriate digital systems as a way to understand their humanity/de-humanity. 
 Offering a narrative exploring the relational dynamics of such technology within our public and personal life. The internet as a "public" square but
  also as an intimate nest. Navigating the structural powers threatening and blurring what is public and private. 
`,
    backgroundColor: 'var(--bg)',

  },
  {

images: 
[{ src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/Jesse%20Katabarwa_3.jpg', 
   width: '1fr' },
   { src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/Jesse%20Katabarwa_2.jpg', 
   width: '2fr' },
   
  ],
title: `2025 ﹅ The Grey Rings of My Eyes, mixed media installation, printed matter, transparent film`,
location: 'SSOME.HOW',
details: `Emergence is the process and relationship between smaller components interacting with each other to create a larger phenomenon that the isolated parts can't by 
themselves. That concept can be found in many instances in nature. This is echoed accross the space, with printed matter, installations, and mixed media artworks.`,
backgroundColor: 'var(--reversebg)',

},
{
    // Row with all Cloudflare R2 assets
    images:    
     [         
        { src: 
      'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/diasphora.png', 
       width: '2.2fr' },

      { src: 
      'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/V_invite_ssome.how8.jpg', 
       width: '1fr' },

  
      
      ],
    title: '2016 ﹅ Diasphora',
    location: 'Romance in Diaspora for Atelier Celadon',
    details: `diasphora (adj.) - diaspora + dysphoria   ⋆ ⊹ ⋆ ⊹
The unease or feeling of having no sense of home; forever displaced, forever the other, without any sense of self; a blurred identity, 
a dismantling of the body. (2016) Text co-written with exhibtion curator Viola Chen` ,

    backgroundColor: 'var(--bg)',

  },

  {
    // Row with all Cloudflare R2 assets
    images:    
     [         
        { src: 
      'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/IMG_6471_fixed.mp4', 
       width: '1fr', type:'video' },

  
      
      ],
    title: `2025 ﹅ The Grey Rings of My Eyes`,
    location: 'SSOME.HOW',
    details: `The Grey Rings of My Eyes presentation is an attempt to reappropriate digital systems as a way to understand their humanity/de-humanity. 
 Offering a narrative exploring the relational dynamics of such technology within our public and personal life. The internet as a "public" square but
  also as an intimate nest. Navigating the structural powers threatening and blurring what is public and private. `,
    backgroundColor: 'var(--reversebg)',

  },
  {

images: 
[

  //   { src: 
  // 'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/653634.jpg', 
  //  width: '200px' },



   { src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/IMG_6449_c.jpg', 
   width: '0.5fr' },  
   
   { src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/ssh3.1.jpg', 
   width: '1fr' },
  //  { src: 
  //     'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/ssh4.png', 
  //      width: '1fr' },
       { src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/ssh34.png', 
   width: '1fr' },
   
  ],
title: `Left: 36" by 36" High Saturation Color Ink on Archival Exhibition Paper. Right: Concept Glass & Moss Tables` ,
location: 'SSOME.HOW',
details: `Emergence is the process and relationship between smaller components interacting with each other to create a larger phenomenon that the isolated parts can't by 
themselves. That concept can be found in many instances in nature. This is echoed accross the space, within printed matter, installations, and mixed media artworks.`,
backgroundColor: 'var(--bg)',

},
  {

images: 
[
   { src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/34141.jpg', 
   width: '1fr' },
   { src: 
      'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/IMG_6463.jpg', 
       width: '1fr' },
       { src: 
  'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/SSH_behindglass_fixed.mp4',
   width: '1fr' , type:'video'},
   
  ],
title: `2025 ﹅ The Grey Rings of My Eyes`,
location: 'SSOME.HOW',
details: `The Grey Rings of My Eyes presentation is an attempt to reappropriate digital systems as a way to understand their humanity/de-humanity. 
 Offering a narrative exploring the relational dynamics of such technology within our public and personal life. The internet as a "public" square but
  also as an intimate nest. Navigating the structural powers threatening and blurring what is public and private.  ⋆ ⊹ ⋆ ⊹ Emergence is the process and relationship between smaller components interacting with each other to create a larger phenomenon that the isolated parts can't by 
themselves. That concept can be found in many instances in nature. This is echoed accross the space, within printed matter, installations, and mixed media artworks.`,
backgroundColor: 'var(--reversebg)',

},


  
//   {

// images: 
// [
//    { src: 
//   'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/65363.jpg', 
//    width: '1fr' },
//    { src: 
//       'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/8356.jpg', 
//        width: '1fr' },

//        { src: 
//       'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/ssh4.png', 
//        width: '1fr' },
//        { src: 
//   'https://pub-6052c7e633eb41b588583096f731cf26.r2.dev/87643.jpg', 
//    width: '1fr' },
   
//   ],
// title: 'Concept Glass & Moss Tables',
// location: 'SSOME.HOW',
// details: `Emergence is the process and relationship between smaller components interacting with each other to create a larger phenomenon that the isolated parts can't by 
// themselves. That concept can be found in many instances in nature. This is also echoed accross the space, within printed matter, installations, and mixed media art works.`,
// backgroundColor: 'var(--bg)',

// },




]
 
</script>

<template>
  <header>

<div class="header-container">
      <div class="left">
            <Widget

            />
      </div>
      <div class="right">
            <ImageRow
                v-for="(row, index) in rows"
                :key="index"
                :images="row.images"
                :title="row.title"
                :location="row.location"
                :details="row.details"
                :background-color="row.backgroundColor"
                :margin="row.margin"
                :padding="row.padding"
            />
      </div>
</div>


  </header>

  <main></main>
  <footer></footer>
</template>

<style scoped>
.left {
  background-color: var(--accent-bg);
  width: 100%;

  overflow: hidden;
  position: sticky;
  top: 0;
  align-self: flex-start; 
}


.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.right .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
header {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>