export type CurrentPage = "home" | null;

export interface Param {
  name: string;
  value: string;
}

export class Application {
  private $currentPage: CurrentPage = null;

  static async initGlobal() {
    (window as any).$app = new Application();
  }

  static get instance(): Application {
    return (window as any).$app;
  }

  setPage(page: CurrentPage, params?: Param[]): void {
    let href = "/";

    if (page !== "home" && page !== null) {
      const qs = new URLSearchParams();

      qs.append("page", page ?? "home");

      if (params) {
        for (let p of params) {
          qs.append(p.name, p.value);
        }
      }

      href = `/?${qs.toString()}`;
    }

    this.$currentPage = page ?? "home";
    location.href = href;
  }

  getParam(name: string): Param | null {
    const qs = new URLSearchParams(location.search);
    const value = qs.get(name);
    return value ? { name, value } : null;
  }

  async load(): Promise<CurrentPage> {
    try {
      const qs = new URLSearchParams(location.search);
      const page: CurrentPage = (qs.get("page") as CurrentPage) ?? "home";

      if (page !== this.$currentPage) {
        const response = await fetch(`./pages/${page}.html`);

        if (!response.ok) {
          throw { status: response.status, message: response.statusText };
        }

        const main = document.getElementById("app");

        if (main) {
          main.innerHTML = await response.text();
        } else {
          throw { status: 404, message: "Main element not found!" };
        }
      }

      return page;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
