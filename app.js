const bookElement=document.getElementById('book');
let pageFlip;
function setupBook(){
  if(!window.St||!window.St.PageFlip){document.getElementById('pageCounter').textContent='Please connect to the internet to load the page-turn effect.';return}
  pageFlip=new St.PageFlip(bookElement,{
    width:420,height:560,size:'stretch',minWidth:280,maxWidth:620,minHeight:380,maxHeight:820,
    drawShadow:true,flippingTime:1000,usePortrait:true,startZIndex:5,autoSize:true,
    maxShadowOpacity:0.42,showCover:true,mobileScrollSupport:false,swipeDistance:30,
    clickEventForward:true,showPageCorners:true,disableFlipByClick:false
  });
  pageFlip.loadFromHTML(document.querySelectorAll('.page'));
  const update=()=>{const current=pageFlip.getCurrentPageIndex()+1;const total=pageFlip.getPageCount();document.getElementById('pageCounter').textContent=`${current} / ${total}`};
  pageFlip.on('flip',update);pageFlip.on('init',update);update();
  document.getElementById('prevBtn').onclick=()=>pageFlip.flipPrev();
  document.getElementById('nextBtn').onclick=()=>pageFlip.flipNext();
}
window.addEventListener('load',setupBook);

const photoInput=document.getElementById('photoFiles');
photoInput.addEventListener('change',()=>{
  const files=[...photoInput.files].filter(f=>f.type.startsWith('image/'));
  if(!files.length)return;
  // Remove previously generated photo pages, keeping the hand-designed story pages.
  document.querySelectorAll('.generated-photo-page').forEach(el=>el.remove());
  const anchor=document.querySelector('.ending-page');
  files.forEach((file,i)=>{
    if(i%2===0){
      const page=document.createElement('div');page.className='page paper generated-photo-page';
      const pair=files.slice(i,i+2);
      page.innerHTML=`<span class="page-label">OUR MEMORIES — ${Math.floor(i/2)+1}</span><div class="page-content"><p class="script-title">A moment with you ♡</p><div class="user-photo-grid"></div><p class="small-note">I wish I could keep this moment forever.</p></div><span class="page-number">${8+Math.floor(i/2)}</span>`;
      const grid=page.querySelector('.user-photo-grid');
      grid.style.cssText='display:grid;grid-template-columns:repeat('+pair.length+',1fr);gap:12px;width:100%;align-items:center';
      pair.forEach(f=>{const frame=document.createElement('div');frame.style.cssText='background:white;padding:8px 8px 24px;box-shadow:0 6px 16px #54352a25;transform:rotate('+(Math.random()*4-2)+'deg)';const img=document.createElement('img');img.src=URL.createObjectURL(f);img.alt='A memory';img.style.cssText='display:block;width:100%;height:230px;object-fit:cover';frame.appendChild(img);grid.appendChild(frame)});
      anchor.parentNode.insertBefore(page,anchor);
    }
  });
  if(pageFlip){pageFlip.destroy();pageFlip=null}
  setupBook();
});

const musicInput=document.getElementById('musicFile');
musicInput.addEventListener('change',()=>{
  const file=musicInput.files[0];if(!file)return;
  const player=document.getElementById('audioPlayer');
  if(player.dataset.objectUrl)URL.revokeObjectURL(player.dataset.objectUrl);
  const url=URL.createObjectURL(file);player.dataset.objectUrl=url;player.src=url;
  document.getElementById('songName').textContent=file.name.replace(/\.[^.]+$/,'');
  document.getElementById('audioHelp').textContent='Your chosen song is ready. Press play ♥';
});
document.getElementById('saveSongLink').addEventListener('click',()=>{
  const value=document.getElementById('songUrl').value.trim();const link=document.getElementById('songLink');
  if(!value){link.hidden=true;return}
  try{const url=new URL(value);if(!['http:','https:'].includes(url.protocol))throw Error();link.href=url.href;link.hidden=false;document.getElementById('audioHelp').textContent='Tap the link to open your song.'}
  catch(e){alert('Please enter a valid https:// song link.')}
});
document.getElementById('soundToggle').addEventListener('click',()=>{
  const audio=document.getElementById('audioPlayer');if(!audio.src){document.getElementById('musicFile').click();return}
  if(audio.paused)audio.play().catch(()=>{});else audio.pause();
});
