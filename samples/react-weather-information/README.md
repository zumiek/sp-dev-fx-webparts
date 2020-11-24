# Weather Information

> NOTE: This sample is available in the [PnP Starter Kit](https://github.com/pnp/sp-starter-kit). You can find the sample code for this web part at https://github.com/SharePoint/sp-starter-kit/tree/master/solution/src/webparts/weatherInformation.

This web part provides you the ability to display basic weather information for one location on a web page. The web part depends on a service provided by [Yahoo Weather API](https://developer.yahoo.com/weather/).

By default, the `Weather Information` web part will use the location **Seatle** during the Starter Kit provisioning process and can be overriden when the [-WeatherCity](https://github.com/SharePoint/sp-starter-kit/tree/master/provisioning#-weathercity) parameter is provided.

![Weather Information](https://github.com/pnp/sp-starter-kit/raw/master/assets/images/components/part-weather.gif)

## How to use this web part on your web pages

1. Place the page you want to add this web part to in edit mode.
2. Search for and insert the **Weather** web part.
3. Configure the web part to update its properties.

## Configurable Properties

The `Weather Information` web part can be configured with the following properties:

| Label | Property | Type | Required | Description |
| ---- | ---- | ---- | ---- | ---- |
| Add a location | location | string | no | Inline editable location for weather request |
| Display temperature as | unit | string | no | The requested temperature unit, Celsius or Fahrenheit |

# Installing the web part

See getting started from [SP-Starter-Kit repository readme](https://github.com/SharePoint/sp-starter-kit). 

You can also download just the [SharePoint Framework solution package (spppkg) file](https://github.com/SharePoint/sp-starter-kit/blob/master/package/sharepoint-starter-kit.sppkg) and install that to your tenant.

# Screenshots

![Weather Information](https://github.com/pnp/sp-starter-kit/raw/master/assets/images/components/part-weather.png)

# Source Code

https://github.com/SharePoint/sp-starter-kit/tree/master/solution/src/webparts/weatherInformation

# Minimal Path to Awesome

- Clone this repository
- Move to Solution folder
- in the command line run:
  - `npm install`
  - `gulp serve`

# Version history

Version|Date|Comments
-------|----|--------
1.0|May 2018|Initial release

<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/react-weather-information" />
