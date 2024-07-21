import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, configure } from 'instantsearch.js/es/widgets';
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

const searchClient = algoliasearch('612ETOM2GQ', '0769ad74171fdf6580638c7af354c3a7');

const search = instantsearch({
  indexName: 'real',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox"
  }),
  configure({
    hitsPerPage: 5
  }),
  hits({
    container: "#hits",
    templates: {
      item: (hit, { html, components }) => html`
        <div>
          <div class="hit-type">
  ${components.Highlight({ hit, attribute: "type" })}
</div>
<div class="hit-state">
  ${components.Highlight({ hit, attribute: "state" })}
</div>
<div class="hit-postal_code">
  ${components.Highlight({ hit, attribute: "postal_code" })}
</div>
        </div>
      `,
    },
  }),
]);

export default search;
import search from "./search.js";
import 'instantsearch.css/themes/satellite.css';

search.start();



