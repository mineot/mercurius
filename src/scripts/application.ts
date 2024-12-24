interface Param {
  name: string;
  value: string;
}

export class Application {
  private $currentPage: string | "home" = "";

  setPage(page: string | "home", params?: Param[]): void {
    let href = "/";

    if (page !== "home") {
      const qs = new URLSearchParams();
      qs.append("page", page);

      if (params) {
        for (let p of params) {
          qs.append(p.name, p.value);
        }
      }

      href = `/?${qs.toString()}`;
    }

    this.$currentPage = page;
    location.href = href;
  }

  getParam(name: string): Param | null {
    const qs = new URLSearchParams(location.search);
    const value = qs.get(name);
    return value ? { name, value } : null;
  }

  load(): void {
    const qs = new URLSearchParams(location.search);
    const page = qs.get("page");

    if (page && page !== this.$currentPage) {
      console.log("load", page);
      console.log("id", this.getParam("id"));
    }
  }
}
