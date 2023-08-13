<script lang="ts">
  // import Accordion  from '$lib/Accordion.svelte';
  // import AccordionItem  from '$lib/AccordionItem.svelte';
  
  import { Accordion } from '$lib/index.js';
  import { AccordionItem } from '$lib/index.js';

</script>

<Accordion>
  <AccordionItem active header="Home">Fallbrook</AccordionItem>
  <AccordionItem header="School">
    <a href="#home">Buena Vista Elementary</a>
  </AccordionItem>
  <AccordionItem header="Library">UCSB Library</AccordionItem>
</Accordion>