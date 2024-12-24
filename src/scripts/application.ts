interface Param {
  name: string;
  value: string;
}

export class Application {
  private $currentPage: string | "home" = "";

  static initGlobal(): void {
    (window as any).$app = new Application();
  }

  static get instance(): Application {
    return (window as any).$app;
  }

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
    const page = qs.get("page") ?? "home";

    if (page !== this.$currentPage) {
      fetch(`./pages/${page}.html`)
        .then((res: any) => {
          if (!res.ok) {
            throw { status: res.status, message: res.statusText };
          }

          return res.text();
        })
        .then((content: any) => {
          const main = document.getElementById("app");
          if (main) {
            main.innerHTML = content;
          }
        })
        .catch((err) => {
          console.error("Load page fail: ", err);
        });
    }
  }
}
