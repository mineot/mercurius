import { i18n } from "i18next";
import { homePage } from "@/scripts/pages/home-page";

type PageName = "home" | null;

export interface Param {
  name: string;
  value: string;
}

interface Href {
  page?: PageName;
  params?: Param[];
}

export class App {
  private $page: PageName = null;

  static async initGlobal() {
    (window as any).$app = new App();
  }

  static get instance(): App {
    return (window as any).$app;
  }

  href({ page, params }: Href = {}): void {
    if (!page || page === "home") {
      this.$page === "home";
      location.href = "/";
      return;
    }

    const qs = new URLSearchParams();
    qs.append("page", page ?? "home");

    if (params) {
      for (let { name, value } of params) {
        qs.append(name, value);
      }
    }

    location.href = `/?${qs.toString()}`;
  }

  get(key: string): Param | null {
    const qs = new URLSearchParams(location.search);
    const value = qs.get(key);
    return value ? { name: key, value } : null;
  }

  async load(i18next: i18n): Promise<void> {
    const qs = new URLSearchParams(location.search);
    const page = qs.get("page") ?? "home";

    switch (page) {
      case "home":
        await homePage({ i18next });
        break;
    }
  }
}
