const Storage = chrome.storage

Storage.local.get('hasCookieSet', data => {
  const keys = Object.keys(data)
  if (keys.length === 0) {

    // Set the cookie!
    document.cookie="VISITOR_INFO1_LIVE=fPQ4jCL6EiE"

    Storage.local.set({'hasCookieSet': true}, () => {
      const confirm = window.confirm('We\'ll need to refresh the page once 🍪')

      if (confirm) {
        window.location.reload()
      } else {
        console.log('Bailed! Might not work until next refresh 😐')
      }
    })
  }
})
