
<script>
    export let data;
  </script>
  
  {#if data.protected && !data.valid}
    <!-- Show loading or redirecting message -->
    <div>Validating NFC tag...</div>
  {:else}
    <slot />
  {/if}