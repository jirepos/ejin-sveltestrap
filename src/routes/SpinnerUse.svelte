<script lang="ts">
  import { Spinner } from '$lib/index.js';
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];
</script>

{#each colors as color}
  <Spinner {color} class="m-1" />
{/each}