"use strict";


/* =========================================================
   CONF-004 — STAGE ZERO

   CHANGE ALL CLIENT INFORMATION HERE ONLY
========================================================= */

const CONFERENCE = {

  name:
    "FOUNDERS / 27",

  shortName:
    "F/27",

  tagline:
    "Build what comes next.",

  organizer:
    "Launch District",


  doorsAt:
    "2027-05-12T08:30:00+03:00",

  startAt:
    "2027-05-12T09:30:00+03:00",

  endAt:
    "2027-05-12T18:00:00+03:00",

  timeZone:
    "Asia/Baghdad",


  venue:
    "Baghdad Innovation Hall",

  city:
    "Baghdad",

  country:
    "Iraq",


  /*
    Leave empty to automatically create
    a Google Maps search URL.
  */
  mapsUrl:
    "",


  /*
    External registration only.
    Leave empty to hide the button.
  */
  registrationUrl:
    "https://example.com/register",


  websiteUrl:
    "https://example.com",


  /*
    Leave empty to use current invitation URL.
  */
  shareUrl:
    "",


  founders: [

    {
      name:
        "Lina Kareem",

      company:
        "NOVA LABS",

      role:
        "Founder & CEO",

      image:
        "founder-01.jpg",

      alt:
        "Portrait of startup founder Lina Kareem"
    },

    {
      name:
        "Omar Saleh",

      company:
        "SHIFT",

      role:
        "Co-Founder & Product Lead",

      image:
        "founder-02.jpg",

      alt:
        "Portrait of startup founder Omar Saleh"
    },

    {
      name:
        "Adam Nouri",

      company:
        "GROUNDWORK",

      role:
        "Founder & Managing Director",

      image:
        "founder-03.jpg",

      alt:
        "Portrait of startup founder Adam Nouri"
    }

  ],


  stageBeats: [

    {
      label:
        "THE IDEA",

      title:
        "Start with the problem.",

      description:
        "A summit for founders building practical companies around real problems."
    },

    {
      label:
        "THE PEOPLE",

      title:
        "Meet builders, not spectators.",

      description:
        "Founders, operators and investors sharing what happened behind the polished launch."
    },

    {
      label:
        "THE STAGE",

      title:
        "No twenty-slide theatre.",

      description:
        "Focused conversations, practical stories and direct questions from people building now."
    },

    {
      label:
        "THE DATE",

      title:
        "May 12. Baghdad.",

      description:
        "One day dedicated to what founders learned before the headlines arrived."
    }

  ],


  moments: [

    {
      time:
        "09:30",

      type:
        "Opening",

      title:
        "The First Move",

      description:
        "A short opening on building companies when the map is still unclear."
    },

    {
      time:
        "11:00",

      type:
        "Founder Session",

      title:
        "Before Product-Market Fit",

      description:
        "What founders changed when the first version of the plan stopped working."
    },

    {
      time:
        "14:00",

      type:
        "Conversation",

      title:
        "Capital Without Theatre",

      description:
        "A direct discussion on funding, discipline and what investors actually need to understand."
    },

    {
      time:
        "16:30",

      type:
        "Closing",

      title:
        "What Happens Monday?",

      description:
        "A final session focused on decisions founders can carry back into their companies."
    }

  ]

};



/* =========================================================
   DATES
========================================================= */

const DOORS_DATE =
  new Date(
    CONFERENCE.doorsAt
  );


const START_DATE =
  new Date(
    CONFERENCE.startAt
  );


const END_DATE =
  new Date(
    CONFERENCE.endAt
  );


let countdownTimer =
  null;



/* =========================================================
   ELEMENTS
========================================================= */

const elements = {

  doorsTime:
    document.getElementById(
      "doorsTime"
    ),

  startTime:
    document.getElementById(
      "startTime"
    ),

  heroDate:
    document.getElementById(
      "heroDate"
    ),


  stageLabel:
    document.getElementById(
      "stageLabel"
    ),

  stageTitle:
    document.getElementById(
      "stageTitle"
    ),

  stageDescription:
    document.getElementById(
      "stageDescription"
    ),

  spotlightRange:
    document.getElementById(
      "spotlightRange"
    ),


  countdownDays:
    document.getElementById(
      "countdownDays"
    ),

  countdownHours:
    document.getElementById(
      "countdownHours"
    ),

  countdownMinutes:
    document.getElementById(
      "countdownMinutes"
    ),

  countdownSeconds:
    document.getElementById(
      "countdownSeconds"
    ),

  countdownMessage:
    document.getElementById(
      "countdownMessage"
    ),


  founderTrack:
    document.getElementById(
      "founderTrack"
    ),

  momentList:
    document.getElementById(
      "momentList"
    ),


  venueCity:
    document.getElementById(
      "venueCity"
    ),

  venueLocation:
    document.getElementById(
      "venueLocation"
    ),


  mapButton:
    document.getElementById(
      "mapButton"
    ),

  secondaryMapButton:
    document.getElementById(
      "secondaryMapButton"
    ),

  registerButton:
    document.getElementById(
      "registerButton"
    ),

  websiteButton:
    document.getElementById(
      "websiteButton"
    ),


  calendarButton:
    document.getElementById(
      "calendarButton"
    ),

  shareButton:
    document.getElementById(
      "shareButton"
    ),

  heroShareButton:
    document.getElementById(
      "heroShareButton"
    ),


  footerYear:
    document.getElementById(
      "footerYear"
    ),

  statusMessage:
    document.getElementById(
      "statusMessage"
    )

};



/* =========================================================
   INITIAL DATA
========================================================= */

function populateConference() {

  document
    .querySelectorAll(
      "[data-field]"
    )
    .forEach(
      (element) => {

        const field =
          element.dataset.field;


        if (
          Object.prototype.hasOwnProperty.call(
            CONFERENCE,
            field
          )
        ) {

          element.textContent =
            CONFERENCE[field];

        }

      }
    );


  elements.doorsTime.textContent =
    formatTime(
      DOORS_DATE,
      false
    );


  elements.startTime.textContent =
    formatTime(
      START_DATE,
      false
    );


  elements.heroDate.textContent =
    formatHeroDate(
      START_DATE
    );


  elements.venueCity.textContent =
    CONFERENCE.city.toUpperCase();


  elements.venueLocation.textContent =
    `${CONFERENCE.city}, ${CONFERENCE.country}`;


  elements.footerYear.textContent =
    START_DATE.getFullYear();


  configureLinks();

  updateMetadata();

  addStructuredData();

}



/* =========================================================
   TIME FORMAT
========================================================= */

function formatTime(
  date,
  hour12 = true
) {

  return new Intl.DateTimeFormat(
    "en-US",
    {
      timeZone:
        CONFERENCE.timeZone,

      hour:
        "2-digit",

      minute:
        "2-digit",

      hour12
    }
  ).format(date);

}



function formatHeroDate(date) {

  const day =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone:
          CONFERENCE.timeZone,

        day:
          "2-digit"
      }
    )
      .format(date);


  const month =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone:
          CONFERENCE.timeZone,

        month:
          "short"
      }
    )
      .format(date)
      .toUpperCase();


  const year =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone:
          CONFERENCE.timeZone,

        year:
          "numeric"
      }
    )
      .format(date);


  return `${day} ${month} ${year}`;

}



/* =========================================================
   FOUNDERS
========================================================= */

function renderFounders() {

  elements.founderTrack.innerHTML =
    "";


  CONFERENCE.founders.forEach(
    (founder, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "founder-card reveal";


      article.innerHTML = `

        <div class="founder-card__image">

          <span class="founder-card__number">
            ${pad(index + 1)}
          </span>

          <img
            src="${escapeHTML(founder.image)}"
            alt="${escapeHTML(founder.alt)}"
            loading="lazy"
            decoding="async"
          >

        </div>


        <div class="founder-card__body">

          <p class="founder-card__company">
            ${escapeHTML(founder.company)}
          </p>

          <h3>
            ${escapeHTML(founder.name)}
          </h3>

          <p class="founder-card__role">
            ${escapeHTML(founder.role)}
          </p>

        </div>

      `;


      elements.founderTrack
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   MOMENTS
========================================================= */

function renderMoments() {

  elements.momentList.innerHTML =
    "";


  CONFERENCE.moments.forEach(
    (moment) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "moment-item reveal";


      article.innerHTML = `

        <time class="moment-item__time">
          ${escapeHTML(moment.time)}
        </time>


        <div>

          <p class="moment-item__type">
            ${escapeHTML(moment.type)}
          </p>

          <h3>
            ${escapeHTML(moment.title)}
          </h3>

          <p>
            ${escapeHTML(moment.description)}
          </p>

        </div>

      `;


      elements.momentList
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   SPOTLIGHT INTERACTION
========================================================= */

function setupSpotlight() {

  const buttons =
    Array.from(
      document.querySelectorAll(
        ".stage-button"
      )
    );


  const positions =
    [
      12,
      37,
      63,
      88
    ];


  elements.spotlightRange
    .addEventListener(
      "input",
      () => {

        const value =
          Number(
            elements.spotlightRange.value
          );


        document
          .documentElement
          .style
          .setProperty(
            "--light-x",
            `${value}%`
          );


        const index =
          getClosestStageIndex(
            value
          );


        updateStageContent(
          index,
          buttons,
          false
        );

      }
    );


  elements.spotlightRange
    .addEventListener(
      "change",
      () => {

        const value =
          Number(
            elements.spotlightRange.value
          );


        const index =
          getClosestStageIndex(
            value
          );


        elements.spotlightRange.value =
          positions[index];


        document
          .documentElement
          .style
          .setProperty(
            "--light-x",
            `${positions[index]}%`
          );

      }
    );


  buttons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.stageIndex
            );


          elements.spotlightRange.value =
            positions[index];


          document
            .documentElement
            .style
            .setProperty(
              "--light-x",
              `${positions[index]}%`
            );


          updateStageContent(
            index,
            buttons,
            true
          );

        }
      );

    }
  );


  document
    .documentElement
    .style
    .setProperty(
      "--light-x",
      `${positions[0]}%`
    );

}



/* =========================================================
   FIND CLOSEST STAGE
========================================================= */

function getClosestStageIndex(value) {

  const thresholds =
    [
      25,
      50,
      75
    ];


  if (
    value <
    thresholds[0]
  ) {
    return 0;
  }


  if (
    value <
    thresholds[1]
  ) {
    return 1;
  }


  if (
    value <
    thresholds[2]
  ) {
    return 2;
  }


  return 3;

}



/* =========================================================
   UPDATE STAGE
========================================================= */

function updateStageContent(
  index,
  buttons,
  animate = true
) {

  const data =
    CONFERENCE.stageBeats[index];


  if (!data) {
    return;
  }


  buttons.forEach(
    (button, buttonIndex) => {

      const active =
        buttonIndex === index;


      button.classList.toggle(
        "is-active",
        active
      );


      button.setAttribute(
        "aria-selected",
        String(active)
      );

    }
  );


  const applyContent =
    () => {

      elements.stageLabel.textContent =
        data.label;


      elements.stageTitle.textContent =
        data.title;


      elements.stageDescription.textContent =
        data.description;

    };


  if (
    !animate ||
    prefersReducedMotion()
  ) {

    applyContent();

    return;

  }


  const readout =
    elements.stageTitle.parentElement;


  const animation =
    readout.animate(
      [
        {
          opacity: 1,
          transform:
            "translateY(0)"
        },

        {
          opacity: 0,
          transform:
            "translateY(7px)"
        }
      ],
      {
        duration:
          140,

        fill:
          "forwards",

        easing:
          "ease-in"
      }
    );


  animation.onfinish =
    () => {

      applyContent();


      readout.animate(
        [
          {
            opacity: 0,
            transform:
              "translateY(7px)"
          },

          {
            opacity: 1,
            transform:
              "translateY(0)"
          }
        ],
        {
          duration:
            220,

          fill:
            "forwards",

          easing:
            "ease-out"
        }
      );

    };

}



/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



function updateCountdown() {

  const now =
    new Date();


  const difference =
    START_DATE.getTime() -
    now.getTime();


  if (
    difference <= 0
  ) {

    handleEventStarted(
      now
    );

    return;

  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) /
      3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) /
      60
    );


  const seconds =
    totalSeconds % 60;


  elements.countdownDays.textContent =
    pad(days);


  elements.countdownHours.textContent =
    pad(hours);


  elements.countdownMinutes.textContent =
    pad(minutes);


  elements.countdownSeconds.textContent =
    pad(seconds);

}



/* =========================================================
   STARTED
========================================================= */

function handleEventStarted(now) {

  if (
    countdownTimer
  ) {

    clearInterval(
      countdownTimer
    );


    countdownTimer =
      null;

  }


  elements.countdownDays.textContent =
    "00";


  elements.countdownHours.textContent =
    "00";


  elements.countdownMinutes.textContent =
    "00";


  elements.countdownSeconds.textContent =
    "00";


  if (
    now.getTime() <=
    END_DATE.getTime()
  ) {

    elements.countdownMessage.textContent =
      "The summit is now live.";

  } else {

    elements.countdownMessage.textContent =
      "This summit has concluded.";

  }

}



/* =========================================================
   MAPS
========================================================= */

function getMapUrl() {

  const custom =
    CONFERENCE.mapsUrl?.trim();


  if (custom) {
    return custom;
  }


  const query =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}



/* =========================================================
   LINKS
========================================================= */

function configureLinks() {

  const mapUrl =
    getMapUrl();


  elements.mapButton.href =
    mapUrl;


  elements.secondaryMapButton.href =
    mapUrl;


  const registration =
    CONFERENCE.registrationUrl?.trim();


  if (registration) {

    elements.registerButton.href =
      registration;

  } else {

    elements.registerButton.hidden =
      true;

  }


  const website =
    CONFERENCE.websiteUrl?.trim();


  if (website) {

    elements.websiteButton.href =
      website;

  } else {

    elements.websiteButton.hidden =
      true;

  }

}



/* =========================================================
   ICS CALENDAR
========================================================= */

function downloadCalendar() {

  const location =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  const invitationUrl =
    getShareUrl();


  const description =
    [
      CONFERENCE.tagline,

      CONFERENCE.websiteUrl
        ? `Website: ${CONFERENCE.websiteUrl}`
        : "",

      invitationUrl
        ? `Invitation: ${invitationUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Stage Zero Invitation//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${createUID()}
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(START_DATE)}
DTEND:${formatICSDate(END_DATE)}
SUMMARY:${escapeICS(CONFERENCE.name)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(CONFERENCE.websiteUrl || invitationUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `${slugify(CONFERENCE.shortName)}.ics`;


  document.body.appendChild(
    link
  );


  link.click();

  link.remove();


  URL.revokeObjectURL(
    url
  );


  announce(
    "Calendar file downloaded."
  );

}



/* =========================================================
   ICS HELPERS
========================================================= */

function formatICSDate(date) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}Z$/,
      "Z"
    );

}



function createUID() {

  return (
    `${slugify(CONFERENCE.shortName)}` +
    `-${START_DATE.getTime()}` +
    "@stage-zero"
  );

}



function escapeICS(value = "") {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /\n/g,
      "\\n"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    );

}



/* =========================================================
   SHARE
========================================================= */

async function shareInvitation() {

  const data = {

    title:
      CONFERENCE.name,

    text:
      `${CONFERENCE.name} — ${CONFERENCE.tagline}`,

    url:
      getShareUrl()

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        data
      );


      announce(
        "Invitation shared."
      );


      return;

    } catch (error) {

      if (
        error.name ===
        "AbortError"
      ) {
        return;
      }

    }

  }


  await copyInvitationLink();

}



/* =========================================================
   COPY FALLBACK
========================================================= */

async function copyInvitationLink() {

  const url =
    getShareUrl();


  try {

    await navigator.clipboard.writeText(
      url
    );


    announce(
      "Invitation link copied."
    );

  } catch (error) {

    fallbackCopy(
      url
    );

  }

}



function fallbackCopy(text) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";

  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  try {

    document.execCommand(
      "copy"
    );


    announce(
      "Invitation link copied."
    );

  } catch (error) {

    announce(
      "Unable to copy link automatically."
    );

  }


  textarea.remove();

}



/* =========================================================
   SHARE URL
========================================================= */

function getShareUrl() {

  const custom =
    CONFERENCE.shareUrl?.trim();


  if (custom) {
    return custom;
  }


  return window.location.href;

}



/* =========================================================
   ACTIONS
========================================================= */

function setupActions() {

  elements.calendarButton
    .addEventListener(
      "click",
      downloadCalendar
    );


  elements.shareButton
    .addEventListener(
      "click",
      shareInvitation
    );


  elements.heroShareButton
    .addEventListener(
      "click",
      shareInvitation
    );

}



/* =========================================================
   REVEAL
========================================================= */

function setupRevealObserver() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    prefersReducedMotion()
  ) {

    items.forEach(
      item =>
        item.classList.add(
          "is-visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target.classList.add(
              "is-visible"
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold:
          0.12,

        rootMargin:
          "0px 0px -7% 0px"
      }
    );


  items.forEach(
    item =>
      observer.observe(item)
  );

}



/* =========================================================
   META
========================================================= */

function updateMetadata() {

  document.title =
    CONFERENCE.name;


  const description =
    `${CONFERENCE.name} — ${CONFERENCE.tagline}`;


  updateMeta(
    'meta[name="description"]',
    description
  );


  updateMeta(
    'meta[property="og:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[property="og:description"]',
    CONFERENCE.tagline
  );


  updateMeta(
    'meta[property="og:url"]',
    getShareUrl()
  );


  updateMeta(
    'meta[name="twitter:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[name="twitter:description"]',
    CONFERENCE.tagline
  );

}



function updateMeta(
  selector,
  content
) {

  const element =
    document.querySelector(
      selector
    );


  if (!element) {
    return;
  }


  element.setAttribute(
    "content",
    content
  );

}



/* =========================================================
   STRUCTURED DATA
========================================================= */

function addStructuredData() {

  const data = {

    "@context":
      "https://schema.org",

    "@type":
      "Event",

    name:
      CONFERENCE.name,

    description:
      CONFERENCE.tagline,

    startDate:
      CONFERENCE.startAt,

    endDate:
      CONFERENCE.endAt,

    eventStatus:
      "https://schema.org/EventScheduled",

    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    location: {

      "@type":
        "Place",

      name:
        CONFERENCE.venue,

      address: {

        "@type":
          "PostalAddress",

        addressLocality:
          CONFERENCE.city,

        addressCountry:
          CONFERENCE.country

      }

    },

    organizer: {

      "@type":
        "Organization",

      name:
        CONFERENCE.organizer,

      url:
        CONFERENCE.websiteUrl ||
        undefined

    },

    url:
      getShareUrl()

  };


  const script =
    document.createElement(
      "script"
    );


  script.type =
    "application/ld+json";


  script.textContent =
    JSON.stringify(
      data
    );


  document.head.appendChild(
    script
  );

}



/* =========================================================
   HELPERS
========================================================= */

function pad(number) {

  return String(number)
    .padStart(
      2,
      "0"
    );

}



function slugify(value = "") {

  return String(value)

    .toLowerCase()

    .trim()

    .replace(
      /[^a-z0-9]+/g,
      "-"
    )

    .replace(
      /^-+|-+$/g,
      ""
    );

}



function escapeHTML(value = "") {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}



function announce(message) {

  elements.statusMessage.textContent =
    "";


  window.setTimeout(
    () => {

      elements.statusMessage.textContent =
        message;

    },
    30
  );

}



function prefersReducedMotion() {

  return window
    .matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    .matches;

}



/* =========================================================
   INIT
========================================================= */

function init() {

  populateConference();

  renderFounders();

  renderMoments();

  setupSpotlight();

  setupActions();

  setupRevealObserver();

  startCountdown();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
