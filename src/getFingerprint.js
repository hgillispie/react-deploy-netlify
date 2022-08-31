

// export function getFingerprint() {
//     const fpPromise = import('https://fpcdn.io/v3/eJCjdtCIXZVuVZlawI6Z')
//     .then(FingerprintJS => FingerprintJS.load())
//     // Get the visitor identifier when you need it.
//     const fingerPrint = fpPromise
//     .then(fp => fp.get())
//     .then(result => {
//       // This is the visitor identifier:
//       const visitorId = result.visitorId
//       console.log(visitorId + ' first call')
//       return visitorId
//     })
    
    
//     const getFingerprint = async () => {
//     const id = await fingerPrint;
//     console.log(id + ' second call')
//     return id
//     }


// }