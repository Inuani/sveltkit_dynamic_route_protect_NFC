export const prerender = true;
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { ic } from '../stores/ic';
import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
  if (!browser) return { protected: false };
  
  const currentPath = url.pathname.substring(1);
  const backend = get(ic);
  
  try {
    // Check if route is protected
    const isProtected = await backend.actor.is_protected_route(currentPath);
    if (isProtected) {
      const isValid = await backend.actor.validate_url_scan(url.href, currentPath);
      console.log("IS VALID OR NOT", isValid);
      
      if (!isValid) {
        goto('/edge.html');
        return { protected: true, valid: false };
      }
      
      return { protected: true, valid: true };
    }
    
    return { protected: false };
  } catch (error) {
    console.error('Error checking route protection:', error);
    return { protected: false, error: true };
  }
}