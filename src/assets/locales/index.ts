const en = require('./en/string.json');
const vi = require('./vi/string.json');

export const resources = { en, vi };

export type LangTypes = keyof typeof resources;
