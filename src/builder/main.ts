import { DocumentBuilder } from "./DocumentBuilder";

const header = "ACME Corporation — Report";
const body = "Quarterly performance increased by 12%.";
const footer = "--- Confidential ---";

const builder = new DocumentBuilder();

const myDocument = builder
  .addFooter(footer)
  .addHeader(header)
  .addBody(body)
  .build();

console.log(myDocument);
