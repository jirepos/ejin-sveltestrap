<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };
  export let href = '/';

  $: classes = classnames(className, 'navbar-brand');
</script>

<a {...$$restProps} class={classes} {href} on:click>
  <slot />
</a>
