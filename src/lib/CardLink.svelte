<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };
  export let href = '';

  $: classes = classnames(className, 'card-link');
</script>

<a {...$$restProps} class={classes} {href}>
  <slot />
</a>
