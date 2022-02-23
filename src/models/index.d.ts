import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ColorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Color {
  readonly id: string;
  readonly c?: string;
  readonly contrast?: string;
  readonly primary?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Color, ColorMetaData>);
  static copyOf(source: Color, mutator: (draft: MutableModel<Color, ColorMetaData>) => MutableModel<Color, ColorMetaData> | void): Color;
}