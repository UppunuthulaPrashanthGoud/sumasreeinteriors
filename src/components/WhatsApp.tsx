import {site} from "@/lib/site";

function WhatsAppMark(){
 return <svg className="whatsapp-brand-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
  <circle cx="16" cy="16" r="15" fill="#25D366"/>
  <path fill="#fff" d="M23.45 8.55A10.45 10.45 0 0 0 6.99 21.16L5.5 26.6l5.57-1.46a10.42 10.42 0 0 0 4.99 1.27h.01A10.45 10.45 0 0 0 23.45 8.55ZM16.07 24.6h-.01a8.67 8.67 0 0 1-4.42-1.21l-.32-.19-3.3.86.88-3.22-.21-.33a8.67 8.67 0 1 1 7.38 4.09Zm4.76-6.49c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.27-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.49c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.79 4.43 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3Z"/>
 </svg>
}
export default function WhatsApp(){
 if(!site.whatsapp)return null;
 return <a className="whatsapp-float" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Suma Sri, I would like to discuss a project.")}`} target="_blank" rel="noreferrer" aria-label="Chat with Suma Sri on WhatsApp">
  <WhatsAppMark/>
 </a>
}