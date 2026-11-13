import {site} from "@/lib/site";

function WhatsAppMark(){
 return <svg className="whatsapp-brand-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M16 2.5A13.35 13.35 0 0 0 4.5 22.6L3 29l6.55-1.7A13.5 13.5 0 1 0 16 2.5Zm0 24.4a10.9 10.9 0 0 1-5.55-1.52l-.4-.24-3.88 1.01 1.04-3.78-.26-.42A10.9 10.9 0 1 1 16 26.9Z"/>
  <path fill="currentColor" d="M22.1 18.65c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.16 1.13-1.16 2.74s1.19 3.18 1.35 3.4c.17.22 2.33 3.56 5.65 4.99.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.22-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z"/>
 </svg>
}
export default function WhatsApp(){
 if(!site.whatsapp)return null;
 return <a className="whatsapp-float" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Suma Sri, I would like to discuss a project.")}`} target="_blank" rel="noreferrer" aria-label="Chat with Suma Sri on WhatsApp">
  <WhatsAppMark/><span>Chat on WhatsApp</span>
 </a>
}