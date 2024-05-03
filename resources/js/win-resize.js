import { Offcanvas } from "bootstrap";

const bsAppOffCanvas = new Offcanvas("#appOffCanvas");

export const WindowResize = () =>
    window.addEventListener("resize", () => {
        bsAppOffCanvas.hide();
    });
