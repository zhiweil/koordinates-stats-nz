# Koordinates - Stats New Zealand

The repository provides access to Stats New Zealand datasets hosted by Koordinates. It is built on module [@zhiweiliu/koordiates-base](https://www.npmjs.com/package/@zhiweiliu/koordinates-base). Please refer to the base module for more details.

## Supported datasets

- Daily temperature 30 sites, state, 1909 - 2022
- Annual and seasonal temperatures at 30 sites, trends, 1972-2022
- Annual and seasonal temperatures at 30 sites, state 1972 - 2022
- National Temperature, trends, 1909-2022
- National temperature, state, 1909-2022

## Example

```typescript
// import Koordinates modules
import { KoordinatesDataset } from "@zhiweiliu/koordinates-base";
import { statsNzDatasets } from "@zhiweiliu/koordinates-stats-nz";

// Koordinates API key, it is recommended to load it at run time instead of hard-coding it in a file
import apiKey from "./api-key";

// Find dataset
let mb: KoordinatesDataset = LinzDatasets.find(
  (d) => d.getName() === "Meshblock 2024"
) as KoordinatesDataset;

// Invoke methods on the dataset object
let json = await mb.getLayerCapabilitiesJson(apiKey);
console.log(json);
```
