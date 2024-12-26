export const registryTags = ["React Aria", "Radix", "Input", "Label"] as const;

export type RegistryTag = (typeof registryTags)[number];
