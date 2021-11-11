'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "779e4407538f0ef1c54b84dbb99cfe80",
"index.html": "987011d24136999d57f135f0f4df4f21",
"/": "987011d24136999d57f135f0f4df4f21",
"safety4me_service_worker.js": "79a07849d4bed63174afbb3ab493c482",
"main.dart.js": "52fb92ea7a7c44d9736ab9caea73e9cd",
"web.config": "ac92e3008cb52f53d67d045ed4c9bda0",
"favicon.png": "cb08503dd068a65b09d0db62578bf0f5",
"icons/Icon-192.png": "c4553ce1cf349e24ec2c7b03336a09a1",
"icons/Badge-192.png": "80923c2099d629dcc13e7d9a74297c79",
"icons/Icon-512.png": "7ec73b601ef160284c0784e395583c65",
"manifest.json": "cd388b4185c0071e90c205df95b3b483",
"assets/AssetManifest.json": "d6a09ec4dbd30684b0da92022358e01b",
"assets/NOTICES": "c79cc50f95e7b101cc7f8cbd46e6cbb7",
"assets/FontManifest.json": "0ea8a926168b03867b5b247b2a3b26cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Antonia.png": "51e988ebf5bdde7265d9aa9ff3ad89ea",
"assets/assets/images/CorrectIdentification1Hosp.png": "f63fab2e8211ba72608d26df3fd20100",
"assets/assets/images/Happy.png": "74ea04100ada0400a5d6213a50f62bdb",
"assets/assets/images/SafeSurgery6Hosp.png": "27d9df0f7bcd7dc3a476b4bc89bba7a5",
"assets/assets/images/SplashScreen.png": "93eb8ead4cffaf16abca64a59731f827",
"assets/assets/images/CirugiaSegura1Hosp.png": "ff281b8326de2fe24feeae59644a8e15",
"assets/assets/images/TeamCommunication1Hosp.png": "a94d2dd56343bfbc8d4d8b332482d5f1",
"assets/assets/images/ImagingExamsBackground.png": "0337f466753969c7e1a2bd1bf611fe90",
"assets/assets/images/Hospital.png": "51afd0fe0dbb62e5732cbbbf90f44d1b",
"assets/assets/images/PacificBlueLevelCircle.png": "ef0bde312e2bcdbde51bd653f44b9a1f",
"assets/assets/images/SeguridadDeDrogas6Hosp.png": "bd5d3ef7beb33019ef30de225220bff2",
"assets/assets/images/IconLevel1.png": "37d74dbd9fa6b029a448bef3608a5e8a",
"assets/assets/images/Trophy.png": "50a6a1becf553fef8b3a2908df6dec5a",
"assets/assets/images/HigienizacaoDasMaos1Hosp.png": "4b73c6bc09c7a8a58b97c0b1910be892",
"assets/assets/images/HigieneDeManos2Hosp.png": "27152b4aa56861d870b4572f3956214d",
"assets/assets/images/IdentificacionCorrecta1Hosp.png": "4586da15a4f5220e3e85434e9e98ba69",
"assets/assets/images/PrevencionDeCaidas1Hosp.png": "53584432a7802839c75068b44276c27a",
"assets/assets/images/Graca.png": "5f1725ab850fa686c8464ec4f1e55e33",
"assets/assets/images/ComunicacaoEntreEquipes2Hosp.png": "f3bfd21d2a19d07427c83860e643d698",
"assets/assets/images/NewBackground.png": "503e2c6df0d0cc5bbca61b4b4749cb61",
"assets/assets/images/IdentificacaoCorreta6Hosp.png": "5e5269244460ad40780763ac20d3176e",
"assets/assets/images/YPacificBlueLogo.png": "9bc55f2c0f87fd87819cc0544e78ff5d",
"assets/assets/images/FallPrevention3Hosp.png": "f42b0aca3b01f30e891c60491abe0a27",
"assets/assets/images/SegurancaComMedicamentos3Hosp.png": "ca18dba38a4733cdecfeebbec75cc432",
"assets/assets/images/Neutral.png": "de82b4fe70d6d2b937247ccf0187dffc",
"assets/assets/images/PrevencaoDeQuedas5Hosp.png": "421b926072f5d6f2c8946f5033f20830",
"assets/assets/images/ComunicacaoEntreEquipes3Hosp.png": "011389ad2946d87824d4cc2ed8286c1a",
"assets/assets/images/HandHygiene1Hosp.png": "baa9d77d20054a9854a45f4d722e4786",
"assets/assets/images/PrevencaoDeQuedas4Hosp.png": "19249ba64b007a43d2e874e619c49fd5",
"assets/assets/images/FallPrevention2Hosp.png": "a9b25baacbe0cb6e86c0139868ccdbc8",
"assets/assets/images/SegurancaComMedicamentos2Hosp.png": "8c81672060a7dcff7e76c63a229e124e",
"assets/assets/images/ComunicacionDelEquipo5Hosp.png": "ab8fd49bce1e5a97c991bc8be20bc86b",
"assets/assets/images/Sad.png": "da8279fbffedf8360e01180952f8240a",
"assets/assets/images/CirurgiaeProcedimentoSeguro1Hosp.png": "fea61296641262a21de1751a21c7bb38",
"assets/assets/images/AllTeam.png": "64920b6a5ba8af2b670bb7bccec002b2",
"assets/assets/images/DrugSafety6Hosp.png": "2916a4682f6d4aa882995f81b3571b11",
"assets/assets/images/HigieneDeManos3Hosp.png": "d678d951650ada59266add25d906aba6",
"assets/assets/images/GoldenTrophy.png": "65cba4a60e276e74328455e93a8fee5b",
"assets/assets/images/GoldenTrophy.svg": "747f2a94e1d2de85382a258801659b42",
"assets/assets/images/YWhiteLogo.png": "1e57e68851df204256d53cc0aa085bb9",
"assets/assets/images/ComunicacaoEntreEquipes1Hosp.png": "34cf2f22289ce8e0683833848d80cc9e",
"assets/assets/images/PrevencionDeCaidas2Hosp.png": "d4ef5bfb8a5df61040f2dede57b47eee",
"assets/assets/images/PrevencaoDeQuedas6Hosp.png": "aa2e6d984fdea857bfacb1ad3a13ac32",
"assets/assets/images/MobileBackgroundEmpty.png": "9ad9ca71e0740deb0f3f910aa243cba9",
"assets/assets/images/IdentificacaoCorreta5Hosp.png": "b4906580185420cde52d82f44ed8c557",
"assets/assets/images/HandHygiene3Hosp.png": "ff1e3dc81c49d1b974d67afd63532fa2",
"assets/assets/images/CorrectIdentification2Hosp.png": "e3e3b5454fc5c1a49bcdae7f6f09caa7",
"assets/assets/images/SafeSurgery5Hosp.png": "18e5ac5e45b9de509d86a7323cd48fcf",
"assets/assets/images/RafaelRounded.png": "cda64837b63e87d87df9f73ed67c1ce0",
"assets/assets/images/CirurgiaeProcedimentoSeguro3Hosp.png": "ceff1cbb914f73f73279f2952b53872c",
"assets/assets/images/FlorenceRounded.png": "7015bd04440cf532d2eea51b29f30197",
"assets/assets/images/GoldenTrophyButton.png": "fc6a53452b7b35fd4159a62724f368ee",
"assets/assets/images/HigieneDeManos1Hosp.png": "3e7749be05d469a87839129344b28356",
"assets/assets/images/IdentificacionCorrecta2Hosp.png": "a658fbf1ad036b35325400a0dca55ecc",
"assets/assets/images/HigienizacaoDasMaos2Hosp.png": "7193f402700e81ce0e6b640144a33e90",
"assets/assets/images/DrugSafety4Hosp.png": "852751a5a1f1c7d0f83fb05d7f748a8d",
"assets/assets/images/hospitalBackground.jpg": "37e8b3741d5ea6c72a75a6b20f418a9f",
"assets/assets/images/SeguridadDeDrogas5Hosp.png": "b77be4e5bd1b40aa4b1db2404ecf9b42",
"assets/assets/images/LogoSafety4Me.png": "db921a78d44f427d8df8465c8b5e6a27",
"assets/assets/images/CirugiaSegura2Hosp.png": "746f6ed63b398f19dda3ccda9c3df7e9",
"assets/assets/images/TeamCommunication2Hosp.png": "f28cfcf7f3a2b1748c9b9ceb25024c99",
"assets/assets/images/CirurgiaeProcedimentoSeguro2Hosp.png": "29826d496b009c300eb89b396e5f44c7",
"assets/assets/images/SafeSurgery4Hosp.png": "3c95434caa0c1c5ee318511c9e6f990a",
"assets/assets/images/CorrectIdentification3Hosp.png": "ddc909451e69f1fdff96d35fc79b24a4",
"assets/assets/images/GameRafaelRounded.png": "ec4f71a59d3aec167c50c68311314a74",
"assets/assets/images/ComunicacionDelEquipo6Hosp.png": "5960ad0805a63ca2907e2a62ed3b0765",
"assets/assets/images/SeguridadDeDrogas4Hosp.png": "1070d561f0caa3c87d20bfb1fe291f34",
"assets/assets/images/IdentificacionCorrecta3Hosp.png": "26aa859517d235060c6b7fbbf026c3b9",
"assets/assets/images/DrugSafety5Hosp.png": "7b20e745af44661d59040435bc5ee1c5",
"assets/assets/images/HigienizacaoDasMaos3Hosp.png": "89da22e735cc6856e9047dee8a6deb3b",
"assets/assets/images/Hector.png": "ff7b15f2f3fcecada4c8dcc7ff84c033",
"assets/assets/images/TeamCommunication3Hosp.png": "78e729e598a05155a5ca0494a76405f9",
"assets/assets/images/CirugiaSegura3Hosp.png": "0890a1a3ca58da167626ebe8d475a3d4",
"assets/assets/images/Ana.png": "907ac0383ff8f183a8f5a408c7519cfc",
"assets/assets/images/PrevencionDeCaidas3Hosp.png": "1e9161371595b0d30cec7625a8923091",
"assets/assets/images/OncologyBackground.png": "8925acbd7400db2762e2f97071aa01a2",
"assets/assets/images/Fernando.png": "f0538597ad37173e547341cbc345ec6e",
"assets/assets/images/PacificBlueLevelCircle.svg": "580259736d27cf0dfabeab74884091b7",
"assets/assets/images/SegurancaComMedicamentos1Hosp.png": "d7ada3e0e2c8b5022cdb50c91983f410",
"assets/assets/images/FallPrevention1Hosp.png": "f565e475f39131225546840e739b09de",
"assets/assets/images/HandHygiene2Hosp.png": "9e8039b4b23d23555c2821b15f089b2a",
"assets/assets/images/IdentificacaoCorreta4Hosp.png": "08bff43d658b0c415059f3cbadb7022c",
"assets/assets/images/RafaelRoundedSad.png": "c64d6565e737489286d87041504b0bf7",
"assets/assets/images/CrossRounded.png": "c40711368433f818a2561f993415ade7",
"assets/assets/images/FallPrevention4Hosp.png": "0723f13d3671cdf0d256217b32d1224c",
"assets/assets/images/SegurancaComMedicamentos4Hosp.png": "696177451981b7cf20d48f5a46cf47fa",
"assets/assets/images/Heart.png": "d2e877804a8dafbdf15fc7c237f37bae",
"assets/assets/images/MobileBackground.png": "241fad318ca06b2d7474dabdacbb65cc",
"assets/assets/images/PrevencaoDeQuedas2Hosp.png": "c7fe3a52d6aca6a901ee6e1f7c38087d",
"assets/assets/images/IdentificacaoCorreta1Hosp.png": "98079c09c5c4911ddfcc2d982e908122",
"assets/assets/images/GracaRounded.png": "cda2ff1420508f64c84f6772b18665b8",
"assets/assets/images/ComunicacionDelEquipo1Hosp4.png": "214fa9e594df0b31bd4feaaa32e2a917",
"assets/assets/images/ChatBalloon.png": "c34ec7f255a84a7214425019d66c0bdf",
"assets/assets/images/SplashScreenBackground.png": "479d94df8cf1df3f4d13f107801c624b",
"assets/assets/images/IconDeslogado.png": "062b99c33ab89f59e30a80f249504eac",
"assets/assets/images/Florence.png": "068841f6ca5803cf94f553cf49d1ecc9",
"assets/assets/images/PrevencionDeCaidas6Hosp.png": "275aa4821831fd4928dd4f536248ba0f",
"assets/assets/images/ComunicacaoEntreEquipes5Hosp.png": "b9bd6076b680451bac18c312329beb68",
"assets/assets/images/SeguridadDeDrogas1Hosp.png": "d1f0679d56879a08e864d1644861c7a2",
"assets/assets/images/HigienizacaoDasMaos6Hosp.png": "6e1d93938e402e4d32418a27040bdf5e",
"assets/assets/images/HigieneDeManos5Hosp.png": "f37e849383e71cf7b8ce773c221feecd",
"assets/assets/images/IdentificacionCorrecta6Hosp.png": "d1143f6ef2023cfc122f99fb14c0f4d5",
"assets/assets/images/DesktopBackgroundEmpty.png": "344e66eda2e6220d428c6c963315e432",
"assets/assets/images/CirugiaSegura6Hosp.png": "a9df7956f62d6c1609d0b1b7dd2035b8",
"assets/assets/images/TeamCommunication6Hosp.png": "50778f54bbce7386b86408957ae98a9e",
"assets/assets/images/AllTeamWithBackground.png": "29e103a6f77f212b2e3e9bfbf3a1d4af",
"assets/assets/images/AntoniaRounded.png": "c3582a09a5a9c80ff6dd1ce2b461ac8c",
"assets/assets/images/TVDoutorcoracao.png": "22f10e0fcc334aaced94c1b97b2fbdd4",
"assets/assets/images/RedHeartLevelCircle.png": "f3b19f94ce0962c46dc08563a572cc32",
"assets/assets/images/FernandoRounded.png": "4031f3bfa29dbd9a66c9c7581aa43b9f",
"assets/assets/images/SafeSurgery1Hosp.png": "dce9ac06e55bbc2c25cd5df6e0280785",
"assets/assets/images/CorrectIdentification6Hosp.png": "09ef8c5ecbe21b1c82ca75482c8c12b0",
"assets/assets/images/ComunicacionDelEquipo3Hosp.png": "1b83c5b9bfc1796ccea5761359814003",
"assets/assets/images/Logo.png": "ad6b9366674e72f8ba959673bf03f766",
"assets/assets/images/DesktopBackground.png": "3aed3c034bc59fe948c077521c3a14c8",
"assets/assets/images/DrugSafety1Hosp.png": "c42171c0881a30603fac985169518307",
"assets/assets/images/HigieneDeManos4Hosp.png": "caa71d8ca2d515b09ba43ad067a1a8b0",
"assets/assets/images/LogoSafety4MeWhitePacificBlue.png": "ae2a07b9516a46dddb1fdab6631db46e",
"assets/assets/images/CirurgiaeProcedimentoSeguro6Hosp.png": "c228b9e00ed3c73dd6140fdda6e16ec0",
"assets/assets/images/ComunicacionDelEquipo2Hosp.png": "19676265409e08526dd8fd00a1ea956a",
"assets/assets/images/FinalTrophy.png": "619043e4be927c802116e05c208ff8ac",
"assets/assets/images/PrevencaoDeQuedas3Hosp.png": "31310df83e3a5738c5818f6162ce2fc3",
"assets/assets/images/FallPrevention5Hosp.png": "f761665ced4ef34e29003a25fbf3ffdc",
"assets/assets/images/SegurancaComMedicamentos5Hosp.png": "d1d1384f76fd713b7de049b641075722",
"assets/assets/images/TVDoutor.png": "e432a5611fc4657d567c900cf9c10af8",
"assets/assets/images/HandHygiene6Hosp.png": "edbdb076724287dd8644e7b73befdf3a",
"assets/assets/images/ComunicacaoEntreEquipes4Hosp.png": "ce7c9363aa9b250d3f2a037daf0234d3",
"assets/assets/images/CirugiaSegura5Hosp.png": "8a4d3f06a54c1fa21ddb936aca491998",
"assets/assets/images/TeamCommunication5Hosp.png": "355a32810dcfdefa66aa094332096285",
"assets/assets/images/HigieneDeManos6Hosp.png": "dfd6e1cef500a96d043fcec512c1d15b",
"assets/assets/images/IdentificacionCorrecta5Hosp.png": "8d7e6544f93d8497b2798b4500135f14",
"assets/assets/images/DrugSafety3Hosp.png": "bfa6fff8c45a2977a488cc2079de1929",
"assets/assets/images/HigienizacaoDasMaos5Hosp.png": "e999342f2eca651de43344bd8399fb10",
"assets/assets/images/SeguridadDeDrogas2Hosp.png": "0778b37a92920bc205f58a78ee01b6fb",
"assets/assets/images/IconLogado.png": "f7e98b603efd6b84933c52048c2bbf0a",
"assets/assets/images/TVDoutor.svg": "582a04bf55dd77f28af633a14a93e7fb",
"assets/assets/images/SafeSurgery2Hosp.png": "ba3fb36a3167611c8f06e7e9fdb058d1",
"assets/assets/images/LogoSafety4MeWhite.png": "25e5ef0cffd790f38ed304aaabc12a53",
"assets/assets/images/CorrectIdentification5Hosp.png": "e15d0d11585800ce0e502a50ad4c3bad",
"assets/assets/images/CirurgiaeProcedimentoSeguro4Hosp.png": "eb74af52096cbd2ffd56654292f24d13",
"assets/assets/images/NewBackground3.png": "804e093cb66146a2d2fa1abfd346d6b3",
"assets/assets/images/IdentificacaoCorreta2Hosp.png": "761cebc8303e1791b008f2961c194c92",
"assets/assets/images/HandHygiene4Hosp.png": "952c2115676255a3af602d747d95d743",
"assets/assets/images/PrevencaoDeQuedas1Hosp.png": "bc8b9f1d613b4b5ef92e28f31498c5cd",
"assets/assets/images/ComunicacaoEntreEquipes6Hosp.png": "f3222cbcdcc055b69223e466eb34f508",
"assets/assets/images/PrevencionDeCaidas5Hosp.png": "5407e88f95c87c4523d032bca6fb3864",
"assets/assets/images/LogoTvDoutor.png": "25bfcda1d5699b1da3943ced894a69b7",
"assets/assets/images/NewBackground2.jpg": "6ee8618e8db19fc702cf18ba13f7c3c4",
"assets/assets/images/Rafael.png": "ad6b9366674e72f8ba959673bf03f766",
"assets/assets/images/HandHygiene5Hosp.png": "ac49abd439b65ab535ec0b7dc552277b",
"assets/assets/images/IdentificacaoCorreta3Hosp.png": "7ae416ac126ef6dfed92909b575304a7",
"assets/assets/images/RedHeartLevelCircle.svg": "e270503ca7602aa8ef508e1e7ebc6eac",
"assets/assets/images/SegurancaComMedicamentos6Hosp.png": "6a3fd22a2958f576b06f54672676ffef",
"assets/assets/images/FallPrevention6Hosp.png": "5cfb8c1009e6e9de05e47a9b76da6e27",
"assets/assets/images/PrevencionDeCaidas4Hosp.png": "72e813a3edd9f90a5a991524966e4021",
"assets/assets/images/HospitalizationBackground.png": "0b912eb0b3676fe4f27ca2bf9d50f94a",
"assets/assets/images/DialysisBackground.png": "1b6b4c5613c539f5f0104fab80f89708",
"assets/assets/images/TeamCommunication4Hosp.png": "a6954451315f06e66bc8a7df24c74442",
"assets/assets/images/HectorRounded.png": "270411e2fdd31f56bee44bbbf1aeeb88",
"assets/assets/images/CirugiaSegura4Hosp.png": "04f7df706dcb47d583480c0b115d30f3",
"assets/assets/images/SeguridadDeDrogas3Hosp.png": "4c18b12c41ed133332d092fb0929e2b3",
"assets/assets/images/IdentificacionCorrecta4Hosp.png": "a201ecb1e3024d5f8cb7f6068938edbc",
"assets/assets/images/HigienizacaoDasMaos4Hosp.png": "004a9e4188644c9cef24d1e581f4ec04",
"assets/assets/images/DrugSafety2Hosp.png": "5b0721fe2a2052a94a2c354d6e1c7adc",
"assets/assets/images/AnaRounded.png": "4fee69afdf7eac2d28f29da82d1f09fb",
"assets/assets/images/ComunicacionDelEquipo1Hosp.png": "bae506a374053fb2bb895e28357b3e5a",
"assets/assets/images/CirurgiaeProcedimentoSeguro5Hosp.png": "5568366e1fe8127f3406fb1a21123708",
"assets/assets/images/CorrectIdentification4Hosp.png": "32c5dfd58f500eeea39d6b0594d123b2",
"assets/assets/images/SafeSurgery3Hosp.png": "df8362727aee26de0465501d19b2ceaa",
"assets/assets/fonts/Quentin.otf": "328fdcdf83ac1d612edc70ebd41c861f",
"assets/assets/animations/HomeAnaAndHector.json": "1fe591d62c1239f1483f76bf9f169762",
"assets/assets/animations/GameExplain.json": "1d5ea95b73ae09856dd1c2b7e9c024be",
"assets/assets/animations/GameBackgroundMobile.json": "976b44632e2419a09e0e049e88a712bf",
"assets/assets/animations/GameBackgroundWeb.json": "e74200d6afe4313a6e2a9546c404411f",
"assets/assets/animations/HomeAnaAndGraca.json": "5542523a8ec19f6a18252dc9b27bd1cf",
"assets/assets/animations/HomeHectorAndFernando.json": "726f9b58aea48ce1299a87fba99b8fe7",
"assets/assets/animations/HomeAntoniaAndRafael.json": "de9098cc9e802d17752907160e202632",
"assets/assets/animations/HomeRafaelAndFlorence.json": "7622139131e00240207970afe12f4f0f",
"assets/assets/animations/HomeFlorenceAndFernando.json": "036de2e6aa7570b078c7c750a11fcd82",
"flutter_facebook_auth.js": "15ddb918bb42aae3e664d8accc9bb216"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
