/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Color } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Reactlogo from "./Reactlogo";
import { Collection } from "@aws-amplify/ui-react";
export default function ReactlogoCollection(props) {
  const { color, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Color,
        }).items;
  return (
    <Collection
      type="grid"
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <Reactlogo
          color={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Reactlogo[0]")}
        ></Reactlogo>
      )}
    </Collection>
  );
}
