// import React from "react";

import React, { useState, useEffect } from 'react';

export default function APItest () {
  console.log("APItest begin RUN")


  try {
    const response = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=test`

    );

    console.log(response)

  } catch (err) {
    console.error(err);
  }



}

