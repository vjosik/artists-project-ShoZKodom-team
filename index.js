import{a as U,S as te,R as _,i as b,O as H}from"./assets/vendor-Dr6RkfKe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const se="https://sound-wave.b.goit.study/api",P=1,z=8;U.defaults.baseURL=se;async function B(e,t={},s=""){var r,i;try{return(await U({url:e,method:s,...t})).data}catch(a){const n=((i=(r=a.response)==null?void 0:r.data)==null?void 0:i.message)||a.message;throw new Error(`Failed to load ${e}: ${n}`,{cause:a})}}const w={get:(e,t={})=>B(e,t,"get"),post:(e,t,s={})=>B(e,{...s,data:t},"post")};function re(e=1,t=10){return w.get("/feedbacks",{params:{page:e,limit:t}})}function ie(e){return console.log("📤 Sending to backend:",e),w.post("/feedbacks",e)}const k=new te(".swiper",{loop:!1,navigation:{nextEl:".feedback-btn-next",prevEl:".feedback-btn-prev",disabledClass:"is-disabled"},pagination:{el:".swiper-pagination",clickable:!1,renderBullet:function(e,t){return e<3?`<span class="${t}" data-index="${e}"></span>`:""}},on:{slideChange:function(){const e=document.querySelectorAll(".swiper-pagination-bullet"),t=this.slides.length,s=this.realIndex;e.forEach(r=>r.classList.remove("swiper-pagination-bullet-active")),s===0?e[0].classList.add("swiper-pagination-bullet-active"):s===t-1?e[2].classList.add("swiper-pagination-bullet-active"):e[1].classList.add("swiper-pagination-bullet-active")}}});document.querySelector(".feedback-btn-next");document.querySelector(".feedback-btn-prev");document.querySelector(".swiper-pagination").addEventListener("click",function(e){const t=e.target;if(t.classList.contains("swiper-pagination-bullet")){const s=parseInt(t.getAttribute("data-index")),r=k.slides.length;s===0?k.slideTo(0):s===1?k.slideTo(1):s===2&&k.slideTo(r-1)}});const Y=`
<svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#764191"/>
</svg>
`,D=`
<svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="white"/>
</svg>
`,G=e=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,ae=G(Y),ne=G(D);function oe(){document.querySelectorAll(".feedback-stars-rating").forEach(t=>{var i;if(t.dataset.ratyInitialized==="true")return;let s=Number(t.dataset.score);Number.isNaN(s)&&(s=0),s=Math.round(s),s=Math.max(0,Math.min(5,s));const r=new _(t,{readOnly:!0,score:s,number:5,halfShow:!1,starType:"img",starOn:ae,starOff:ne,space:!1});(i=r.init)==null||i.call(r),t.dataset.ratyInitialized="true"})}const le=document.querySelector(".feedback-swiper-wrapper");function ce({data:e}){const t=e.map(({name:s,rating:r,descr:i})=>`
        <li class="feedback-swiper-slide swiper-slide">
          <div class="feedback-card">
            <div class="feedback-stars-rating" data-score="${r}">
            </div>
            <p class="feedback-text">
              "${i}"
            </p>
            <p class="feedback-name">${s}</p>
          </div>
        </li>`).join("");le.innerHTML=t,oe()}function de(e={name:"Error!",message:"Unknow error"}){b.show({title:e.name,titleColor:"#fff",titleSize:"24px",message:e.message,messageColor:"#fff",messageSize:"18px",backgroundColor:"#764191",position:"bottomRight",theme:"dark",icon:"error-circle.svg",iconText:"",iconColor:"",iconUrl:"../../assets/icons/error-circle.svg",balloon:!1,close:!0,closeOnEscape:!0,closeOnClick:!0,displayMode:2,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"#fff",progressBarEasing:"ease",overlay:!1,overlayClose:!1})}function ue({limit:e=8,page:t=1}){return w.get("/artists",{params:{limit:e,page:t}})}function me(e){return w.get(`/artists/${e}`)}const fe='[data-skeleton="true"]';function ge(){return`
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
  `}function pe(e,{count:t=4,mode:s="replace"}={}){if(!e)return;const r=Array.from({length:t},ge).join("");if(s==="append"){e.insertAdjacentHTML("beforeend",r);return}e.innerHTML=r}function R(e){e&&e.querySelectorAll(fe).forEach(t=>t.remove())}let V=1;function ve(){return{page:V,limit:z}}function be(){V+=1}function he(e=""){return e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join("")}function ye(e=""){let t=0;for(let i=0;i<e.length;i++)t=e.charCodeAt(i)+((t<<5)-t);const s=`hsl(${t%360}, 60%, 55%)`,r=`hsl(${(t+60)%360}, 60%, 45%)`;return`linear-gradient(135deg, ${s}, ${r})`}function K({name:e,imageUrl:t,className:s="artist-card-img"}){const r=!!t,i=e??"Artist",a=he(i)||"A",n=ye(i),f=r?`<img
        class="${s}"
        src="${t}"
        alt="${i}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />`:"",u=`<div
      class="artist-card-placeholder"
      style="background: ${n}; ${r?"display:none;":"display:flex;"}"
      aria-label="${i}"
      role="region"
    >
      ${a}
    </div>`;return f+u}const M="/artists-project-ShoZKodom-team/assets/sprite-D7egZoH7.svg",E="js-section-loader";function ke(){return`
    <div class="${E}">
      <div class="loader-inner line-scale">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `}function C(e){e&&(e.querySelector(`.${E}`)||e.insertAdjacentHTML("beforeend",ke()))}function T(e){if(!e)return;const t=e.querySelector(`.${E}`);t&&t.remove()}const Le=document.querySelector(".js-artists"),o=document.querySelector(".load-more-btn");let L=!1;function F(e){return e.map(Se).join("")}function Se({_id:e,strArtist:t,strBiographyEN:s,strArtistThumb:r,genres:i}){const a=K({name:t,imageUrl:r});return`<li class="artist-card" data-id="${e}">
  ${a}
  </div>
          <div class="artist-card-body">
            <ul class="tag-list">
              ${i.map(n=>`<li class="tags">${n}</li>`).join("")}
            </ul>
            <h3 class="artist-card-name">${t??"Unknown Artist"}</h3>
            <p class="artist-card-desc">
             ${s??"No biography available"}
            </p>
            <button class="artist-card-link js-learn-more-btn" type="button" data-artist-id="${e}">
              Learn More<svg class="icon icon-play" width="20" height="20">
                <use href="${M}#icon-play"></use>
              </svg>
            </button>
          </div>
        </li>`}async function Z(e){const t=document.querySelector(".js-artists");if(!t||L)return;L=!0;const s=e.page===P;o&&(o.style.display="none"),o&&o.classList.add("is-hidden"),pe(t,{count:(e==null?void 0:e.limit)??8,mode:s?"replace":"append"});const r=setTimeout(()=>{b.error({title:"Error",message:"Server is not responding. Please try again later.",position:"topRight"})},8e3);try{const a=(await ue(e)).artists??[];clearTimeout(r),R(t),s?t.innerHTML=F(a):t.insertAdjacentHTML("beforeend",F(a)),o&&(o.style.display="",o.classList.remove("is-hidden")),o&&(a.length<e.limit?o.classList.add("is-disabled"):o.classList.remove("is-disabled"))}catch{clearTimeout(r),b.error({title:"Error",message:"Failed to load artists. Please try again later.",position:"topRight"}),R(t),o&&(o.style.display="",o.classList.remove("is-hidden"))}finally{L=!1}}Le&&Z({limit:z,page:P});o&&o.addEventListener("click",async()=>{if(L||o.classList.contains("is-disabled"))return;be();const e=ve();C(document.body);try{await Z(e)}finally{T(document.body)}});let g=null;const A=new Map;function we(e){return e?(g=H(e,{overflow:{x:"hidden",y:"scroll"},scrollbars:{autoHide:"scroll",autoHideDelay:300,dragScroll:!0},plugins:{SizeObserverPlugin:!0}}),g):null}function Ae(e,t={}){if(!e)return null;if(A.has(e))return A.get(e);const s=H(e,{scrollbars:{autoHide:"scroll",autoHideDelay:300,dragScroll:!0},plugins:{SizeObserverPlugin:!0},...t});return A.set(e,s),s}function O(){g&&g.options({overflow:{x:"hidden",y:"hidden"}})}function p(){g&&g.options({overflow:{x:"hidden",y:"scroll"}})}document.addEventListener("DOMContentLoaded",()=>{we(document.body)});const $e=document.querySelector(".mobil-menu-btn"),Me=document.querySelector(".mm-close-btn"),x=document.querySelector(".mobile-menu"),Ee=document.querySelectorAll(".menu-item");$e.addEventListener("click",()=>{x.classList.add("is-open"),document.body.classList.add("no-scroll"),O()});Me.addEventListener("click",()=>{x.classList.remove("is-open"),p()});Ee.forEach(e=>{e.addEventListener("click",()=>{x.classList.remove("is-open"),p()})});const l={artistList:document.querySelector(".js-artists"),artistModal:document.querySelector(".js-artist-modal")};function Ce(e,t){t&&(t.innerHTML=`
   
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
                ${s.tracks.map(r=>{const i=Math.floor(r.intDuration/1e3),a=Math.floor(i/60),n=String(i%60).padStart(2,"0"),f=r.movie&&r.movie!=="null"&&r.movie.startsWith("http");return`
                    <tr>
                      <td title="${r.strTrack}">${r.strTrack}</td>
                      <td>${a}:${n}</td>
                      <td>
                        ${f?`
                          <a href="${r.movie}" target="_blank"
                             aria-label="Play ${r.strTrack}">
                            <svg class="play-icon" width="24" height="24">
                              <use href="${M}#icon-youtube"></use>
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
    
  `)}function I(e){return!e||e==="0"?null:e}function Te(e={},t){const s=Array.isArray(e.genres)?e.genres.map(u=>`<li class="genre-item">${u}</li>`).join(""):"",r=I(e.intFormedYear),i=I(e.intDiedYear),a=K({name:e.strArtist,imageUrl:e.strArtistThumb,className:"artist-ill"}),n=`<div class="meta-row">
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
        <use href="${M}#icon-x"></use>
      </svg>
    </button>
    <h2 class="artist-title" id="artist-title">${e.strArtist??"Unknown Artist"}</h2>
    <div class="artist-wrapper">
     <div class="artist-ill-wrapper">
       ${a}
      </div>

      <div class="artist-info-wrapper">
        <dl class="meta"> 
        ${n}
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
    `;t.innerHTML=f}l.artistList.addEventListener("click",xe);l.artistModal.addEventListener("click",qe);l.artistModal.addEventListener("cancel",Ne);const Oe=300;let $=!1;async function xe(e){const t=e.target.closest(".js-learn-more-btn");if(!t||$)return;const{artistId:s}=t.dataset;if(s){l.artistModal.classList.remove("closing");try{let f=function(){q(),n.removeEventListener("click",f)};$=!0,C(document.body);const r=await me(s);Te(r,l.artistModal);const i=l.artistModal.querySelector(".js-albums");if(r.tracksList&&i){const u={};r.tracksList.forEach(y=>{const v=y.strAlbum??"Unknown Album";u[v]||(u[v]=[]),u[v].push(y)});const ee=Object.entries(u).map(([y,v])=>({strAlbum:y,tracks:v}));Ce(ee,i)}l.artistModal.setAttribute("aria-label",r.strArtist??"Unknown Artist"),l.artistModal.showModal(),O(),l.artistModal.querySelectorAll(".js-modal-scroll, .biography-descr-wrapper, .tracks-scroll").forEach(u=>Ae(u,{overflow:{x:"hidden",y:"scroll"}}));const n=l.artistModal.querySelector(".js-modal-btn-close");if(!n)return;n.addEventListener("click",f)}catch(r){console.error(r.message)}finally{T(document.body),$=!1}}}function qe(e){const t=e.target.closest(".js-modal-btn-close"),s=e.target===l.artistModal;!t&&!s||q()}function Ne(e){e.preventDefault(),q()}function q(){l.artistModal.classList.contains("closing")||(l.artistModal.classList.add("closing"),setTimeout(()=>{l.artistModal.close(),l.artistModal.classList.remove("closing"),p()},Oe))}const m=document.querySelector(".feedback-modal"),je=document.querySelector(".btn-feedbaks"),d=document.querySelector(".feedback-form"),N="feedback-draft",Be=document.querySelector(".feedback-submit");let c,S=!1;const Re=300;je.addEventListener("click",()=>{m.classList.remove("closing"),m.showModal(),O(),Ue(),He(),h()});m.addEventListener("click",e=>{const t=e.target.closest(".js-close-btn"),s=e.target===m;!t&&!s||(j(),p())});m.addEventListener("cancel",e=>{e.preventDefault(),j(),p()});function j(){m.classList.contains("closing")||(m.classList.add("closing"),setTimeout(()=>{m.close(),m.classList.remove("closing")},Re))}const J=e=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,Fe=J(Y),Ie=J(D);function Ue(){const e=document.querySelector(".rating-star");e&&(e.dataset.ratyInitialized||(e.dataset.ratyInitialized="true",c=new _(e,{readOnly:!1,score:0,number:5,half:!1,starType:"img",starOn:Fe,starOff:Ie,space:!1,click:()=>W()}),c.init()))}d.addEventListener("submit",_e);d.addEventListener("input",W);d.addEventListener("input",h);h();d.elements.name.addEventListener("blur",ze);d.elements.message.addEventListener("blur",Ye);async function _e(e){if(e.preventDefault(),S)return;const t=e.target.elements.name.value.trim(),s=e.target.elements.message.value.trim(),r=(c==null?void 0:c.score())??0,i={name:t,descr:s,rating:r};try{S=!0,h(),C(document.body),await ie(i),e.target.reset(),c==null||c.score(0),Pe(),b.success({title:"Success",message:"Thanks for your feedback!",position:"topRight"}),j(),p()}catch(a){console.log(a),b.error({title:"Error",message:"Failed to send feedback. Please try again.",position:"topRight"})}finally{S=!1,T(document.body),h()}}function W(){const e={name:d.elements.name.value,message:d.elements.message.value,rating:(c==null?void 0:c.score())??0};localStorage.setItem(N,JSON.stringify(e))}function He(){const e=JSON.parse(localStorage.getItem(N)||"null");e&&(d.elements.name.value=e.name??"",d.elements.message.value=e.message??"",c==null||c.score(e.rating??0))}function Pe(){localStorage.removeItem(N)}function ze(){const e=d.elements.name,t=e.value.trim();X(e),t.length<3&&Q(e,"Name must be at least 3 characters")}function Ye(){const e=d.elements.message,t=e.value.trim();X(e),t.length<10&&Q(e,"Message must be at least 10 characters")}function Q(e,t){e.classList.add("input-error");const s=document.createElement("p");s.className="error-text",s.textContent=t,e.parentElement.appendChild(s)}function X(e){e.classList.remove("input-error");const t=e.parentElement.querySelector(".error-text");t&&t.remove()}function h(){const e=d.elements.name.value.trim(),t=d.elements.message.value.trim(),s=e.length>=3&&t.length>=10&&!S;Be.disabled=!s}re().then(ce).catch(de);
//# sourceMappingURL=index.js.map
