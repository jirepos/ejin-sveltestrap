<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let color = 'secondary';
  export let href = undefined;
  export let pill = false;

  $: classes = classnames(
    className,
    'badge',
    `text-bg-${color}`,
    pill ? 'rounded-pill' : false
  );
</script>

{#if href}
  <a {...$$restProps} {href} class={classes}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <span {...$$restProps} class={classes}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </span>
{/if}
