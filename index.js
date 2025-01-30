import{S as f,i}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u=o=>o.map(e=>{const s=e.tags.split(", ").slice(0,3).join(", ");return`
        <li class="gallery-card">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-img"
              src="${e.webformatURL}"
              alt="${s}" 
              loading="lazy"
            />
            <div class="info">
              <div class="info-list">
                <span class="info-item">Likes</span>
                <span class="info-item-value">${e.likes}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Views</span>
                <span class="info-item-value">${e.views}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Comments</span>
                <span class="info-item-value">${e.comments}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Downloads</span>
                <span class="info-item-value">${e.downloads}</span>
              </div>
            </div>
          </a>
        </li>`}).join(""),d="48549557-eddb482997c8ef9e0172f80ee",m=o=>{const e=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},p=document.querySelector(".search-form"),g=document.querySelector(".search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery"),n=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",o=>{o.preventDefault();const e=g.value.trim();if(!e){i.warning({message:"Please enter a search term.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#9090ff"});return}c.innerHTML="",n.classList.add("active"),m(e).then(s=>{if(s.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"}),n.classList.remove("active");return}c.insertAdjacentHTML("beforeend",u(s.hits)),h.refresh()}).catch(s=>{n.classList.remove("active"),i.error({message:"Something went wrong, please try again later.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"}),console.error("Error fetching data:",s)})});
//# sourceMappingURL=index.js.map
