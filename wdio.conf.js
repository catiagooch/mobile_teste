export const config = {
    user: 'oauth-catiavelasco-95a3c',
    key: '921509e1-68d9-4bcf-b9b4-37344eb24832',
  
    region: 'eu-central-1', // ESSENCIAL para sua conta
  
    specs: ['./test/specs/**/*.js'],
  
    maxInstances: 1,
  
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Samsung Galaxy S9 FHD GoogleAPI Emulator',
      'appium:platformVersion': '9.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': 'storage:68b8918a-0100-40a9-ad8b-cf69a13b2ed1',
      'appium:autoGrantPermissions': true
    }],
  
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
  
    services: ['sauce'],
  
    framework: 'mocha',
    reporters: ['spec'],
  
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  }
  
    