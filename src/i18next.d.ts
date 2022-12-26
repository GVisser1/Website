import { TFuncKey } from "i18next";
import { defaultNS, resources } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources.en;
  }

  type TranslationKeys = TFuncKey<keyof typeof resources.defaultEn>;
}
