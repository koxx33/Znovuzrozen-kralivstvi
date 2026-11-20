// Znovuzrození království – service worker (offline + aktualizace jen po potvrzení)
const VERSION='0.8.0';
const CACHE='znovuzrozeni-kralovstvi-'+VERSION;
const FONTS='znovuzrozeni-kralovstvi-fonty';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>fetch(new Request(f,{cache:'reload'})).then(r=>{if(r.ok)return c.put(f,r);}).catch(()=>{})))));
 // nová verze čeká, dokud hráč v aplikaci neklepne na „Aktualizovat“
});
self.addEventListener('message',e=>{if(e.data==='SKIP')self.skipWaiting();});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('kraluv-odkaz-')||k.startsWith('znovuzrozeni-kralovstvi-'))&&k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);if(e.request.method!=='GET')return;
 // písmo Bangers z Google Fonts – po prvním načtení funguje i offline
 if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
  e.respondWith(caches.open(FONTS).then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok||n.type==='opaque')c.put(e.request,n.clone());return n;}).catch(()=>Response.error()))));return;}
 if(u.origin!==location.origin||u.pathname.endsWith('version.json'))return;
 e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).catch(()=>e.request.mode==='navigate'?c.match('./index.html'):Response.error()))));
});
