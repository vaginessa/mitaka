import { buildURL } from "../url_builder";
import { SearchableType, Searcher } from "./searcher";

export class VxCube implements Searcher {

  public endpoint: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["ip", "domain", "hash"];

  constructor() {
    this.endpoint = "http://vxcube.com";
    this.name = "VxCube";
  }

  public searchByIP(query: string) {
    return buildURL(this.endpoint, `/tools/ip/${query}/whois`);
  }

  public searchByDomain(query: string) {
    return buildURL(this.endpoint, `/tools/domain/${query}/whois`);
  }

  public searchByHash(query: string) {
    return buildURL(this.endpoint, `/result/${query}`);
  }
}
