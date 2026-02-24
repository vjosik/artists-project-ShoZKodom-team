import{a as F,S as ee,R as I,i as v,O as U}from"./assets/vendor-Dr6RkfKe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const te="https://sound-wave.b.goit.study/api",_=1,H=8;F.defaults.baseURL=te;async function N(e,t={},s=""){var r,i;try{return(await F({url:e,method:s,...t})).data}catch(n){const a=((i=(r=n.response)==null?void 0:r.data)==null?void 0:i.message)||n.message;throw new Error(`Failed to load ${e}: ${a}`,{cause:n})}}const L={get:(e,t={})=>N(e,t,"get"),post:(e,t,s={})=>N(e,{...s,data:t},"post")};function se(e=1,t=10){return L.get("/feedbacks",{params:{page:e,limit:t}})}function re(e){return console.log("📤 Sending to backend:",e),L.post("/feedbacks",e)}const y=new ee(".swiper",{loop:!1,navigation:{nextEl:".feedback-btn-next",prevEl:".feedback-btn-prev",disabledClass:"is-disabled"},pagination:{el:".swiper-pagination",clickable:!1,renderBullet:function(e,t){return e<3?`<span class="${t}" data-index="${e}"></span>`:""}},on:{slideChange:function(){const e=document.querySelectorAll(".swiper-pagination-bullet"),t=this.slides.length,s=this.realIndex;e.forEach(r=>r.classList.remove("swiper-pagination-bullet-active")),s===0?e[0].classList.add("swiper-pagination-bullet-active"):s===t-1?e[2].classList.add("swiper-pagination-bullet-active"):e[1].classList.add("swiper-pagination-bullet-active")}}});document.querySelector(".feedback-btn-next");document.querySelector(".feedback-btn-prev");document.querySelector(".swiper-pagination").addEventListener("click",function(e){const t=e.target;if(t.classList.contains("swiper-pagination-bullet")){const s=parseInt(t.getAttribute("data-index")),r=y.slides.length;s===0?y.slideTo(0):s===1?y.slideTo(1):s===2&&y.slideTo(r-1)}});const P=`
<svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#764191"/>
</svg>
`,z=`
<svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="white"/>
</svg>
`,Y=e=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,ie=Y(P),ne=Y(z);function ae(){document.querySelectorAll(".feedback-stars-rating").forEach(t=>{var i;if(t.dataset.ratyInitialized==="true")return;let s=Number(t.dataset.score);Number.isNaN(s)&&(s=0),s=Math.round(s),s=Math.max(0,Math.min(5,s));const r=new I(t,{readOnly:!0,score:s,number:5,halfShow:!1,starType:"img",starOn:ie,starOff:ne,space:!1});(i=r.init)==null||i.call(r),t.dataset.ratyInitialized="true"})}const oe=document.querySelector(".feedback-swiper-wrapper");function le({data:e}){const t=e.map(({name:s,rating:r,descr:i})=>`
        <li class="feedback-swiper-slide swiper-slide">
          <div class="feedback-card">
            <div class="feedback-stars-rating" data-score="${r}">
            </div>
            <p class="feedback-text">
              "${i}"
            </p>
            <p class="feedback-name">${s}</p>
          </div>
        </li>`).join("");oe.innerHTML=t,ae()}function ce(e={name:"Error!",message:"Unknow error"}){v.show({title:e.name,titleColor:"#fff",titleSize:"24px",message:e.message,messageColor:"#fff",messageSize:"18px",backgroundColor:"#764191",position:"bottomRight",theme:"dark",icon:"error-circle.svg",iconText:"",iconColor:"",iconUrl:"../../assets/icons/error-circle.svg",balloon:!1,close:!0,closeOnEscape:!0,closeOnClick:!0,displayMode:2,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"#fff",progressBarEasing:"ease",overlay:!1,overlayClose:!1})}function de({limit:e=8,page:t=1}){return L.get("/artists",{params:{limit:e,page:t}})}function ue(e){return L.get(`/artists/${e}`)}const me='[data-skeleton="true"]';function fe(){return`
    <li class="artist-card artist-card--skeleton" data-skeleton="true">
      <div class="artist-card-img artist-card-img--skeleton sk"></div>

      <div class="artist-card-body">
        <ul class="tag-list" aria-hidden="true">
          <li class="tags tags--skeleton sk"></li>
          <li class="tags tags--skeleton sk"></li>
          <li class="tags tags--skeleton sk"></li>
        </ul>

        <div class="artist-card-name artist-card-name--skeleton sk sk-line sk-w-60"></div>

        <div class="artist-card-desc artist-card-desc--skeleton" aria-hidden="true">
          <div class="sk sk-line sk-w-100"></div>
          <div class="sk sk-line sk-w-90"></div>
        </div>

        <div class="artist-card-link artist-card-link--skeleton sk sk-line sk-w-35" aria-hidden="true"></div>
      </div>
    </li>
  `}function ge(e,{count:t=4,mode:s="replace"}={}){if(!e)return;const r=Array.from({length:t},fe).join("");if(s==="append"){e.insertAdjacentHTML("beforeend",r);return}e.innerHTML=r}function j(e){e&&e.querySelectorAll(me).forEach(t=>t.remove())}let D=1;function pe(){return{page:D,limit:H}}function ve(){D+=1}function be(e=""){return e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join("")}function he(e=""){let t=0;for(let i=0;i<e.length;i++)t=e.charCodeAt(i)+((t<<5)-t);const s=`hsl(${t%360}, 60%, 55%)`,r=`hsl(${(t+60)%360}, 60%, 45%)`;return`linear-gradient(135deg, ${s}, ${r})`}function G({name:e,imageUrl:t,className:s="artist-card-img"}){const r=!!t,i=e??"Artist",n=be(i)||"A",a=he(i),f=r?`<img
        class="${s}"
        src="${t}"
        alt="${i}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />`:"",u=`<div
      class="artist-card-placeholder"
      style="background: ${a}; ${r?"display:none;":"display:flex;"}"
      aria-label="${i}"
    >
      ${n}
    </div>`;return f+u}const A="/artists-project-ShoZKodom-team/assets/sprite-D7egZoH7.svg",M="js-section-loader";function ye(){return`
    <div class="${M}">
      <div class="loader-inner line-scale">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `}function E(e){e&&(e.querySelector(`.${M}`)||e.insertAdjacentHTML("beforeend",ye()))}function C(e){if(!e)return;const t=e.querySelector(`.${M}`);t&&t.remove()}const ke=document.querySelector(".js-artists"),c=document.querySelector(".load-more-btn");function B(e){return e.map(Le).join("")}function Le({_id:e,strArtist:t,strBiographyEN:s,strArtistThumb:r,genres:i}){const n=G({name:t,imageUrl:r});return`<li class="artist-card" data-id="${e}">
  ${n}
  </div>
          <div class="artist-card-body">
            <ul class="tag-list">
              ${i.map(a=>`<li class="tags">${a}</li>`).join("")}
            </ul>
            <h3 class="artist-card-name">${t??"Unknown Artist"}</h3>
            <p class="artist-card-desc">
             ${s??"No biography available"}
            </p>
            <button class="artist-card-link js-learn-more-btn" type="button" data-artist-id="${e}">
              Learn More<svg class="icon icon-play" width="20" height="20">
                <use href="${A}#icon-play"></use>
              </svg>
            </button>
          </div>
        </li>`}async function V(e){const t=document.querySelector(".js-artists");if(!t)return;const s=e.page===_;c&&(c.style.display="none"),c&&c.classList.add("is-hidden"),ge(t,{count:(e==null?void 0:e.limit)??8,mode:s?"replace":"append"});const r=setTimeout(()=>{v.error({title:"Error",message:"Server is not responding. Please try again later.",position:"topRight"})},8e3);try{const n=(await de(e)).artists??[];clearTimeout(r),j(t),s?t.innerHTML=B(n):t.insertAdjacentHTML("beforeend",B(n)),c&&(c.style.display=""),c&&(n.length<e.limit?c.classList.add("is-disabled"):c.classList.remove("is-disabled"))}catch{clearTimeout(r),v.error({title:"Error",message:"Failed to load artists. Please try again later.",position:"topRight"}),setTimeout(()=>{j(t)},8e3)}}ke&&V({limit:H,page:_});c&&c.addEventListener("click",async()=>{if(E(document.body),c.classList.contains("is-disabled")||c.classList.contains("is-disabled"))return;ve();const e=pe();await V(e),C(document.body)});const Se=document.querySelector(".mobil-menu-btn"),we=document.querySelector(".menu-close-btn"),T=document.querySelector(".mobile-menu"),$e=document.querySelectorAll(".menu-item");Se.addEventListener("click",()=>{T.classList.add("is-open")});we.addEventListener("click",()=>{T.classList.remove("is-open")});$e.forEach(e=>{e.addEventListener("click",()=>{T.classList.remove("is-open"),document.body.classList.remove("no-scroll")})});const o={artistList:document.querySelector(".js-artists"),artistModal:document.querySelector(".js-artist-modal")};let g=null;const w=new Map;function Ae(e){return e?(g=U(e,{scrollbars:{autoHide:"scroll",autoHideDelay:300,dragScroll:!0},plugins:{SizeObserverPlugin:!0}}),g):null}function Me(e,t={}){if(!e)return null;if(w.has(e))return w.get(e);const s=U(e,{scrollbars:{autoHide:"scroll",autoHideDelay:300,dragScroll:!0},plugins:{SizeObserverPlugin:!0},...t});return w.set(e,s),s}function K(){g&&g.options({overflow:{x:"hidden",y:"hidden"}})}function S(){g&&g.options({overflow:{x:"hidden",y:"scroll"}})}document.addEventListener("DOMContentLoaded",()=>{Ae(document.body)});function Ee(e,t){t&&(t.innerHTML=`
   
      <h3 class="albums-title">Albums</h3>
      <ul class="albums-list">
        ${e.map(s=>`
          <li class="album">
            <h4 class="album-title" title="${s.strAlbum}">${s.strAlbum}</h4>
            <div class="tracks-scroll">
            <table class="tracks-table">
              <thead>
                <tr>
                  <th scope="col">Track</th>
                  <th scope="col">Time</th>
                  <th scope="col">Link</th>
                </tr>
              </thead>

              <tbody>
                ${s.tracks.map(r=>{const i=Math.floor(r.intDuration/1e3),n=Math.floor(i/60),a=String(i%60).padStart(2,"0"),f=r.movie&&r.movie!=="null"&&r.movie.startsWith("http");return`
                    <tr>
                      <td title="${r.strTrack}">${r.strTrack}</td>
                      <td>${n}:${a}</td>
                      <td>
                        ${f?`
                          <a href="${r.movie}" target="_blank"
                             aria-label="Play ${r.strTrack}">
                            <svg class="play-icon" width="24" height="24">
                              <use href="${A}#icon-youtube"></use>
                            </svg>
                          </a>
                        `:""}
                      </td>
                    </tr>
                  `}).join("")}
              </tbody>
            </table>
            </div>
          </li>
        `).join("")}
      </ul>
    
  `)}function R(e){return!e||e==="0"?null:e}function Ce(e={},t){const s=Array.isArray(e.genres)?e.genres.map(u=>`<li class="genre-item">${u}</li>`).join(""):"",r=R(e.intFormedYear),i=R(e.intDiedYear),n=G({name:e.strArtist,imageUrl:e.strArtistThumb,className:"artist-ill"}),a=`<div class="meta-row">
            <dt>Years active</dt>
            <dd>${r?`${r}-${i??"present"}`:"information missing"}</dd>
          </div>
          <div class="meta-row">
            <dt>Sex</dt>
            <dd>${e.strGender??"Unknown"}</dd>
          </div>

          <div class="meta-row">
            <dt>Members</dt>
            <dd>${e.intMembers??"N/A"}</dd>
          </div>

          <div class="meta-row">
            <dt>Country</dt>
            <dd>${e.strCountry??"Unknown"}</dd>
          </div>`,f=`<div class="artist-modal-content js-modal-scroll" data-artist-id="${e._id}">
    <button
      class="modal-btn-close js-modal-btn-close"
      type="button"
      aria-label="Close artist modal"
    >
      <svg class="btn-close-icon" width="32" height="32">
        <use href="${A}#icon-x"></use>
      </svg>
    </button>
    <h2 class="artist-title" id="artist-title">${e.strArtist??"Unknown Artist"}</h2>
    <div class="artist-wrapper">
     <div class="artist-ill-wrapper">
       ${n}
      </div>

      <div class="artist-info-wrapper">
        <dl class="meta"> 
        ${a}
        </dl>
        <div class="biography">
          <h3 class="biography-caption">Biography</h3>
           <div class="biography-descr-wrapper">
          <p class="biography-descr">
            ${e.strBiographyEN??"No biography available"}
          </p>
          </div>
        </div>

        <ul class="genres-list">
          ${s}
        </ul>
      </div>
    </div>
     <section class="albums js-albums"></section>
     </div>
    `;t.innerHTML=f}o.artistList.addEventListener("click",Oe);o.artistModal.addEventListener("click",xe);o.artistModal.addEventListener("cancel",qe);const Te=300;let $=!1;async function Oe(e){const t=e.target.closest(".js-learn-more-btn");if(!t||$)return;const{artistId:s}=t.dataset;if(s){o.artistModal.classList.remove("closing");try{let f=function(){O(),a.removeEventListener("click",f)};$=!0,E(document.body);const r=await ue(s);Ce(r,o.artistModal);const i=o.artistModal.querySelector(".js-albums");if(r.tracksList&&i){const u={};r.tracksList.forEach(h=>{const p=h.strAlbum??"Unknown Album";u[p]||(u[p]=[]),u[p].push(h)});const X=Object.entries(u).map(([h,p])=>({strAlbum:h,tracks:p}));Ee(X,i)}o.artistModal.showModal(),K(),o.artistModal.querySelectorAll(".js-modal-scroll, .biography-descr-wrapper, .tracks-scroll").forEach(u=>Me(u,{overflow:{x:"hidden",y:"scroll"}}));const a=o.artistModal.querySelector(".js-modal-btn-close");if(!a)return;a.addEventListener("click",f)}catch(r){console.error(r.message)}finally{C(document.body),$=!1}}}function xe(e){const t=e.target.closest(".js-modal-btn-close"),s=e.target===o.artistModal;!t&&!s||O()}function qe(e){e.preventDefault(),O()}function O(){o.artistModal.classList.contains("closing")||(o.artistModal.classList.add("closing"),setTimeout(()=>{o.artistModal.close(),o.artistModal.classList.remove("closing"),S()},Te))}const m=document.querySelector(".feedback-modal"),Ne=document.querySelector(".btn-feedbaks"),d=document.querySelector(".feedback-form"),x="feedback-draft",je=document.querySelector(".feedback-submit");let l,k=!1;const Be=300;Ne.addEventListener("click",()=>{m.classList.remove("closing"),m.showModal(),K(),Ie(),_e(),b()});m.addEventListener("click",e=>{const t=e.target.closest(".js-close-btn"),s=e.target===m;!t&&!s||(q(),S())});m.addEventListener("cancel",e=>{e.preventDefault(),q(),S()});function q(){m.classList.contains("closing")||(m.classList.add("closing"),setTimeout(()=>{m.close(),m.classList.remove("closing")},Be))}const Z=e=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,Re=Z(P),Fe=Z(z);function Ie(){const e=document.querySelector(".rating-star");e&&(e.dataset.ratyInitialized||(e.dataset.ratyInitialized="true",l=new I(e,{readOnly:!1,score:0,number:5,half:!1,starType:"img",starOn:Re,starOff:Fe,space:!1,click:()=>J()}),l.init()))}d.addEventListener("submit",Ue);d.addEventListener("input",J);d.addEventListener("input",b);b();d.elements.name.addEventListener("blur",Pe);d.elements.message.addEventListener("blur",ze);async function Ue(e){if(e.preventDefault(),k)return;const t=e.target.elements.name.value.trim(),s=e.target.elements.message.value.trim(),r=(l==null?void 0:l.score())??0,i={name:t,descr:s,rating:r};try{k=!0,b(),E(document.body),await re(i),e.target.reset(),l==null||l.score(0),He(),v.success({title:"Success",message:"Thanks for your feedback!",position:"topRight"}),q(),S()}catch(n){console.log(n),v.error({title:"Error",message:"Failed to send feedback. Please try again.",position:"topRight"})}finally{k=!1,C(document.body),b()}}function J(){const e={name:d.elements.name.value,message:d.elements.message.value,rating:(l==null?void 0:l.score())??0};localStorage.setItem(x,JSON.stringify(e))}function _e(){const e=JSON.parse(localStorage.getItem(x)||"null");e&&(d.elements.name.value=e.name??"",d.elements.message.value=e.message??"",l==null||l.score(e.rating??0))}function He(){localStorage.removeItem(x)}function Pe(){const e=d.elements.name,t=e.value.trim();Q(e),t.length<3&&W(e,"Name must be at least 3 characters")}function ze(){const e=d.elements.message,t=e.value.trim();Q(e),t.length<10&&W(e,"Message must be at least 10 characters")}function W(e,t){e.classList.add("input-error");const s=document.createElement("p");s.className="error-text",s.textContent=t,e.parentElement.appendChild(s)}function Q(e){e.classList.remove("input-error");const t=e.parentElement.querySelector(".error-text");t&&t.remove()}function b(){const e=d.elements.name.value.trim(),t=d.elements.message.value.trim(),s=e.length>=3&&t.length>=10&&!k;je.disabled=!s}se().then(le).catch(ce);
//# sourceMappingURL=index.js.map
