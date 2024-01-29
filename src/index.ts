import { APIKind, KoordinatesDataset } from "@zhiweiliu/koordinates-base";
export let statsNzHost: string = "https://datafinder.stats.govt.nz";
export let initialDatasetLocation: string =
  "https://s3.ap-southeast-2.amazonaws.com/stats-nz-datasets.zhiweiliu.com";

export let statsNzDatasets = [
  new KoordinatesDataset({
    koordinatesHost: statsNzHost,
    name: "Meshblock 2024",
    layerId: 115225,
    apiKind: APIKind.WFS,
    apiVersion: "v1",
    version: "v2.0.0",
    initialDatasetTs: "2023-11-27T00:00:00Z",
    initialDatasetLocation,
    initialDataset: "meshblock-2024.csv",
    hasSpatialInformation: true,
  }),
  new KoordinatesDataset({
    koordinatesHost: statsNzHost,
    name: "Geographic Areas Table 2024",
    tableId: 115227,
    apiKind: APIKind.WFS,
    apiVersion: "v1",
    version: "v2.0.0",
    initialDatasetTs: "2023-11-27T00:00:00Z",
    initialDatasetLocation,
    initialDataset: "geographic-areas-table-2024.csv",
  }),
  new KoordinatesDataset({
    koordinatesHost: statsNzHost,
    name: "Current Geographic Boundaries Table 2024",
    tableId: 114916,
    apiKind: APIKind.WFS,
    apiVersion: "v1",
    version: "v2.0.0",
    initialDatasetTs: "2023-12-07T00:00:00Z",
    initialDatasetLocation,
    initialDataset: "current-geographic-boundaries-table-2024.csv",
  }),
  new KoordinatesDataset({
    koordinatesHost: statsNzHost,
    name: "New Zealand 2022 Estimated Resident Population Grid 250 metre, 2023",
    layerId: 115047,
    apiKind: APIKind.WFS,
    apiVersion: "v1",
    version: "v2.0.0",
    initialDatasetTs: "2023-11-27T00:00:00Z",
    initialDatasetLocation,
    initialDataset:
      "new-zealand-2022-estimated-resident-population-grid-250-metr.csv",
    hasSpatialInformation: true,
  }),
];
