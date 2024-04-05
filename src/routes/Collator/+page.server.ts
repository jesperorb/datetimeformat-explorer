import type { BrowserSupportDataForMethod } from "$types/BrowserSupport.types";
import { loadJson } from "$utils/load-json";
import type { ServerLoadEvent } from "@sveltejs/kit";

export async function load(loadEvent: ServerLoadEvent): Promise<BrowserSupportDataForMethod> {
	return loadJson(loadEvent);
}
