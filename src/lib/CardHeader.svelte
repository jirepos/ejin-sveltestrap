<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };
  export let tag = 'div';

  $: classes = classnames(className, 'card-header');
</script>

{#if tag === 'h3'}
  <h3 {...$$restProps} class={classes} on:click>
    <slot />
  </h3>
{:else}
  <div {...$$restProps} class={classes} on:click>
    <slot />
  </div>
{/if}
