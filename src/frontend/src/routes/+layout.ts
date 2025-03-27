export const prerender = true;
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { ic } from '../stores/ic';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
  if (!browser) return { protected: false };
  
  // const ic = createActor();
  const currentPath = url.pathname.substring(1);
  
  try {
    // Check if route is protected
    const isProtected = await $ic.actor.is_protected_route(currentPath);
    console.log('HERE', isProtected);
    
    if (isProtected) {
      // Validate the NFC scan
      const isValid = await ic.actor.validate_url_scan(url.href, currentPath);
      
      if (!isValid) {
        // Redirect to error page if scan is invalid
        goto('/edge.html');
        return { protected: true, valid: false };
      }
      
      return { protected: true, valid: true };
    }
    
    // Not a protected route
    return { protected: false };
  } catch (error) {
    console.error('Error checking route protection:', error);
    return { protected: false, error: true };
  }
}

