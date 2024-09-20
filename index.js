import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(e){if(e.ep)return;e.ep=!0;const l=r(e);fetch(e.href,l)}})();const d="https://pixabay.com/api/",f="46051705-d89a9592eef32bc9448824550";function m(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${o.toString()}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(s){const o=document.querySelector(".gallery"),r=s.hits.map(t=>`<li class="gallery-query">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-img"
                    src="${t.webformatURL}"
                    data-source="${t.largeImageURL}"
                    alt="${t.tags}"
                    width="360"  onclick="return false">
                <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${t.likes}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${t.views}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${t.comments}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");o.insertAdjacentHTML("beforeend",r)}function g(){document.querySelector(".loader").classList.remove("visually-hidden")}function p(){document.querySelector(".loader").classList.add("visually-hidden")}const i=document.querySelector(".form"),h=document.querySelector(".gallery");let n=null;i.addEventListener("submit",s=>{s.preventDefault();const o=i.elements.query.value.trim();if(o===""){c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"});return}h.innerHTML="",g(),m(o).then(r=>{if(r.hits.length===0){c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"});return}else y(r);n?n.refresh():n=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(r=>{console.log(r)}).finally(()=>{p(),i.reset()})});
//# sourceMappingURL=index.js.map
