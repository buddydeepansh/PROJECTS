import React from "react";
import { observer } from "mobx-react-lite";

const Home2 = ({ store }) => {
  return <ul>{store.userInfo.radioo && <li>{store.userInfo.radioo}</li>}</ul>;
};

export default observer(Home2);
