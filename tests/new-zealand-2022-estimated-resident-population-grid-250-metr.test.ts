import { KoordinatesDataset } from "@zhiweiliu/koordinates-base";
import { statsNzDatasets } from "../src/index";
import apiKey from "./api-key";

const TIMEOUT: number = 60000;
const datasetName =
  "New Zealand 2022 Estimated Resident Population Grid 250 metre, 2023";

test(
  "Capabilites endpoint",
  async () => {
    let mb: KoordinatesDataset = statsNzDatasets.find(
      (d) => d.getName() === datasetName
    ) as KoordinatesDataset;
    expect(mb).not.toBe(undefined);

    let json = await mb.getLayerCapabilitiesJson(apiKey);
    expect(json["wfs:WFS_Capabilities"]["$"]["version"]).toBe("2.0.0");

    let xml = await mb.getLayerCapabilitiesXml(apiKey);
    expect(xml).toContain('wfs:WFS_Capabilities version="2.0.0"');

    xml = await mb.getAllCapabilitiesXml(apiKey);
    expect(xml).toContain("wfs:WFS_Capabilities");

    json = await mb.getAllCapabilitiesJson(apiKey);
    expect(json["wfs:WFS_Capabilities"]["$"]["version"]).toBe("2.0.0");

    // CS-W endpoint
    xml = await mb.getWebCatalogServicesXml();
    expect(xml).toContain("csw:Capabilities");
    json = await mb.getWebCatalogServicesJson();
    expect(json["csw:Capabilities"]).toBeDefined();
  },
  TIMEOUT
);

test(
  "Changesets endpoint",
  async () => {
    let mb: KoordinatesDataset = statsNzDatasets.find(
      (d) => d.getName() === datasetName
    ) as KoordinatesDataset;
    expect(mb).not.toBe(undefined);

    try {
      await mb.getWfsChangesets(
        apiKey,
        "2023-01-01T00:00:00Z",
        "2023-01-15T00:00:00Z"
      );
    } catch (ex) {
      expect((ex as Error).message).toBe(
        "Changesets API is not supported by dataset New Zealand 2022 Estimated Resident Population Grid 250 metre, 2023."
      );
    }
  },
  TIMEOUT
);

test(
  "Spatial data query endpoints",
  async () => {
    let mb: KoordinatesDataset = statsNzDatasets.find(
      (d) => d.getName() === datasetName
    ) as KoordinatesDataset;
    expect(mb).not.toBe(undefined);

    let spatialDataJson = await mb.queryWfsSpatialApiJson(
      apiKey,
      -37.78828,
      175.28011,
      100,
      10000
    );
    expect(
      spatialDataJson["vectorQuery"]["layers"][`${mb.getLayerId()}`]
    ).toBeDefined();

    let spatialDataXml = await mb.queryWfsSpatialApiXml(
      apiKey,
      -37.78828,
      175.28011,
      100,
      10000
    );
    expect(spatialDataXml).toContain("kx:vectorQuery");
    expect(spatialDataXml).toContain("gml:featureMember");
  },
  TIMEOUT
);

test(
  "Initial dataset",
  async () => {
    let mb: KoordinatesDataset = statsNzDatasets.find(
      (d) => d.getName() === datasetName
    ) as KoordinatesDataset;
    expect(mb).not.toBe(undefined);

    let actualCount = await mb.getInitialDatasetCount();
    console.log(`Initial dataset for ${mb.getName()} is ${actualCount}`);
    const batchSize = 100000;
    let start = 0;
    let count = 0;
    while (start < actualCount) {
      let dataset = await mb.getInitialDatasetInBatch(start, batchSize);
      count += dataset.length;
      start += dataset.length;
      console.log(`Loaded ${count} out of ${actualCount} records!`);
    }
    expect(actualCount).toBe(count);
  },
  TIMEOUT * 5
);
