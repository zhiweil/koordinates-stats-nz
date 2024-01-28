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
];
