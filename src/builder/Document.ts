export class Document {
  private header?: string;
  private body?: string;
  private footer?: string;

  setHeader(header: string): void {
    this.header = header;
  }

  setBody(body: string): void {
    this.body = body;
  }

  setFooter(footer: string): void {
    this.footer = footer;
  }

  toString(): string {
    const parts: string[] = [];
    if (this.header) parts.push(this.header);
    if (this.body) parts.push(this.body);
    if (this.footer) parts.push(this.footer);
    return parts.join("\n");
  }
}
