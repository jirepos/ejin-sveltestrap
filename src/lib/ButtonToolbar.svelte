<script>
  import classnames from './utils.js';

  let className = '';
  export { className as class };

  $: classes = classnames(className, 'btn-toolbar');
</script>

<div {...$$restProps} role="toolbar" class={classes}>
  <slot />
</div>
