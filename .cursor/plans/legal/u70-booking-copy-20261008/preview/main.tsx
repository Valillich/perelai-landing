import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {PublicBookingPage} from '/Users/valery/Sites/beauty-finance/apps/web/src/pages/PublicBookingPage';
import './preview.css';
const params=new URLSearchParams(location.search);
const locale=params.get('lang') || 'ru';
import resources from './resources.json';
await i18n.use(initReactI18next).init({resources,lng:locale,fallbackLng:'en',defaultNS:'common',interpolation:{escapeValue:false}});
document.documentElement.classList.toggle('dark',params.get('theme')==='dark');

createRoot(document.getElementById('root')!).render(<BrowserRouter><Routes><Route path="/book/:companySlug" element={<PublicBookingPage/>}/></Routes></BrowserRouter>);

// Capture-only readiness marker lets the real page finish its one-time reveal/animation.
document.addEventListener('click', (event)=>{if((event.target as HTMLElement).closest('button')?.textContent?.trim()==='18:00') window.setTimeout(()=>{if(params.get('text')==='200'){const items=[...document.querySelectorAll('p,span,a,label,h1,h2,h3,button,textarea,input')].map(el=>[el,parseFloat(getComputedStyle(el).fontSize)] as const);for(const [el,size] of items)(el as HTMLElement).style.fontSize=`${size*2}px`;} const marker=document.createElement('span');marker.dataset.testid='u70-capture-ready';marker.hidden=true;document.body.appendChild(marker);},900);});
