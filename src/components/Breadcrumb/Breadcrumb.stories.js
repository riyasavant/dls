import React from "react";
import Breadcrumb from "./Breadcrumb";

export default {
  title: 'Breadcrumb'
};

export const Default = () => {
  const items = ['Home', 'Cart', 'Payment'];
  return (
    <Breadcrumb items={items} onClick={(value => console.log(value))}/>
  )
}