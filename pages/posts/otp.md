---
title: "OpenTripPlanner 101"
date: 2023/03/19
description: The ultimate open-source, community driven trip planner
tag: open source software, transit, maps
image: https://aceric.vercel.app/images/beach.jpg
---

# OpenTripPlanner 101

If you are looking for a reliable, flexible, and open-source solution for planning your trips using public transportation, bicycling, walking, and other mobility options, you might want to check out [OpenTripPlanner (OTP)](http://www.opentripplanner.org/). (I've been a huge fan of it for a while now!) Unlike proprietary options like Google Maps or Apple Maps, OTP is customizable, extensible, and interoperable with open standard data formats such as OpenStreetMap and GTFS.

Here are some of the reasons why OTP is better than Google Maps or Apple Maps for transit routing and trip planning:

- It's super customizable. You can specify your preferences for each mode, such as speed, safety, comfort, and cost. OTP can also integrate with shared mobility services like bike share and ride-hailing. Talking about customization...
- It's flexible to your needs. You can adjust various parameters like maximum walk distance, transfer penalty, wheelchair accessibility, and more. You can even create your own routing profiles based on criteria like the fastest, shortest, or greenest route. OTP can handle complex scenarios, including flexible transit services (e.g., dial-a-ride), real-time updates (e.g., delays), fare calculation (e.g., zones), and more.
- Lastly, my favorite: it's open source and community-driven. OTP is developed by a global community of developers, researchers, transit agencies, and users who contribute code, documentation, feedback, and support on [the OpenTripPlanner GitHUb](https://github.com/opentripplanner).

All in all, OpenTripPlanner offers many advantages over Google Maps/Apple Maps when it comes to transit routing and trip planning. If you want to try it out yourself, you can use one of the public instances hosted by various organizations around the world or set up your own instance using the instructions provided in the [documentation](http://www.opentripplanner.org/)! But I get it, all the Java commands can be daunting at times -- I had a bunch of trouble setting it up too. I'm here to show you how to set up an instance more quickly!

## Setting up an OpenTripPlanner instance locally

If you want to set up your own OTP instance locally, you can use `otp2-setup` which provides a Makefile that automates the tasks of downloading all the steps (OTP jar file, OSM data, GTFS data) and building a graph for a given region into a couple commands! (A region is defined by a name and a bounding box that specifies the area of interest).

### Prerequisites

To use `otp2-setup`, you need to have the following installed on your machine:

- Java 11 or higher
- Make
- Curl
- Node.js 14 or higher
- Git
- Osmium

You can check if you have these tools by checking for their version by running something like `java -version` or `make -v` in your terminal.

## Installation

First, clone the repository from github by running:

```
git clone https://github.com/leonardehrenfried/otp2-setup.git
```

This will create a folder called `otp2-setup` in your current directory. You can switch into this folder by running:

```
cd otp2-setup
```

## Usage

To see the list of available regions, you can view the repository's [updated folders](https://github.com/leonardehrenfried/otp2-setup).

Once you have chosen (or added) a region, you can build a graph for it by running:

```
make build-<region>
```

For example, if you want to build a graph for Portland, you can run:

```
make build-portland
```

To run OTP with the previously built graph, run:

```
make run-portland
```

Once that's done, you can now run your instance at http://localhost:8080! You'll be able to plan trips or use OTP in conjunction with research, work or pure fun!

Happy trip planning!
