import { Document } from "./Document";

export class DocumentBuilder {
  private document: Document;

  constructor() {
    this.document = new Document();
  }

  addHeader(header: string): DocumentBuilder {
    this.document.setHeader(header);
    return this;
  }

  addBody(body: string): DocumentBuilder {
    this.document.setBody(body);
    return this;
  }

  addFooter(footer: string): DocumentBuilder {
    this.document.setFooter(footer);
    return this;
  }

  build(): Document {
    return this.document;
  }
}
