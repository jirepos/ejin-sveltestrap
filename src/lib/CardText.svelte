<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };

  $: classes = classnames(className, 'card-text');
</script>

<p {...$$restProps} class={classes}>
  <slot />
</p>
