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

### Step 2: Initializing the SDK
After adding our module, it is necessary to retrieve an access token from our API, and we strongly recommend that it be done through a backend because the request needs your credentials and it's good to avoid the harmful environment of the web.

With your accessToken in hand, a call must happen to the signIn method along with your application initialization, which is required to complete the initialization of our component.
```javascript
import { signIn } from 'flourish-web-sdk-react'

signIn(accessToken, 'staging')
```

### Step 3: Using the SDK

After initialization and with your accessToken in hand, it is possible to pass it to the SDK component, along with the desired environment and language, just like this:

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

---
### Step 4: Listening events

You can register for some events to know when something happens within our platform.

### Listen our events
To listen to our events, you will pass a callback function to our Flourish component when you add it to your screen.

### To listen all events
you can listen to all events at once, to do this, just pass a callback function in the "genericEventCallback" attribute

```js
import Flourish from 'flourish-web-sdk-react';

const genericEventCallback = (eventData: string): void => {
  console.log('All events here', eventData);
};

return (
  <Flourish token={accessToken}
    environment='staging'
    language='en'
    genericEventCallback={genericEventCallback} />
);
```

### To listen to a specific event
You can also if you want to listen to a specific event

```js
import Flourish from 'flourish-web-sdk-react';

const missionActionEventCallback = (missionActionEvent: MissionActionEvent): void => {
  console.log('Mission event type', missionActionEvent.missionType);
  console.log('Mission event name', missionActionEvent.missionEvent);
};

return (
  <Flourish token={accessToken}
    environment='staging'
    language='en'
    missionActionEventCallback={missionActionEventCallback}  />
);
```
<br>

You can find our all mapped events here: https://github.com/Flourish-savings/flourish-web-sdk-react/blob/main/src/events/eventTypes.ts

### Events to listen
here you have all events we will return

| Event name      | Description                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------|
| BACK_BUTTON_PRESSED | When you need to know when the user clicks on the back menu button on our platform.
| HOME_BACK_BUTTON_PRESSED | When you need to know when the user clicks on the back menu button when on the home screen of our platform.           |
| ONBOARDING_BACK_BUTTON_PRESSED | When you need to know when the user clicks on the back menu button when on the onboarding screen of our platform.           |
| MISSION_ACTION     | When you need to know when the user clicks on a mission card                                |
| TRIVIA_GAME_FINISHED  | When you need to know when the user finishes a Trivia game on our platform.                                       |
| TRIVIA_CLOSED  | When you need to know when the user closed the Trivia game on our platform.                                       |
| GIFT_CARD_COPY  | When you need to know when the user copy the Gift code to the clipboard area.                                       |
| REFERRAL_COPY          | When you need to know when the user copy the referral code to the clipboard area.                             |
| HOME_BANNER_ACTION      | When you need to know when the user clicks on the home banner.       |
| ERROR      | When you need to know when a error happened.      |
<br>

## Example
Inside this repository, you have an example app to show how to integrate with us:

https://github.com/Flourish-savings/flourish-web-sdk-react/tree/main/example
<br>
