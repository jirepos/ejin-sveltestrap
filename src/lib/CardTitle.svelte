<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };

  $: classes = classnames(className, 'card-title');
</script>

<h5 {...$$restProps} class={classes}>
  <slot />
</h5>
