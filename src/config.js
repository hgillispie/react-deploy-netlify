import configJson from "./auth_config.json";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

import { useState } from "react";
import { versionMajorMinor } from "typescript";

export function getConfig() {
  // Configure the audience here. By default, it will take whatever is in the config
  // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
  // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
  // don't have an API).
  // If this resolves to `null`, the API page changes to show some helpful info about what to do
  // with the audience.
  // Initialize the agent at application startup.
//   const fpPromise = import('https://fpcdn.io/v3/eJCjdtCIXZVuVZlawI6Z')
//   .then(FingerprintJS => FingerprintJS.load())
// // Get the visitor identifier when you need it.
// const fingerPrint = fpPromise
//   .then(fp => fp.get())
//   .then(result => {
//     // This is the visitor identifier:
//     const visitorId = result.visitorId
//     console.log(visitorId + ' first call')
//     return visitorId
//   })


// const getFingerprint = async() => {
//   const id = await fingerPrint;
//   console.log(id + ' second call')
//   return id
// }

  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null)
    // fingerprint: getFingerprint()
    }
  };

