Easy error message solution.

Example
```
const eRocket = require('exceptionRocket')

const apiCall = () => {
  try {
    fetch('https://youtube.com')
  } catch (e) {
    eRocket(apiCall)
  }
}

in console

exception apiCall: () => {
  try {
    fetch('https://youtube.com')
  } catch (e) {
    eRocket(apiCall)
  }
}
```
