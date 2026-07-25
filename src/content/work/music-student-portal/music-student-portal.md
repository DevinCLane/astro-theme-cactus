---
title: "Music student portal"
description: "A full stack web application for music teachers to create and share lesson plans with their students."
coverImage:
  src: "./music-student-portal.png"
  alt: "Astro build wallpaper"
---

A full stack web application for music teachers to create and share lesson plans with their students.

I've run a music education business for many years, and with the switch to virtual in 2020, I needed a way to digitally share all the documents and artifacts needed to reinforce the learning done during sessions. I used [Flipgrid](<https://en.wikipedia.org/wiki/Flip_(software)>) for a while, but then Microsoft bought, deprecated, and folded it into Teams. I decided to build my own custom tool instead of following their migration path.

Users can sign up as either a Teacher or Student. A teacher can create student accounts, which can then have lessons, which are primarily text documents with homework notes and links. Students can sign up only if a Teacher has created an account for them.

I followed an MVC architecture using Express, MongoDB, and EJS for server-rendered UI templates. Authentication was done using Passport, and the application is deployed via a Docker container to Fly.io.

## Links

View live site at this link:

::link{url="https://portal.lightninglessons.com/"}

Source code:

::link{url="https://github.com/DevinCLane/music-student-portal"}
