import { ms } from "../src/milsymbol.js";
ms.reset();

import { app6b } from "stanag-app6";
import verify from "./letter-sidc.js";
ms.setStandard("APP6");

import { equipment } from "../src/lettersidc.js";
ms.addIcons(equipment);

export default verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_EQT);
