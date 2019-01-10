/* 1.  Ionic build issue android - (asset and everything not found) 

 *** SOLUTION =>
    // index.html file change 
    <base href="/" /> 
    ** to 
    <base href="./" /> 
*/

/* 2. Ionic build issue android - (build failed) 
    error showing => No installed build tools found. Install the Android build tools version 19.1.0 or higher

*** SOLUTION =>
    // config.xml file change 
    Android version changes to - 6.4.0
*/

/* 3. Ionic Icon issue - (Icon not showing in App) 

*** SOLUTION =>
    cordova-plugin-ionic-webview plugin version changes to -
    cordova-plugin-ionic-webview@2.2.0
*/

 /*4. IOS build issue-(Export failed)
 *** solution =>
 Currently cordova-ios is not compatible with Xcode 10
 Build command => ionic cordova build ios -- --buildFlag="-UseModernBuildSystem=0"
 */