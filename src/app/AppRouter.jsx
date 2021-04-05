import React from "react";
import { Router, Redirect } from "@reach/router";

// Custom Components

import Buckets from "../pages/buckets/Index";
import BucketDetail from '../pages/bucketDetail/Index';
import NotFount from '../pages/404/Index';



function AppRouter() {
  return (
    <Router>

      <Buckets path="/" />
      <Redirect from="bucket" to="/" noThrow />
      <BucketDetail path="/bucket/:bucketID" />
      <NotFount default />

    </Router>
  );
}

export default AppRouter;

