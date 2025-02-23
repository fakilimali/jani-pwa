'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "735e67f3ebf59acd0cc8cb78e608c4d6",
"version.json": "2aca05eee37e007a86e9111046a9fbbb",
"index.html": "3960c83faba2f004019739cf5e06ff4c",
"/": "3960c83faba2f004019739cf5e06ff4c",
"firebase-messaging-sw.js": "96e8f9fd38c16f6725844f552dadd2b4",
"main.dart.js": "29e88f99e4d817261b3326c3c2c6d7ea",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6658d47ebd905cad77c081584fff833",
"assets/AssetManifest.json": "e8fdd198de7c2762b468397809cd50a2",
"assets/NOTICES": "52cef9d0da40f5e8f36578984f39c934",
"assets/FontManifest.json": "39f3988ba8261571aceb3bea799bdc88",
"assets/AssetManifest.bin.json": "a989bb33497f66ed0f7d25be3950d9f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1357c43a579cab4b54affc90c7350cb6",
"assets/fonts/MaterialIcons-Regular.otf": "4a88ce8d7d7e408551201a9c8e0acfcd",
"assets/assets/images/Frame%25202.png": "482235844141808879ce6d5cf53aca66",
"assets/assets/images/routeview.png": "eab74c73a5560309ec75008fea892fa3",
"assets/assets/images/map_view.png": "afdc993f62c3cf97ce9dd5fab7025555",
"assets/assets/images/ic_screen_blue.png": "1bd8c6b4c23cc211892bb35d6cbc9e5c",
"assets/assets/certs/private.pem.key": "855a7b7a2d42e89eced7a5ef16c9e593",
"assets/assets/certs/ca_cert.pem": "13e973f895b7a047f65bcf16631a4c83",
"assets/assets/certs/certificate.pem.crt": "7c8958238b2f26be39731b14516cc880",
"assets/assets/icons/ic_google.png": "42530c058e9d27a50b71cadaef0a996f",
"assets/assets/icons/is_busImage.png": "6760344914e3456594ad61383a39098c",
"assets/assets/icons/ic_bus_12.png": "0d9eddcd2f2b0c2c3edcc37c8fa9cd80",
"assets/assets/icons/ic_bus_location.png": "1bf465529b1282a690a0706205b87a58",
"assets/assets/icons/ic_to_smile.png": "2890e50551d338636cb0af86268a92ab",
"assets/assets/icons/ic_rectangle_banner.png": "605997a026e363b352430c49194dc2fc",
"assets/assets/icons/ic_dr_home.png": "3d89d7be21a925af6f451fe4b7148e55",
"assets/assets/icons/ic_fingure_print.png": "ae2d239fd26b0c4a60a7bf8207be0dde",
"assets/assets/icons/ic_review1.png": "4213c6bcb546a6dae0536e260f48ef48",
"assets/assets/icons/ic_location_banner_1.png": "9ddb1501453482e52b27547545d830d4",
"assets/assets/icons/ic_star_fill.png": "99d1283cffe128fed6d75b3b86547d29",
"assets/assets/icons/ic_otp.png": "5a620ee8f07470e12f6aed5f9c700200",
"assets/assets/icons/icons-ticket.png": "b74031c3f51b580e0c3b1e888752c3fe",
"assets/assets/icons/ic_profile_select.png": "d981877c58296cbb49eb6e8817103f63",
"assets/assets/icons/ic_review2.png": "a3049914e2c77eeac5c9eb7b8b6dadee",
"assets/assets/icons/ic_notifications.png": "3707fb3f7028cc2a51a3850296b760df",
"assets/assets/icons/ic_city.png": "fe63919baac9b18e63f131d614180534",
"assets/assets/icons/ic_office_location.png": "ed0ed2ba31a5b5ad1cab6674271c0bee",
"assets/assets/icons/ic_calendar.png": "7000e1e0f59c188ec9ae916ad0153716",
"assets/assets/icons/ic_checkbox2.png": "92d2ec4ecc4e2a9785e96e5335e01a92",
"assets/assets/icons/ic_notification.png": "aef35a88493ce4ada065cb3841f290f1",
"assets/assets/icons/ic_toggle.png": "3b6f8bd55f9c37ea7ec3b301c089f69d",
"assets/assets/icons/ic_cross_1.png": "0d76cd72f1f8e012c73a4629d6905984",
"assets/assets/icons/ic_bus_01.png": "cbe394af61b5025ee54a06fd33bf2077",
"assets/assets/icons/ic_smile_white.png": "461f4eb0060b612a158bdf2080e37d53",
"assets/assets/icons/ic_home_1212.png": "0c775e0cfcc24e423ff35028f731ba28",
"assets/assets/icons/ic_profile_unselect.png": "1df16b10b4cf9550436a199efcedda94",
"assets/assets/icons/ic_home_select.png": "7ad464473fd021e8e3c4adf07cc31f13",
"assets/assets/icons/ic_background3.png": "5afb54052268b667eaf8bda391588b06",
"assets/assets/icons/ic_smile.png": "355ba2f35f4d808bfdecf28d7ea48465",
"assets/assets/icons/ic_setting.png": "8fdcef35b5bba08af072f380d8252c87",
"assets/assets/icons/ic_smile_1.png": "e70e77566a669aa84d34405f11f623df",
"assets/assets/icons/ic_user.png": "b427b1061575571c26d0b2f5949f6384",
"assets/assets/icons/ic_dropdown.png": "1b79533846cbcbb26ccc6015dc72f239",
"assets/assets/icons/ic_coupon.png": "d27fdd8f143eee5087e371bd7ef1bdbc",
"assets/assets/icons/ic_background2.png": "891e4557077c687d4201404dbc4cc44b",
"assets/assets/icons/ic_bus_rating_1.png": "ccd8baded392019634227eb9f0c6381f",
"assets/assets/icons/ic_unselected_crying.png": "55a59bbd079f47a99e3a66833e460887",
"assets/assets/icons/ic_review4.png": "e30555b3e604cf8c2830296c544b4c5a",
"assets/assets/icons/ic_invite_1.png": "25a4210acd3b8553336b96d6d931235a",
"assets/assets/icons/ic_location.png": "a62981bd22d5f6e34ef49296ac9d9ada",
"assets/assets/icons/ic_location_19.png": "f3e28fba6a8c6d606b25fc4e19b50027",
"assets/assets/icons/ic_camera.png": "523f5368257d925d818b996d67553cf7",
"assets/assets/icons/ic_user_marker.png": "340deab9ff0e2875cfa4261da5169987",
"assets/assets/icons/ic_home_white_1.png": "4d7e772551d37908f33bd62594352033",
"assets/assets/icons/ic_notification_1.png": "b19a673f18c39418dd91a793e6fee98e",
"assets/assets/icons/ic_checkbox.png": "b15128ff7dae891e5892c86b9969b8cb",
"assets/assets/icons/ic_destination.png": "22e6ca32c424f04d917042f2c21f3a06",
"assets/assets/icons/ic_my_trip_circle.png": "61dc5d51b8d70cd12ae970f1c8d40a39",
"assets/assets/icons/ic_toggle_unselect.png": "1bf8cfc687476de7ec052cb5b6afc3de",
"assets/assets/icons/ic_logo1.png": "14357eea9a261bd91885655e0e09b1e1",
"assets/assets/icons/ic_add.png": "3b36565ee9ef6f4eecf820d910707142",
"assets/assets/icons/ic_setting_select.png": "136cfe75a330152ee32ef35c2a958f8f",
"assets/assets/icons/ic_icon1.png": "bb335cf2450cbbec6256ae3fc2e01356",
"assets/assets/icons/ic_sad_rating.png": "483c418ac48b2a4b9b517e9849e523e2",
"assets/assets/icons/ic_splash.png": "d11e5916484ead2bafe2185abe771872",
"assets/assets/icons/ic_location_blue.png": "ebdc80a6791f4ea4d9be35a10320123b",
"assets/assets/icons/ic_whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/icons/ic_trip_unselect.png": "30bcc8456ef18b440d9ff032f92a4d14",
"assets/assets/icons/ic_bus1.png": "4b13e1f09e6399d611a818044b4de2a2",
"assets/assets/icons/ic_logo2.png": "7f1dfc6dfbf9d0dd39e1efe6e59d81fe",
"assets/assets/icons/ic_right_scroll.png": "bb6284442f3e2543ccb43640cd2bdb99",
"assets/assets/icons/ic_background.png": "166296a9c47ae16888bfee38b71428b7",
"assets/assets/icons/ic_my_trips.png": "4fbbb16ac33749c73d7057d7c68154db",
"assets/assets/icons/ic_route.png": "140520c50241d501e476dd6142d1f130",
"assets/assets/icons/ic_cross.png": "4e35f5b4ff5ad7985c951819f233aacd",
"assets/assets/icons/captain_map.png": "13f0c7214b0928235effd0e41512c846",
"assets/assets/icons/ic_drawer_banner.png": "392c5a93d25e5604dd232af33f90c8a7",
"assets/assets/icons/ic_blue_onboarding.png": "82bf120d9c95bd119b1c34baddc533d7",
"assets/assets/icons/ic_unselected_neutral.png": "ae0224f6e99eea571766fb19cc77c9b4",
"assets/assets/icons/ic_mobile.png": "bf6d667e2a05e5167f40a9ef89d4f397",
"assets/assets/icons/ic_pin.png": "6b47ebc01a474a90a6ad3094019eb5b1",
"assets/assets/icons/ic_red_1.png": "5f2878739bcedff111ebefd5acf020b1",
"assets/assets/icons/ic_splash_pattern.png": "89ca6728c9a12b6a7097597ebf426f2d",
"assets/assets/icons/ic_email_12.png": "1a327d418313e07d86b923fed1801ebb",
"assets/assets/icons/ic_banner_02.png": "fe7ca78282a680570c7f941bc6672d67",
"assets/assets/icons/ic_oops.png": "d66db36f2467950a6a8ee60bee425b0c",
"assets/assets/icons/ic_header_logo.png": "3a4048c27b4c9f18d3a6f0cfb2c5ca1a",
"assets/assets/icons/ic_unselected_smile.png": "60e54e4b70075d0397ad2ac50f1c8877",
"assets/assets/icons/ic_unselected_sad.png": "afd75c76ef1eec400df57c0f76b95597",
"assets/assets/icons/ic_bus_location.svg": "c6df190dc666cd33c678aa26ca32f2ec",
"assets/assets/icons/ic_basigo.png": "b779328076d60baad6a9faba5d80d3a3",
"assets/assets/icons/ic_share.png": "ac4329aa28d826e2c58f4f8faafeb941",
"assets/assets/icons/ic_comapny_grey.png": "97d466141c7b81171d61a02934e23613",
"assets/assets/icons/ic_sad.png": "db2aa032fba417f6bfa2e58dd09df4dc",
"assets/assets/icons/ic_drawer_black.png": "4a1050fe3539f255caf87fa2ca823c62",
"assets/assets/icons/ic_cry.png": "6c152329d9259576ea7f4b548ce1de75",
"assets/assets/icons/icons-bus.png": "cd80692f0f4c87afab6f13ed676b5fc6",
"assets/assets/icons/ic_bus_icon_1.png": "4278289e1d5a43a064d194b1dc10e7e4",
"assets/assets/icons/ic_unselected_happy.png": "1bb5b02f25671fa35ac94ce989a00f9d",
"assets/assets/icons/ic_name.png": "ffcbfb5d21a3a0867bef2d5edd30e007",
"assets/assets/icons/ic_line.png": "36c3541ce3d56752c3ed0cbb3239ba8a",
"assets/assets/icons/ic_user_fill.png": "670ccaa2823983041947a2b7da7a97ab",
"assets/assets/icons/ic_seting_125.png": "a016fea96b34f00bccb9af1453a59d6e",
"assets/assets/icons/ic_sucessful.png": "7d0040e690a41e19f44d48d10d45cc42",
"assets/assets/icons/ic_basicgo.png": "12838d95e6f877a3a8170e66fba9e2fa",
"assets/assets/icons/goIcon.png": "88bad927b34574e962e06966f7ecad2e",
"assets/assets/icons/ic_next.png": "57aeae30e9df89c0da2816f35406061b",
"assets/assets/icons/ic_edit.png": "c8c8902e5c90d75babee9b036a249584",
"assets/assets/icons/ic_bus.png": "bf9b03b828fd45f2e3d322d031921194",
"assets/assets/icons/ic_trip_user.png": "872324ab37a78dd014f426513afc4ae2",
"assets/assets/icons/ic_invite_friend.png": "278259f2049371348367d6eb1dc97528",
"assets/assets/icons/ic_wallet_19.png": "aecf1524e2c67f500710793b0931c738",
"assets/assets/icons/ic_simple_smile.png": "c40d79d275b4fd802790a1b6d82693ab",
"assets/assets/icons/ic_pin_number.png": "54e655d4989df8fb842ae03376f75aac",
"assets/assets/icons/ic_home_location_1.png": "bc933205d63e04a693a92ecdad6c5794",
"assets/assets/icons/ic_star_unfill.png": "e659f2f271616097b7ba23957e18852f",
"assets/assets/icons/ic_drawer.png": "9bd59f7ed454b8620d65fe173547eed3",
"assets/assets/icons/ic_bx_hide.png": "0de4a3f446b50542325ef18f28177a28",
"assets/assets/icons/ic_driver.png": "5127f329f3d87a453291b5af9be77830",
"assets/assets/icons/ic_search.png": "3f2a04f764da00c3008eb7ccca91a27f",
"assets/assets/icons/cross.png": "5a61311ae7c02de40000cbaa552328b6",
"assets/assets/icons/ic_home_location.png": "bc933205d63e04a693a92ecdad6c5794",
"assets/assets/icons/ic_contact.png": "63f5258000effbca96a0d8b59fee90ef",
"assets/assets/icons/ic_call_1.svg": "7e26e6e420130e092fd82f13cdd8074d",
"assets/assets/icons/speech-bubble.png": "cae398ac6868ae604415ec70158a10e7",
"assets/assets/icons/ic_bell_19.png": "278078124414bb88291a28afbb215977",
"assets/assets/icons/ic_settings_unselect.png": "afe969aebd12d30b2c0e21289327cd34",
"assets/assets/icons/ic_back.png": "32606db6ab543880e9ce301f9908e00a",
"assets/assets/icons/ic_mytrips.png": "a01110dd0ad784ca39ee38ee66663f2f",
"assets/assets/icons/customer_map.png": "b44c93029460466a8446306f056ae7af",
"assets/assets/icons/ic_sign_up.png": "26f2063ae487f4aeac829b0b858f6e34",
"assets/assets/icons/ic_home_unselect.png": "fba48e9f30408723b860c4c36fbf0ac1",
"assets/assets/icons/ic_result.png": "818389a2cf43fc18e87d5ee63af8e564",
"assets/assets/icons/ic_smile-face.png": "9ff620ca49c3b61f0643b2871d1b8202",
"assets/assets/icons/ic_discount.png": "460cbc358d96ac22c0176f2dd1667df6",
"assets/assets/icons/ic_onboarding_12.png": "5306d37aed7755696e899c3184032a54",
"assets/assets/icons/ic_email.png": "c819268bf3273460e1a13c1918a69283",
"assets/assets/icons/ic_no_bus.png": "d66db36f2467950a6a8ee60bee425b0c",
"assets/assets/icons/ic_no_route.png": "53a340d867b5358b3ff35921b58838f7",
"assets/assets/icons/ic_happy.png": "8f65c1c0e34ba79724e8d8402b1df2ec",
"assets/assets/icons/ic_neutral.png": "b9a35ff0d0bd1417ac2242fc3ed60ff7",
"assets/assets/icons/ic_cry_green.png": "df89a4609ccf8f4ed8384174ac653a03",
"assets/assets/icons/ic_home_new.png": "143ce346b5ce6f0f21d2d008f2c46031",
"assets/assets/icons/ic_black_back.png": "9c2b99294c6dc44c7c49750c7e2e7fb7",
"assets/assets/icons/ic_dropdown_1.png": "06aece4852fc4c341485a74306f56aeb",
"assets/assets/icons/ic_gender_17.png": "3bcdb256dedc287b4d81d236089abf7d",
"assets/assets/icons/ic_menu.png": "5fbb494173d8ca00bc62664852351edf",
"assets/assets/icons/ic_travel_1.png": "c838e2cd530c0b2ded46b00400603f13",
"assets/assets/icons/ic_call_1.png": "cdd86b6f278e3bf2cc353dda4b168628",
"assets/assets/icons/ic_left.png": "d0485c6b6324c1133f893c5c45a4d431",
"assets/assets/icons/ic_wallet_bg.png": "000f823192adca2c8f00ad9a01c3bb16",
"assets/assets/icons/ic_slider.png": "5f3484ef28d37a9a8e7c779ae4700753",
"assets/assets/icons/ic_trip_select.png": "f9b392f5a025977147bc6aeeb1d2f56a",
"assets/assets/icons/ic_green_1.png": "156a80266f8c71d73858477ccc2d5da1",
"assets/assets/icons/ic_location_12.png": "030b30ec41f01fd9d1457c34a9737039",
"assets/assets/icons/ic_down_view.png": "62eb7742e502a6be3c2633e7a88989d4",
"assets/assets/icons/ic_location2.png": "17ae6eab5ac9fbf2a7eb2a0d00d0e095",
"assets/assets/icons/ic_call.png": "b6e652ada46cda8658a44509401e1ce9",
"assets/assets/icons/ic_bus_21.png": "346ccde4da09b2cedf2950b2fd2a5a5a",
"assets/assets/icons/ic_destination_location.png": "ed0ed2ba31a5b5ad1cab6674271c0bee",
"assets/assets/icons/ic_calender_15.png": "7107f2165683fc9e9a89994ae63cb923",
"assets/assets/icons/ic_busImage2.png": "d832603384fae84daa8cb695ac02c035",
"assets/assets/icons/ic_sucessful_splash.png": "5ce32a11d44e1983aae815db75e9a8d6",
"assets/assets/icons/ic_contact_us.png": "9f96bf1b7d3489b202bde0332cbc12da",
"assets/assets/icons/ic_gift.png": "7bd1e5054902d5702b66dfa6dad5399e",
"assets/assets/icons/ic_genders.png": "adf9c9c35f530b7d1dbd5566d1925576",
"assets/assets/icons/ic_splash_logo.png": "22451e19c09df5a15228f6fba4564803",
"assets/assets/icons/ic_success_bg.png": "c4295154796de7128dcd0ed819721ee6",
"assets/assets/icons/ic_basigo_datetime.png": "8e002c3d8b97daf4c0a880d5b98bb11d",
"assets/assets/icons/bus_route.png": "c686c0722b1b167cd73378e69e38daa0",
"assets/assets/icons/ic_trips_16.png": "ced8734e874154e20c1fddfd3d251db0",
"assets/assets/icons/ic_onBoard_background.png": "c3b6708e9397dfa976ce1b45d6847db7",
"assets/assets/icons/ic_passeses.png": "1e812a6fbb8648e855cccc285c22ddfb",
"assets/assets/icons/ic_logo_wine@3x.png": "7f055ffef7b319057f14b6689806caab",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
