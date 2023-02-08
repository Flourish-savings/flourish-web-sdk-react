[<img width="400" src="https://github.com/Flourish-savings/flourish-web-sdk-angular/blob/main/images/logo_flourish.png?raw=true"/>](https://flourishfi.com)
# Web SDK for React

Everything you need to know to start integrating your React application with Flourish

## Getting Started
The integration with us works as follows, the client will make a call to our [API](https://docs.flourishfi.com/#intro) to authenticates himself, retrieve an access token and pass to our component, given that, the sdk serves to encapsulate and help in loading this webview.

### Step 1: Installation
Start by adding our SDK into your project with the following command: 

```sh
npm install flourish-web-sdk-react
```
```sh
yarn add flourish-web-sdk-react
```

### Step 2: Using the SDK

After initialization, it is necessary to retrieve an access token from our [API](https://docs.flourishfi.com/#intro), and we recommend that it be done through a backend because the request needs your credentials and it is good to avoid the harmful environment of the web.

With your accessToken in hand, it is possible to pass it to the SDK component, along with the desired environment and language, just like this:

```javascript
import Flourish from 'flourish-web-sdk-react';

return (
    <Flourish
        token='accessToken'
        environment='environment'
        language='"language"'
    />
);
```
After a successful rendering, you should see something like this.

<img width="363" src="https://raw.githubusercontent.com/Flourish-savings/flourish-sdk-flutter/main/images/flourish_home.png"/>
<br>
<br>
<img width="363" src="https://raw.githubusercontent.com/Flourish-savings/flourish-sdk-flutter/main/images/flourish_wheel.png"/>
<br>
<br>

---
### Step 3: Listening events

You can register for some events to know when something happens within our platform.

### Listen our events
To listen to our events, you will pass a callback function to our Flourish component when you add it to your screen.

```js
import Flourish from 'flourish-web-sdk-react';

const printEventData = (data: string): void => {
  console.log('Event Client side', data);
};

return <Flourish eventCallback={printEventData} />;
```

