import{a as l,i as u,S as m}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(r){const o="42276910-5dbc0617c597b0712888fd711",e="https://pixabay.com/api/",t={key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.get(e,{params:t}).data}function f(r){const{comments:o,downloads:s,views:i,likes:e,webformatURL:t,tags:n,largeImageURL:c}=r;return`<li class="gallery-item">
             <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${c}" alt="${n}" />
            </a>
            <p><b>Likes: </b>${e}</p>
            <p><b>Views: </b>${i}</p>
            <p><b>Comments: </b>${o}</p>
            <p><b>Downloads: </b>${s}</p>
        </li>`}function d(r){return r.map(f).join("")}const a={formElem:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.formElem.addEventListener("submit",g);async function g(r){r.preventDefault();const o=r.target.elements.input.value.trim();if(!o){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=await p(o);a.gallery.innerHTML="",y(s.hits),r.target.reset()}function y(r){const o=d(r);a.gallery.insertAdjacentHTML("beforeend",o),new m(".gallery a",h).refresh()}const h={captions:!0,captionType:"attr",captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map
